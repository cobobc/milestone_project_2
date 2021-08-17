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

There were two limitations faced with no JavaScript funtionality, and they are:

*   The audio control used on the Music page could not be styled resulting in the basic design seen on that page.
*   The contact form does not send email requests or store data.


## Features 

The features throughout the site are to have a minimalist approach - less is more.

### Existing Features

*   Navigation bar

    *   Featured identically on every page that contains links to the Home, Music, Credits, Gallery, and Contact pages. The title in the nav bar provides the user with a link
        back to the home page. 
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

##### First Time users

*   As a First Time user, I want to view clear and concise content on mobile - Testing was performed to ensure there was not clusters of over information, well spaced and aesthically pleasing on tablet and mobile.

*   As a First Time user, I want to learn and understand what FOB Beats is about - Testing was performed to verify enough information is uploaded to tell the user about fob.

*   As a First Time user, I want to understand the services offered - Testing was performed to verify enough information is uploaded to tell the user of the services FOB offers.

*   As a First Time user, I want to seemlessly navigated through the 5 pages of the site - Testing was performed on all navigation links to ensure the user can seemlessly navigate throughout the site.

*   As a First Time user, I want to easily connect with FOBs social platforms - Testing was performed on all social media links to ensure they all opened in a new tab so the user doesn't have to leave the site.

#### Returning Users

*   As a Returning user, I want to purchase FOBs beats through the external link portal on the site - Testing was performed on both shop now links/buttons to snsure the user is taken to the external store in a new tab.

*   As a Returning user, I want to watch and take notes on FOBs step by step beat making tutorial - Testing was performed on the embeded video to ensure that it starts on the right time and the controls are easy to use.

*   As a Returning user, I want to book a recording session via the contact form - Testing was performed to enusure that the contact form was responsive and the user can easily type and edit there details and/or queries. 


#### Frequent Users

*   As a Frequent user, I want to use FOBs credit list as a continuous muscial source - Testing was performed to ensure the full credits list collapse feaure functions correctly and that all links to  the artists opened in a new tab.

*   As a Frequent user, I want to check when new beats arrive on the site - Testing was performed to validate the audio controls functionality and that the link to FOB soundcloud opened in a new tab.


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
1.  Select **Master Branch** as the source.
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

[W3Schools](https://www.w3schools.com/) helped throughout the project with general element and attribute uncertainties. And was
is where the I found the linear-gradient styling attribute which was used for the background of both the music and credits pages.

### Content 

The contents of the paragraphs was provided by FOB. Headings were mutially decided between FOB and I.

### Media 

The media (images and audios) are owned by FOB and permission was granted to use his media. 
The YouTube video is owned by Xtract and permission was obtained to use this video.

### Acknowledgements

I'd like to thank my mentor Spencer Baribell for his guidance, efficiency and positivity throughout my project.
Thanks to fellow students @Kay Ellis and @Kevin O'Carroll for helping me through positional issues with the FOB logo on the homepage on Slack.
Thanks to my brother, Mr. FOB (Fionn O'Brien), for providing content, setting out the goal of the website, and discussing the design of the site.


------------------------------------------------------------------------------------------------------------------------------------------------------------




![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome cobobc,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use. The last update to this file was: **July 2, 2021**

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
