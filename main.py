from bs4 import BeautifulSoup
from selenium import webdriver
import requests
import random

PATH = "C:\Program Files (x86)\chromedriver.exe"
veg_fruit = ['cucumber', 'carrot', 'capsicum', 'onion', 'potato', 'tomato', 'beetroot', 'cabbage', 'lettuce', 'spinach', 'cauliflower', 'turnip', 'corn', 'sweetcorn', 'sweet_potato', 'paprika', 'ginger', 'garlic', 'pea', 'banana', 'apple', 'pear', 'grapes', 'orange', 'kiwi', 'watermelon', 'pomegranate', 'pineapple', 'mango']

choice = input('Choose a vegetable/fruit:').lower()


flag = True
while flag:
    if choice in veg_fruit:
        bbc_url = 'https://www.bbc.co.uk/food/' + choice
        flag = False
    else:
        choice = input('That vegetable/fruit is not recognize, please enter another one:').lower


driver = webdriver.Chrome(PATH)
req = requests.get(bbc_url).text
soup = BeautifulSoup(req, 'lxml')

url_list = []
food = soup.find_all('a', class_="promo")
for urls in food:
    if '/food/recipes/' in urls['href']:
        url_list.append('https://www.bbc.co.uk' + urls['href'])

print(url_list)

final_url = url_list[random.randint(0, len(url_list))]
driver.get(final_url)

div = driver.find_element_by_class_name('recipe-ingredients-wrapper')
print(div.text)
div2 = driver.find_element_by_class_name('recipe-method-wrapper')
print('\n')
print(div2.text)
