# **Cypress Automated Testing - Module 4 Project**

## **Overview**
This project automates the testing of [The Internet - Heroku](https://the-internet.herokuapp.com) using Cypress. The application was selected because it provides various UI components and scenarios commonly tested in web automation, such as login functionality, dynamic content loading, and API responses. By automating these tests, we ensure the reliability of core web features and practice industry-standard test automation techniques.

---

## **Tasks and Approach**

### **1️ Login Functionality**
**Task:** Validate successful and failed login attempts.
- **Approach:**
  - Navigate to the login page.
  - Enter valid credentials and assert successful login.
  - Enter incorrect credentials and assert the error message.
- **Challenges:** Cypress timing issues when waiting for login responses were resolved by adding explicit assertions.

### **2️ Dynamic Content Loading**
**Task:** Verify that content loads dynamically after clicking a button.
- **Approach:**
  - Navigate to the dynamic content page.
  - Click the "Start" button.
  - Wait for and assert the visibility of dynamically loaded content.
- **Challenges:** Ensuring Cypress waited long enough for the content to appear required using `{ timeout: 15000 }` for stability.

### **3️ API Response Validation**
**Task:** Confirm that the dynamic loading page returns a successful HTTP response.
- **Approach:**
  - Send a `GET` request to the page URL.
  - Assert that the response status code is `200`.
- **Challenges:** No major challenges; Cypress’s `cy.request()` made API testing simple.

---

## **Executing Tests**

### **📌 Prerequisites**
Ensure you have **Node.js** and **Cypress** installed. If not, install them with:
```bash
npm install
```

### **🚀 Running the Tests**
1. Open the Cypress test runner:
   ```bash
   npx cypress open
   ```
2. Select a test file (`HerokuTest.cy.js`) from the Cypress UI.
3. Click **Run** to execute tests.

For **headless mode** (CI/CD pipelines), use:
```bash
npx cypress run
```

---

## **Contributing**
Feel free to clone, modify, and contribute improvements to this project. If you encounter any issues, please report them!

---

## **License**
This project is for educational purposes and follows an open-source approach.

