# No code Data Analysis App

This is a no-code data analysis website built in React. The users can upload their dataset and perform analysis including summary statistics and a variety of data visualisation options. Users also have the option of downloading their analysis as an image on their machine.

## Table of Contents

- [No-code Data Analysis App](#no-code-data-analysis-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installing and Running Locally](#installing-and-running-locally)
- [Usage](#usage)
- [Tech Stack](#tech-stack)

## Installing and Running Locally
1. Run the following command in your terminal to clone the repository
```
git clone https://github.com/ToobaJamal/DataChum.git
```
2. Navigate to the cloned repository and run the following command to install project dependencies
```
npm install
```
3. Run the following command and ctrl+click to follow the link in the terminal
```
npm run dev
```

## Features
1. User friendly interface 
2. Summary statistics and variety of charts to choose from
3. Download analysis as image functionality
4. Resize and drag functionality for user preferred analysis aesthetic

## Usage

1. Click on the "Choose file" button and upload your dataset in CSV format
   - The CSV file should have at least one numeric column to generate desired results
   - The first row of the CSV file should represent headers
2. Click on "Summary Statistics" button to generate Summary Statistics of the dataset
3. Click on the "Visualize Data" button to open up the sidebar
4. Enter the column names that you like to be x-axis and y-axis in X and Y input fields respectively and click "Submit"
5. Click on Plot and select a suitable option for your entered axes
6. Generate as many charts as you'd like, drag them around as you like, and resize as per your preference
7. Click on "Download as Report" button to download your analysis as an image

## Tech Stack
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
