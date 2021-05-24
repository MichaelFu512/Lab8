# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   -1) Within a Github action that runs whenever code is pushed 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    -No because it would be rather difficult to unit test for the message since it interacts with multiple individual components

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   -Yes because it is a part that does not interact with another component, and changing the max message length feature likey won't affect non-related unit tests

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   -Headless means running the test without a browser UI, thus if we have headless set to true it wuld run the test without a browser UI

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.waitForTimeout(500);
    page.click('img');
  });
   I tested this inside the lab8.test.js and it worked.
