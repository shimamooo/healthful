from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from bs4 import BeautifulSoup
from selenium import webdriver
import requests
import random

PATH = "./chromedriver"
veg_fruit = ['cucumber', 'carrot', 'capsicum', 'onion', 'potato', 'tomato', 'beetroot', 'cabbage', 'lettuce', 'spinach', 'cauliflower', 'turnip', 'corn', 'sweetcorn', 'sweet_potato', 'paprika', 'ginger', 'garlic', 'pea', 'banana', 'apple', 'pear', 'grapes', 'orange', 'kiwi', 'watermelon', 'pomegranate', 'pineapple', 'mango']

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/form', methods=['POST'])
def server():
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