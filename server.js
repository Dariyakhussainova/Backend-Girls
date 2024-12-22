const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/calculate-bmi', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  if (!weight || !height || weight <= 0 || height <= 0) {
    return res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <div class="error-container">
          <h1>Error</h1>
          <p>Please enter valid positive numbers for weight and height.</p>
          <a href="/">Back to Calculator</a>
        </div>
      </body>
      </html>
    `);
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = '';
  let cssClass = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    cssClass = 'underweight';
  } else if (bmi < 24.9) {
    category = 'Normal';
    cssClass = 'normal';
  } else if (bmi < 29.9) {
    category = 'Overweight';
    cssClass = 'overweight';
  } else {
    category = 'Obese';
    cssClass = 'obese';
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>BMI Result</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div class="result-container">
        <h1>Your BMI Result</h1>
        <p>Your BMI is <span class="${cssClass}">${bmi}</span>. You are classified as: <span class="${cssClass}">${category}</span>.</p>
        <a href="/">Back to Calculator</a>
      </div>
    </body>
    </html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
