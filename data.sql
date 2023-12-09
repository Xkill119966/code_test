CREATE TABLE test.survey (
	 id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     companyName VARCHAR(255) NOT NULL,
     phoneNumber VARCHAR(255) NOT NULL,
     designation VARCHAR(255) NOT NULL,

    
)
CREATE TABLE test.token (
	 id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     surveyId int,
     FOREIGN KEY (surveyId) REFERENCES survey(id)

)