import json

f = open("course_codes.json")
data = json.load(f)

for i in data:
    print(i)

f.close()