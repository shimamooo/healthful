from bs4 import BeautifulSoup
from selenium import webdriver
import requests
import random

PATH = "C:\Program Files (x86)\chromedriver.exe"
veg = ['cucumber', 'carrot', 'capsicum', 'onion', 'potato', 'tomato', 'beetroot', 'cabbage', 'lettuce', 'spinach', 'cauliflower', 'turnip', 'corn', 'sweetcorn', 'sweet_potato', 'paprika', 'ginger', 'garlic', 'pea',]
fruits = ['banana', 'apple', 'pear', 'grapes', 'orange', 'kiwi', 'watermelon', 'pomegranate', 'pineapple', 'mango']
choice = input('Choose a vegetable/fruit:').lower()


if choice in veg:
    bbc_url = 'https://www.bbc.co.uk/food/' + choice
else:
    choice = input('Choose a vegetable:').lower
if choice in fruits:
    bbc_url = 'https://www.bbc.co.uk/food/' + choice
else:
    choice = input('Choose a vegetable:').lower
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
div = driver.find_element_by_class_name('gel-layout')
print(div.text)
div2 = driver.find_element_by_class_name('recipe-method-wrapper')
print('\n')
print(div2.text)
