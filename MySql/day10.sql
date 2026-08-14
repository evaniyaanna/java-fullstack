CREATE TABLE students(student_id INT PRIMARY KEY,
                     name VARCHAR(20),
                     email VARCHAR(30) UNIQUE);

CREATE TABLE courses(course_id INT PRIMARY KEY,
                     course_name VARCHAR(30));

CREATE TABLE enrollments(student_id INT ,
                         course_id INT,
                         FOREIGN KEY(student_id) REFERENCES students(student_id),
                         FOREIGN KEY(course_id) REFERENCES courses(course_id));
                        
