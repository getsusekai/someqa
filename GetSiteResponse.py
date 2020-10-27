import requests
from bs4 import BeautifulSoup

url = 'https://status.ecwid.com/'

def  get_html(url):
    return requests.get(url)

def get_content(html):
    soup = BeautifulSoup(html, 'html.parser')
    all_system_status = soup.find_all('div', class_='component-container border-color')

    summary_status = {}

    for system_status in all_system_status:
        status_name = system_status.find('span', class_= 'name').get_text().replace(' ','').strip('\n')
        status = system_status.find('span', class_= 'component-status').get_text().replace(' ','').strip('\n')
        summary_status.update({status_name:status})

    for key in summary_status.keys():
        print(key, ': [', summary_status[key], ']')

def parse():
    html = get_html(url)
    if html.status_code == 200:
        get_content(html.text)
    else:
        print('Error! Response Status: ', html.status_code)

parse()





