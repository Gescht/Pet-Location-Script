from bs4 import BeautifulSoup
import requests


#get pet location data
url = 'https://mop-shoot.tauri.hu/?npc=61367'
soup = BeautifulSoup(requests.get(url).text, "html").find_all("script")
for elemnt in soup:
    data = elemnt.text
    if "g_mapperData" in data: 
        print(data)
