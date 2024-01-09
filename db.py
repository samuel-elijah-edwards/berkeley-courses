

Q1 = "CREATE TABLE users (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50) UNIQUE, email VARCHAR(100) UNIQUE, password VARCHAR(255))"

Q2 = "CREATE TABLE courses (course_id INT PRIMARY KEY,course_name VARCHAR(255),course_code VARCHAR(20))"

Q3 = "CREATE TABLE ratings (rating_id INT PRIMARY KEY,user_id INT,course_id INT,rating INT CHECK (rating >= 0 AND rating <= 10),comment TEXT,FOREIGN KEY (user_id) REFERENCES users(user_id),FOREIGN KEY (course_id) REFERENCES courses(course_id))"










import mysql.connector
from datetime import datetime

db = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "root",
    database = "course_ratings"
)



my_cursor = db.cursor()

my_cursor.execute("SHOW TABLES")

for x in my_cursor:
    print(x)
