# Question Paper Generator

## Overview

The Question Paper Generator is a Node.js application designed to generate question papers based on specified difficulty distributions. The application stores questions in a Question Store and utilizes a generator to create question papers according to defined criteria.

## Features

- **Modular Design:** The codebase is structured in a modular way, promoting easy maintenance and extensibility.
- **Flexible Configuration:** Easily adjust difficulty distributions and add or modify questions through simple JSON files.
- **Warning Handling:** Warns users when there are not enough questions for a specified difficulty level, allowing graceful handling.

## Setup

### Clone the Repository

```bash
git clone https://github.com/aashishkumarnayak/question_paper_generator_nodeJs.git
```
## Navigate to the Project Directory
```bash
cd question_paper_generator_nodeJs
```
## Install Dependencies
```bash
npm install
```
## Data Setup
```bash
Edit the src/questions.json file to add or modify questions.

[
  {
    "question": "What is the speed of light",
    "subject": "Physics",
    "topic": "Waves",
    "difficulty": "Easy",
    "marks": 5
  },
  {
    "question": "Question 1",
    "subject": "Math",
    "topic": "Algebra",
    "difficulty": "Easy",
    "marks": 5
  },
  // Add more questions as needed
]
```
## Run the Application
Execute the index.js file to run the application.

```bash

node index.js
```
This will generate a question paper based on the current setup and display the result in the console.

## Adjusting Parameters (Optional)
Modify index.js
Open the index.js file and adjust the difficultyDistribution array to test different distributions.
```bash
const difficultyDistribution = [
  { difficulty: "Easy", percentage: 40 },
  { difficulty: "Medium", percentage: 40 },
  { difficulty: "Hard", percentage: 20 },
];
```
## Add/Modify Questions
Open the src/questions.json file and add or modify questions as needed.

```bash
[
  {
    "question": "New Question 3",
    "subject": "Chemistry",
    "topic": "Inorganic",
    "difficulty": "Hard",
    "marks": 12
  },
  {
    "question": "New Question 4",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Easy",
    "marks": 6
  },
  // Add more questions as needed
]
```
## Final Notes
Ensure Node.js is installed on your machine. You can download it from https://nodejs.org/.
Make sure to run the commands in the project directory.
