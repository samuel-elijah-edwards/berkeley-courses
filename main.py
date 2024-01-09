import requests
from bs4 import BeautifulSoup
import re
import json

# Function to fetch course codes from a given URL
def get_course_codes(url):
    with requests.get(url) as page:
        if page.status_code != 200:
            print('Error requesting page. Status code:', page.status_code)
            return []
        
        page_soup = BeautifulSoup(page.text, "html.parser")
        codes = [span.text.replace('\xa0', '') for span in page_soup.find_all("span", class_="code")]
        return codes

# Fetch category URLs directly from the main page
url = 'https://guide.berkeley.edu/courses/'
main_page = requests.get(url)
main_soup = BeautifulSoup(main_page.text, "html.parser")
categories_list = [a['href'] for a in main_soup.find_all('a', href=re.compile(r'/courses/[\D]+/'))]

# Construct course URLs and get course codes
course_urls = ['https://guide.berkeley.edu' + suffix for suffix in categories_list]
all_course_codes = [get_course_codes(url) for url in course_urls]

# Create a dictionary to store the data
data = {url: codes for url, codes in zip(course_urls, all_course_codes)}

# Write the data to a JSON file
with open('course_codes.json', 'w') as json_file:
    json.dump(data, json_file, indent=2)

print('Course codes have been written to course_codes.json')


