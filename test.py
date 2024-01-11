import json

with open("course_info.json", "r") as f:
    data = json.load(f)



# Assume data is a list of strings
# for course in data:
#     print(course)

# Close the file (though using 'with' automatically closes it when done)

print(data['Yiddish (YIDDISH)']['YIDDISH101'])