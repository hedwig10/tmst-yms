DROP DATABASE IF EXISTS tailers_trackerdb;
CREATE DATABASE workout_trackerdb;

CREATE TABLE trailer_Tracker (

  userid 
  Week_day VARCHAR(100) NULL,
   position VARCHAR(100) NULL,
  DATE INT NULL,
  skids DECIMAL(10,4) NULL,
  pieces DECIMAL(10,4) NULL,
  notes varchar(400) null,
)
SELECT * FROM trailer_Tracker