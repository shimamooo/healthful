# FLASK
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
# WEB SCRAPING
from bs4 import BeautifulSoup
from selenium import webdriver
import requests
import random
# MACHINE LEARNING
# import base64
# import numpy as np
# import io
# from PIL import Image
# import keras
# from keras import backend as K
# from keras.models import Sequential, load_model
# from keras.preprocessing.image import ImageDataGenerator, img_to_array

# FLASK SERVER
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# WEB SCRAPING GLOBAL VARIABLES
PATH = "./chromedriver"
veg_fruit = ['cucumber', 'carrot', 'capsicum', 'onion', 'potato', 'tomato', 'beetroot', 'cabbage', 'lettuce', 'spinach', 'cauliflower', 'turnip', 'corn', 'sweetcorn', 'sweet_potato', 'paprika', 'ginger', 'garlic', 'pea', 'banana', 'apple', 'pear', 'grapes', 'orange', 'kiwi', 'watermelon', 'pomegranate', 'pineapple', 'mango']

# LOADING MACHINE LEARNING CODE
# def get_model():
#   global model
#   model = load_model('VGG16_cats_and_dogs.h5')
#   print('*** MODEL LOADED ***')

# def preprocess_image(image, target_size):
#   if image.mode != 'RGB':
#     image = image.convert('RGB')
#   image = image.resize(target_size)
#   image = img_to_array(image)
#   image = np.expand_dims(image, axis=0)
#   return image

# print('*** LOADING KERAS MODEL ***')
# get_model()



# API ENDPOINT ROUTES
@app.route('/predict', methods=['POST'])
def predict():
  message = request.get_json(force=True)
  encoded = message['image']
  decoded = base64.b64decode(encoded)
  image = Image.open(io.BytesIO(decoded))
  processed_image = preprocess_image(image, target_size=(224, 224))

  prediction = model.predict(processed_image).tolist()

  response = {
    'prediction': {
      'dog': prediction[0][0],
      'cat': prediction[0][1]
    }
  }
  return jsonify(response)

@app.route('/form', methods=['POST'])
def form():
  message = request.get_json(force=True)
  flag = True
  while flag:
    if message['name'] in veg_fruit:
      bbc_url = 'https://www.bbc.co.uk/food/' + message['name']
      flag = False
    else:
      response = {
        'error': 'Please enter a food in our database'
      }
      return jsonify(response)


  driver = webdriver.Chrome(PATH)
  req = requests.get(bbc_url).text
  soup = BeautifulSoup(req, 'lxml')

  url_list = []
  food = soup.find_all('a', class_="promo")
  for urls in food:
    if '/food/recipes/' in urls['href']:
      url_list.append('https://www.bbc.co.uk' + urls['href'])

  final_url = url_list[random.randint(0, len(url_list))]
  driver.get(final_url)

  div = driver.find_element_by_class_name('recipe-ingredients-wrapper')
  ingredients = div.text
  div2 = driver.find_element_by_class_name('recipe-method-wrapper')
  method = div2.text

  response = {
    'urls': url_list,
    'ingredients': ingredients,
    'method': method
  }
  return jsonify(response)


if __name__ == "__main__":
  app.run()