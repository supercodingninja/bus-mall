# bus-mall
Backstory:     1. Employed by BusMall (startup)     2. Product is similar to     SkyMall Catalog     3. Tracking popularity of items
***PLAN YOUR WORK; AND WORK YOUR PLAN***
  **BUS MALL LAB**
  - Backstory:
    1. Employed by BusMall (startup)
    2. Product is similar to
    SkyMall Catalog
    3. Tracking popularity of items

  - Problem Domain:
    1. Build app that displays potential products to individuals in focus groups:
      a. Three products at a time, side-by-side-by-side
      b. Need to manage the size and the aspect ratio of the images (maybe edit them):
        i. Need to manage the size and the aspect ratio of the images
        ii. Lots of online tools
    2. Purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data:
      a. Keep the product selection process as untainted as possible
      b. Do not allow any results to be shown to users until there have been a total of 25 selections made
    3. Marketing team is not only interested in:
      a. Total number of clicks for each item, when it was shown
      b. The percentage of times that an item was clicked, when it was shown:
        i. Keep track of how many times each image is displayed
        ii. Do the calculations
    4. Responsible for the look and feel of the app:
      a. Custom font
      b. Color palette
      c. Layout with semantic HTML

  - User Stories:
    *1. Write your own user stories:
      a. Try to write 4-5 user stories for each role (DO THIS STEP FIRST)
        i. In a file called user_stories.md
        ii. The commit logs in your repo will have a first couple of commits for the scaffolding process
        iii. Next you should have a 'user stories' commit that is in place before any code is written.
      b. Consider the multiple roles involved:
        i. The marketing research team
        ii. The developer
        iii. The focus group participant (who will be using the application)
    2. Take about 30-45 minutes to work on the user stories (A wise student would)
    3. Draft a technical plan for the project:
      a. A detailed to-do list of things to make, step by step and tested at each stage, before getting into the code
      b. That time spent in thought and planning will make the code flow a lot faster
      c. Give yourself a series of little problems to solve (rather an a ginormous thing that you just wade through and poke at):*
        i. Set 'em up, and knock 'em down
      **ii. Plan your work, and work your plan**

  - Goals to complete by the start of class Tuesday morning:
    **Note: There's a lot of moving pieces in this assignment, and more details to attend to than it might seem at first. Build methodically, in small pieces, that you test and check regularly. ACP regularly on at least one non-master branch. Try sketching out a plan on paper and breaking down the problem conceptually before getting into the code.**
    1. Create a new repo for this weekly project called bus-mall at the root level of your ~/CF/201 directory.
    2. Scaffold your repo with:
      a. The usual README
      b. CSS
      c. JS
      d. HTML files
      e. Plus a img/ directory.
    3. Retrieve the assets from the assets/ directory in the week-03 directory of our class repo and place them in your image directory.
   *4. Write your user stories as described above and place them in a file called user-stories.md in your repo. Utilize good Markdown style to make this document look nice.*
    5. The thing you want to build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.
    6. In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.
    7. Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.
    8. To do this, you'll want a constructor function that creates an object associated with each image, and has (at a minimum) properties for the name of the image (to be used for display purposes), its file path, the number of times it has been shown, and the number of times it has been clicked. You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML.
    9. After 25 selections have been made, turn off the event listeners on the images (to prevent additional voting) and also display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".
  **10. Remember to submit a link to your most recent PR following the instructions in Canvas.**
