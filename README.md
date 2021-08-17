# Milestone Project 2

## Purpose 

The purpose of this site is to complete the second Milestone Project for the Code Institute's Full Stack Developer course and can can be found [here]().

## Tee Time Trivia Website

![TTT site overview](assets/images/read_me/)

Ciaran O'Brien has been requested to create a interactive golf quiz website. The website will challenge users on there general golfing knowledge and also - because it's a Ryder Cup year - test the users Ryder Cup knowledge.

## User Experience (UX)

### User stories

#### First Time User Goals

*   As a First Time user, I want to view clear and concise content on mobile and tablet.
*   As a First Time user, I want to learn and understand what the site offers.
*   As a First Time user, I want to understand the difference between the two quizzes.
*   As a First Time user, I want to seemlessly navigate through the 6 pages of the site.
*   As a First Time user, I want to easily connect with Tee Time Trivia's social platforms.
*   As a First Time user, I want to challeng my golfing knowledge.

#### Returning User Goals

*   As a Returning user, I want to continue to challenge my golfing knowledge.
*   As a Returning user, I want to be challanged with new quiz questions.
*   As a Returning user, I want to submit my score so I recieve a personal email with my score.
*   As a Returning user, I want to book a recording session via the contact form.

#### Frequent User Goals

The frequent user wants the following:

*   As a Frequent user, I want to use the email service to record all my results over a period of time.
*   As a Frequent user, I want to check for new quiz questions.

### Design

#### Colour Scheme

The main colours used are #009170 (green), #000 (white), and #f8dcac (sand). The green and sand are common colours associated with golf.
For the special quiz pages a #003399 (blue) and a #FFCC00 (yellow) are used. These colours are that of the EU flag and the European Ryder Cup team.

#### Font

The **Enriqueta** font is used through the whole site.

#### Imagery

The large background images used are sources from www.theindependent.ie and was granted permission to use for this project.

#### Wireframes

For complete wireframes see this [PDF](assets/images/read_me/Wireframes_m2.pdf).


### Limitations

There were no limitations because JavaScript was used.

## Features 

The features throughout the site are used mininal text and larger text for clear navigation from quiz to quiz.

### Existing Features

*   Navigation bar

    *   Featured identically on every page that contains links to the Home page, the 2 quizzes, and the Contact pages. The title in the nav bar provides the user with a link
        back to the home page. 
    *   
    *   The navigation options becomes contained in a responsive Bootstrap burger icon for tablet and mobile devices that provides the page option in a dropdown form. 

*   Footer

    *   Featured identically on every page and contains external links to FOBs main social platforms. Each external link has the attribute of target="_blank" which
        opens the link in a new tab, keeping the user on the site and allowing for seemless UX.
    *   The icons used are taken from font awesome.

*   Home page

    *   Provides a striking image of FOB, the logo and an immediate button to entice the user to visit the external store to buy FOBs beats. The image provides a professional look.
    *   Contains an About paragraph to introduce FOB.
    *   Provides short paragraphs to describe the Music and Credits page with Discover More buttons to entice the user click into those pages.
    *   The FOR SALE sign will be in Bootstap jumbtron form to draw in the user. This feature will disapear for mobile via bootstraps d-none d-sm-inline attribute and the SHOP NOW 
        button alone will be enough to entice the user.

*   Music page

    *   The idea of this page is to provde beat (audio) samples by FOB, a shop portal button (similar to the home page) that brings the user to the site where they
        see all of FOBs beats and buy the music.
    *   The layout of this page flows top to bottom - the user start at the top and can play the sample audio beats provided. As the user scrolls to the bottom of the samples
        they immediately have an option to go and buy the beats. The bottom of the page then provides a tutorial video about FOB makes his beats.
        This embeded youtube video gives a good insight into the man and the process - making for well rounded UX.
    *   The background colour gradient from the purple to the pink then back to the purple at the bottom accompanies the top to bottom feel of the page.
    *   The audio sample section will use Bootstaps row grid system. Desktop and tablet will appear as two rows - image row and audio row. For mobile both will be centered and
        the audio controls will position below their respective image.

*   Credits page

    *   This page will provide the user with FOBs credits/discograpy i.e. all the artist he has worked with. This information is very important to any music producer
        because the user can see what FOB has produced and could potentially produce with a potentially interested user.
    *   The first four artists are FOBs biggest and most successful to date. The artists pictures and tracks FOB has produced or mastered for them will be provided.
        The user then has the option to check out more of the artist via the their social platform external links which are displayed as icons (via font awesome).
    *   The main artist section will use Bootstaps row grid system. Desktop and tablet will appear as two rows - image row and tracks produced by FOB row. For mobile both will
        be centered and the tracks produced divs will position below their respective image.
    *   The page will provide a collapsable list - provided by Bootstrap - for the user to open and view FOBs entire credit list. The each artist on the list will be an external link a relevant social 
        plaform of their own.

*   Gallery

    *   Provides the user with supporting photograph images of FOB and his style.
    *   The photos are professionally taken and provide professional look.
    *   Bootstraps grid system is used here - For desktop the photo display in three rows. For tablet the photos display in two rows.
        The photos are displayed in one row for mobile.

*   Contact

    *   Provide the user with a contact form to contact FOB to book recording session or just general queries.


### Features Left to Implement

*   Final decision on colour code to be made. The pink will remain but perhaps a deeper navy might work best.
*   Try to incorporate the FOB logo into the navigation bar for each page.


## Technologies Used

*   HTML - Used for the structure of the website.

*   CSS - Used to style the website.

*   [Bootstrap](https://getbootstrap.com/) - used throughout the site for layout and styling. Imported JavaScript/Query for each page to support the responsive navigation bar burger icon for
    tablet and mobile.

*   [Google Fonts](https://fonts.google.com/) - provided the *Quicksand* font used throughout the website.

*   [Font Awesome](https://fontawesome.com/) - provided the scocial media icons used in the Footer.

*   [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/open/) - used to inpect each page, debug and mostly to test different CSS styles.

*   [GitHub](https://github.com/) - hosting site to store the websites source code and Git pages used to deploy the live site.

*   [Gitpod](https://gitpod.io/workspaces) - the version control to check status, add, commit and push code to GitHubs repository for storage.

*   [Microsoft PowerPoint](https://office.live.com/start/powerpoint.aspx) - used to create the wireframes.

*   [PX converter](https://nekocalc.com/px-to-rem-converter) - to covert px values to rem values.

*   [Codepen](https://codepen.io/) - used to help create the contact form on the contact page.

*   [YouTube Help](https://support.google.com/youtube/answer/171780?hl=en) - used to help embeed the youtube video and start video from the time necessary for the music page.


## Testing

### Testing Strategy

1.  Complete tests for user goals.

1.  Run all pages through the [W3C HTML Validator](https://validator.w3.org/).

1.  Run all pages through the [W3C CSS Validator](http://www.css-validator.org/).

1.  Run a lighthouse test for performance.


### Test Results

#### Validation Results

The first HTML and CSS validations produced 4 errors in total:

*   line 49 Error: The element button must not appear as a descendant of the a element. (index.html)

    **Resolution** - moved the btn class attribute into the a element and deleted the button element.

*   line 120 Error: The frameborder attribute on the iframe element is obsolete. Use CSS instead. (music.html)

    **Resolution** - deleted the frameborder attribute.

*   line 158 Error: Element h3 not allowed as child of element button in this context. (Suppressing further errors from this subtree.) (credits.html)

    **Resolution** - removed the h3 element and readjusted the font size accordingly.

*   style.css Error: xxx-large cannot be used as a font size

    **Resolution** - all text based size values were removed and replaced with their respective rem equivalent.


The second HTML and CSS validations produced 0 errors.


#### User Goal Results

*   As a First Time user, I want to view clear and concise content on mobile and tablet.
*   As a First Time user, I want to learn and understand what the site offers.
*   As a First Time user, I want to understand the difference between the two quizzes.
*   As a First Time user, I want to seemlessly navigate through the 6 pages of the site.
*   As a First Time user, I want to easily connect with Tee Time Trivia's social platforms.
*   As a First Time user, I want to challeng my golfing knowledge.

#### Returning User Goals

*   As a Returning user, I want to continue to challenge my golfing knowledge.
*   As a Returning user, I want to be challanged with new quiz questions.
*   As a Returning user, I want to submit my score so I recieve a personal email with my score.

#### Frequent User Goals

The frequent user wants the following:

*   As a Frequent user, I want to use the email service to record all my results over a period of time.
*   As a Frequent user, I want to try out the seasonal quiz specials.

##### First Time users

*   As a First Time user, I want to view clear and concise content on mobile - Testing was performed to ensure there was not clusters of over information, well spaced and aesthically pleasing on tablet and mobile.

*   As a First Time user, I want to learn and understand what the site offers - Testing was performed to verify enough information is uploaded to tell the user about what the site offers.

*   As a First Time user, I want to understand the difference between the two quizzes - Testing was performed to verify enough information is uploaded to tell the user of the differences between the golf general knowledge quiz and the golf special quiz.

*   As a First Time user, I want to seemlessly navigate through the 6 pages of the site - Testing was performed on all navigation links to ensure the user can seemlessly navigate throughout the site.

*   As a First Time user, I want to easily connect with Tee Time Trivia's social platforms - Testing was performed on all social media links to ensure they all opened in a new tab so the user doesn't have to leave the site.

*   As a First Time user, I want to challenge my golfing knowledge - Testing was performed on both quizes to ensure a seemless and challenging experience for users.

#### Returning Users

*   As a Returning user, I want to continue to challenge my golfing knowledge - Testing was performed on both quizes to ensure a continuously seemless and challenging experience for users.

*   As a Returning user, I want to be challanged with new quiz questions - Testing cannot be performed on this parameter as the site will updated weekly with new questions by employees of Tee Time Trivia.

*   As a Returning user, I want to submit my score so I recieve a personal email with my score - Testing was performed on the Email JS function to ensure the user receives a response email with their score after they have submitted their score via the website.

#### Frequent Users

*   As a Frequent user, I want to use the email service to record all my results over a period of time - Testing was performed on the Email JS function to ensure the user receives a response email with their score after they have submitted their score via the website and that the email saves in the users inbox.

*   As a Frequent user, I want to try out the seasonal quiz specials - Testing cannot be performed on this parameter as the quiz special will be updated whenever major golfing events are approaching by employees of Tee Time Trivia.


### Lighthouse Test Results

See the following test results:

![Lighthouse results](assets/images/read_me/lighthouse_test.png)

These test results indicate that the site peforms well overall and points to what areas could be improved to optimise the sites performance.
Due to the time constaints of this project it is not feasible to further act on this. In a normal working situation time would be taken to optimise performance.


## Deployment

### Project Creation

Created the project by:

1.  Navigating to my [user profile](https://github.com/cobobc).
2.  Selecting the **Respositories** tab.
3.  Selected the **New** button.
4.  Under Repository tempate, select the Code Institute template from the dropdown menu.
5.  Entered milestone_project_fob for the **Repository name**.
6.  Select **Create Repository**. 

### During the Project

The following commands were used throughout the project:

*   git add . - This command was used to add files to the staging area before commiting.
*   git commit -m "commit message explaining the updates" - This command was used to to commit changes to the local repository.
*   git push - This command is used to push all commited changes to the GitHub repository.

### Using Github Pages

1.  Navigate to the GitHub [Repository](https://github.com/cobobc/milestone_project_fob).
1.  Select the **Settings** Tab.
1.  Scroll Down to the Git Hub Pages Heading.
1.  Select **Main Branch** as the source.
1.  Select the **Save button**.
1.  Select on the link to go to the live deployed page.

### Run Locally

1.  Navigate to the GitHub [Repository](https://github.com/cobobc/milestone_project_fob).
1.  Select the Code drop down menu.
1.  Either Download the ZIP file, unpackage locally and open with IDE (This route ends here) OR Copy Git URL from the HTTPS dialogue box.
1.  Open your developement editor of choice and open a terminal window in a directory of your choice.
1.  Use the 'git clone' command in terminal followed by the copied git URL.
1.  A clone of the project will be created locally on your machine.



## Credits

### Code

[W3Schools](https://www.w3schools.com/) helped throughout the project with general element and attribute uncertainties.

### Content 

The contents of the quiz questions came from various sources - BBC Sport, Sky Sports Golf, the R&A and Joe.ie. Headings, titles and paragraphs were all wrote by Ciaran O'Brien.

### Media 

The large background images used are sourced from www.theindependent.ie and permission was granted to use for this project.

### Acknowledgements

I'd like to thank my mentor Spencer Baribell for his guidance, efficiency and positivity throughout my project.
Thanks to my fellow students on Slack for helping my link the js quiz code to the html and css code so that my quiz question could appear.

