# **BMI Calculator**

A simple BMI (Body Mass Index) Calculator built using HTML, CSS, and JavaScript. The calculator validates user inputs, calculates BMI, and dynamically displays the results with color-coded categories.

## **Features**

- **User-Friendly Interface**: Clean and minimalistic design for ease of use.
- **Real-Time Validation**: Ensures valid positive numbers for weight and height before processing.
- **Dynamic Results**: Displays BMI result and classification (Underweight, Normal, Overweight, Obese) with corresponding colors.
- **Fully Responsive**: Works on both desktop and mobile devices.

---

## **Technologies Used**

- **HTML**: For structuring the application.
- **CSS**: For styling the interface.
- **JavaScript**: For adding dynamic functionality and handling calculations.

---

## **How to Use**

1. Enter your **Weight (in kg)** in the input field.
2. Enter your **Height (in meters)** in the input field.
3. Click the **Calculate BMI** button.
4. View your BMI result and classification:
   - **Underweight**: BMI < 18.5 (Blue)
   - **Normal weight**: 18.5 ≤ BMI < 24.9 (Green)
   - **Overweight**: 25 ≤ BMI < 29.9 (Yellow)
   - **Obese**: BMI ≥ 30 (Red)

If incorrect data is entered (e.g., zero or negative numbers), an alert will be shown to the user.

---

## **Validation**

### **Client-Side Validation**
- Input validation ensures the user enters only valid positive numbers.
- If invalid input is detected, an `alert` is displayed, and the form submission is prevented.

### **Server-Side Validation**
- Ensures only valid inputs are processed.
- Prevents invalid data from corrupting calculations or backend logic.

---

## **Folder Structure Explained**

### **index.html**
- Contains the form for user input.
- Displays results dynamically in the `#result` container.

### **style.css**
- Styles the form, results, and error messages.
- Includes color-coded classes for BMI categories:
  - **Underweight**: Blue
  - **Normal**: Green
  - **Overweight**: Yellow
  - **Obese**: Red

### **script.js**
- Handles input validation and calculations.
- Dynamically updates the results based on user input.

---

## **Color Codes for Results**

| **Category**       | **Color**    |
|---------------------|--------------|
| Underweight         | Blue (#2196F3) |
| Normal weight       | Green (#4CAF50) |
| Overweight          | Yellow (#FFC107) |
| Obese               | Red (#FF5722) |
Если потребуется доработать или добавить больше деталей, дайте знать!
