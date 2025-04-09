# Learning Playright

1. How To Install Playwright ?

    Command: <code>npm init playwright@latest</code>


2. Basic Syntax to write TestCases with Assertion

    ![alt text](snaps/image.png)
    <br/>
    ![alt text](snaps/image-1.png)
    <br />
    ![alt text](snaps/image-2.png)

3. If we have multiple testcases JS files and if we want to specifically run a test file, then we'll type the below mentioned comment:

    Command: <code>npx playwright test tests/searchanother.spec.js  --headed</code>

    We can use the <code>--headed</code> flag to run the tests in headlist mode instead in headed mode

4. How we can check error reflected messages using textcontent 

5. How we can set a particular viewport to run the testcases for different devices

6. How we can get screenshot, video and trace for the testcases

7. How we can use the codegen

8. How to retry failed test cases

9. How to select radio buttons and dropdown

10. How to run the testcases in specific browser
    --project="Google Chrome" flag after adding in the config file

11. How to use hover in any webpage using testcase

12. How to upload any file throgh setInputFiles()

13. How to handle keyboard type, press events and autocomplete

14. How to handle dynamic network call 

    <code>await page.waitForLoadState("networkidle")</code>