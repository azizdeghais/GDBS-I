# Grundlagen von Datenbanksystemen - Projekt
## 1. Introduction
This repository contains the project documentation for the course Fundamentals of Database Systems.
The goal of this project is to practically apply core database concepts and to develop a functional solution that demonstrates the use of a SQL Database.  

## 2. Prerequisites
`npm install npm@latest -g`  

## 3. Installation  
1. Get your free account on Supabase (Supabase_URL & Supabase_Password are required to link them to backend server.
2. Clone the repository `git clone https://github.com/azizdeghais/GDBS-I.git`
3. Install npm packages `npm i`
4. Change git remote url to avoid accidental merges

## 4. Technologies & Tools:  
Programming language(s): Typescript/Javascript  
Database management system: PostgreSQL (Supabase Cloud-Hosted Platform)    
Tools/Frameworks: Node.js (Backend), React.js (Frontend)     

## 5. Implementation:
### Backend  
#### Connecting to Database:
`import { createClient } from "@supabase/supabase-js";`  
`const supabaseUrl =`  
`const supabaseKey`  
`const supabase = createClient(supabaseUrl, supabaseKey);`  
#### Example Usage of an API:  
`app.get("/api/teachers", async (req, res) => {  
  const { data, error } = await supabase.from("teachers").select("*");  
  if (error) return res.status(500).json({ error: error.message });  
  res.json(data);});`  
This means that whenever the endpoint http://localhost:3000/api/teachers is accessed on your machine, the table named teachers will be fetched from Supabase.  
Based on this simple implementation, we can create additional endpoints that will be used in the frontend dashboard. For example, when a user clicks a button to fetch teachers, this endpoint will be called and the corresponding data will be returned

#### PostgreSQL Database (Supabase):  
![Supabase SQL Editor](images/Supabase.PNG)  
SQL commands can be executed on editor to define database or fetch data to create views.  
##### EXAMPLE OF CREATING A TABLE:  
Inserting this piece of code into the SQL Editor would create an empty table on our database.  
`CREATE TABLE Participant (
    ID INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    date_of_birth DATE,
    country_of_origin VARCHAR(50)
);`
