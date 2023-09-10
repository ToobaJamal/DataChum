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
2. Summary statistics and a variety of charts to choose from
3. Download analysis as image functionality
4. Resize and drag functionality for user-preferred analysis aesthetic

## Usage
1. Click on the "Choose file" button and upload your dataset in CSV format
2. Click on the "Summary Statistics" button to generate Summary Statistics of the dataset
3. Click on the "Visualize Data" button to open up the sidebar
4. Enter the column names that you like to be x-axis and y-axis in the X and Y input fields respectively and click "Submit"
5. Click on Plot and select a suitable option for your entered axes
6. Generate as many charts as you'd like, drag them around as you like, and resize as per your preference
7. Click on the "Download as Image" button to download your analysis as an image

https://github.com/ToobaJamal/DataChum/assets/52610124/839345fa-2aed-4eaf-ba5c-bd91a0b1f55f

### Dataset Format Requirements
To ensure the smooth functioning of the app, please follow these guidelines when preparing and uploading your dataset in CSV format.

#### File Format

- **File Type**: CSV (Comma-Separated Values)
- **File Extension**: .csv

#### Headers
- The first row of the CSV file should represent headers, providing a clear and concise description of each column's content.

#### Numeric Column
- The CSV file must contain at least one numeric column. This column should consist of numerical data (e.g., integers or floating-point numbers) to generate the desired results.

#### Example:
```csv
Name,Age,Height,Weight,Income
Alice,25,165,55,50000
Bob,30,180,75,60000
Carol,28,155,50,55000
```
A real-world dataset example is the Happiness and Alcohol Consumption data. [Download the dataset](https://www.kaggle.com/datasets/marcospessotto/happiness-and-alcohol-consumption?resource=download) from here.


## Tech Stack
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).
