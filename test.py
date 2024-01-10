import json
import re

f = open("course_codes.json")
data = json.load(f)
pat = r'\/([^\/]+)\/?$'

for i in data:
    match = re.search(pat, i)
    if match:
        print(match.group(1))

f.close()
