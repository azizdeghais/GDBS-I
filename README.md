# Grundlagen von Datenbanksystemen - Projekt
## 1. Introduction
This repository contains the project documentation for the course Fundamentals of Database Systems.
The goal of this project is to practically apply core database concepts and to develop a functional solution that demonstrates the use of different database technologies.  
  
## 2. Technologies & Tools:  
Programming language(s): Typescript/Javascript  
Database management system: PostgreSQL (Supabase Cloud-Hosted Platform)    
Tools/Frameworks: Node.js (Backend), React.js (Frontend)     

## 3. Implementation:
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
