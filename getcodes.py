import requests
from bs4 import BeautifulSoup
import re
import json

# Function to fetch course information from a given URL
def get_course_info(url):
    with requests.get(url) as page:
        if page.status_code != 200:
            print('Error requesting page. Status code:', page.status_code)
            return {}

        page_soup = BeautifulSoup(page.text, "html.parser")
        header = [hdr.text.replace('\xa0', '') for hdr in page_soup.find_all("h1", class_="page-header")]
        codes = [span.text.replace('\xa0', '') for span in page_soup.find_all("span", class_="code")]
        names = [span.text.replace('\xa0', '') for span in page_soup.find_all("span", class_="title")]
        units = [span.text.replace('\xa0', '') for span in page_soup.find_all("span", class_="hours")]
        descs = [span.text.replace('\xa0', '') for span in page_soup.find_all("span", class_="descshow")]

        courses_info = {}
        for code, name, unit, desc in zip(codes, names, units, descs):
            course_info = {
                "course_name": name,
                "course_units": unit,
                "course_desc": desc
            }
            courses_info[code] = course_info

        return {header[0]: courses_info} if header else {}

# Fetch category URLs directly from the main page
url = 'https://guide.berkeley.edu/courses/'
main_page = requests.get(url)
main_soup = BeautifulSoup(main_page.text, "html.parser")
categories_list = [a['href'] for a in main_soup.find_all('a', href=re.compile(r'/courses/[\D]+/'))]

# Construct course URLs and get course information
course_urls = ['https://guide.berkeley.edu' + suffix for suffix in categories_list]
all_courses_info = [get_course_info(url) for url in course_urls]

# Create a dictionary to store the data
data = {}
for courses_info in all_courses_info:
    data.update(courses_info)

# Write the data to a JSON file
with open('course_info.json', 'w') as json_file:
    json.dump(data, json_file, indent=2)

print('Course information has been written to course_info.json')
