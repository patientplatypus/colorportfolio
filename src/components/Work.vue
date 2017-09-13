<template>
  <div class="work">

    <Motion :value="titlen"
            :spring="config"
            @motion-start="starttitle"
            @motion-end="endtitle"
            @motion-restart="restarttitle"
    >
      <template scope="values">
          <div class="welcometitle"
               v-bind:style='{ backgroundColor: usecolor3, color: usecolor4, left: `${values.value}%`}'
          >
          <h1>
            My Portfolio Projects
          </h1>
        </div>
      </template>
    </Motion>

    <Motion :value="project1n"
            :spring="config"
            @motion-start="startprojectbar1"
    >
      <template scope="values1">
          <div class="projectbar"
               v-bind:class="leftmethod(1)"
               v-on:click='barclicked(1)'
               v-on:mouseover="barhover(1)"  v-on:mouseleave='barleave(1)'
               v-bind:style='{ backgroundColor: (bar1hover===true&&projectclicked!=1)?usecolor4:usecolor3, color: (bar1hover===true&&projectclicked!=1)?usecolor3:usecolor4, cursor:(bar1hover===true&&projectclicked!=1)?"pointer":"auto", top: `${values1.value}%`}'
          >
          <h1>
            Shared Drawing App
          </h1>
        </div>
      </template>
    </Motion>

    <Motion :value="project2n"
            :spring="config"
            @motion-start="startprojectbar2"
    >
      <template scope="values1">
          <div class="projectbar"
               v-bind:class="leftmethod(2)"
               v-on:click='barclicked(2)'
               v-on:mouseover="barhover(2)"  v-on:mouseleave='barleave(2)'
               v-bind:style='{ backgroundColor: (bar2hover===true&&projectclicked!=2)?usecolor4:usecolor3, color: (bar2hover===true&&projectclicked!=2)?usecolor3:usecolor4, cursor:(bar2hover===true&&projectclicked!=2)?"pointer":"auto", top: `${values1.value}%`}'
          >
          <h1>
            Google Finance App
          </h1>
        </div>
      </template>
    </Motion>

    <Motion :value="project3n"
            :spring="config"
            @motion-start="startprojectbar3"
    >
      <template scope="values1">
          <div class="projectbar"
               v-bind:class="leftmethod(3)"
               v-on:click='barclicked(3)'
               v-on:mouseover="barhover(3)"  v-on:mouseleave='barleave(3)'
               v-bind:style='{ backgroundColor: (bar3hover==true&&projectclicked!=3)===true?usecolor4:usecolor3, color: (bar3hover===true&&projectclicked!=3)?usecolor3:usecolor4, cursor:(bar3hover===true&&projectclicked!=3)?"pointer":"auto", top: `${values1.value}%`}'
          >
          <h1>
            Job Tracking App
          </h1>
        </div>
      </template>
    </Motion>

    <Motion :value="project4n"
            :spring="config"
            @motion-start="startprojectbar4"
    >
      <template scope="values1">
          <div class="projectbar"
               v-bind:class="leftmethod(4)"
               v-on:click='barclicked(4)'
               v-on:mouseover="barhover(4)"  v-on:mouseleave='barleave(4)'
               v-bind:style='{ backgroundColor: (bar4hover===true&&projectclicked!=4)?usecolor4:usecolor3, color: (bar4hover===true&&projectclicked!=4)?usecolor3:usecolor4, cursor:(bar4hover===true&&projectclicked!=4)?"pointer":"auto", top: `${values1.value}%`}'
          >
          <h1>
            Hackathon Project
          </h1>
        </div>
      </template>
    </Motion>

    <Motion :value="project5n"
            :spring="config"
            @motion-start="startprojectbar5"
    >
      <template scope="values1">
          <div class="projectbar"
               v-bind:class="leftmethod(5)"
               v-on:click='barclicked(5)'
               v-on:mouseover="barhover(5)"  v-on:mouseleave='barleave(5)'
               v-bind:style='{ backgroundColor: (bar5hover===true&&projectclicked!=5)?usecolor4:usecolor3, color: (bar5hover===true&&projectclicked!=5)?usecolor3:usecolor4, cursor:(bar5hover===true&&projectclicked!=5)?"pointer":"auto", top: `${values1.value}%`}'
          >
          <h1>
            Python App
          </h1>
        </div>
      </template>
    </Motion>

    <Motion :value="project6n"
            :spring="config"
            @motion-start="startprojectbar6"
    >
      <template scope="values1">
          <div class="projectbar"
               v-bind:class="leftmethod(6)"
               v-on:click='barclicked(6)'
               v-on:mouseover="barhover(6)"  v-on:mouseleave='barleave(6)'
               v-bind:style='{ backgroundColor: (bar6hover===true&&projectclicked!=6)?usecolor4:usecolor3, color: (bar6hover===true&&projectclicked!=6)?usecolor3:usecolor4, cursor:(bar6hover===true&&projectclicked!=6)?"pointer":"auto", top: `${values1.value}%`}'
          >
          <h1>
            Portfolio v0.3
          </h1>
        </div>
      </template>
    </Motion>

    <Motion :value="project7n"
            :spring="config"
            @motion-start="startprojectbar7"
    >
      <template scope="values1">
          <div class="projectbar"
               v-bind:class="leftmethod(7)"
               v-on:click='barclicked(7)'
               v-on:mouseover="barhover(7)"  v-on:mouseleave='barleave(7)'
               v-bind:style='{ backgroundColor: (bar7hover===true&&projectclicked!=7)?usecolor4:usecolor3, color: (bar7hover===true&&projectclicked!=7)?usecolor3:usecolor4, cursor:(bar7hover===true&&projectclicked!=7)?"pointer":"auto", top: `${values1.value}%`}'
          >
          <h1>
            Portfolio v0.2
          </h1>
        </div>
      </template>
    </Motion>

    <Motion :value="project8n"
            :spring="config"
            @motion-start="startprojectbar8"
    >
      <template scope="values1">
          <div class="projectbar"
               v-bind:class="leftmethod(8)"
               v-on:click='barclicked(8)'
               v-on:mouseover="barhover(8)"  v-on:mouseleave='barleave(8)'
               v-bind:style='{ backgroundColor: (bar8hover===true&&projectclicked!=8)?usecolor4:usecolor3, color: (bar8hover===true&&projectclicked!=8)?usecolor3:usecolor4, cursor:(bar8hover===true&&projectclicked!=8)?"pointer":"auto", top: `${values1.value}%`}'
          >
          <h1>
            Portfolio v0.1
          </h1>
        </div>
      </template>
    </Motion>

    <Motion :value="project9n"
            :spring="config"
            @motion-start="startprojectbar9"
    >
      <template scope="values1">
          <div class="projectbar"
               v-bind:class="leftmethod(9)"
               v-on:click='barclicked(9)'
               v-on:mouseover="barhover(9)"  v-on:mouseleave='barleave(9)'
               v-bind:style='{ backgroundColor: (bar9hover===true&&projectclicked!=9)?usecolor4:usecolor3, color: (bar9hover===true&&projectclicked!=9)?usecolor3:usecolor4, cursor:(bar9hover===true&&projectclicked!=9)?"pointer":"auto", top: `${values1.value}%`}'
          >
          <h1>
            Small Projects
          </h1>
        </div>
      </template>
    </Motion>

    <Motion :value="resumen"
            :spring="config"
    >
      <template scope="values1">
          <div class="resumebar"
               v-on:mouseover="barhover(10)"  v-on:mouseleave='barleave(10)'
               v-bind:style='{ backgroundColor: bar10hover===true?usecolor3:usecolor4, color: bar10hover===true?usecolor4:usecolor3, cursor:bar10hover===true?"pointer":"auto", top: `${values1.value}%`}'
          >
          <a href="../PeterTWeyandResumeSep.pdf">Click Here to View My Resume!</a>
        </div>
      </template>
    </Motion>

    <Motion :value="projectexplanationn"
            :spring="config"
    >
      <template scope="values1">
          <div class="projectexplanation"
               v-bind:class='{ "fadeout": projectclicked != -1 }'
               v-bind:style='{ backgroundColor: usecolor3, color: usecolor4, opacity: `${values1.value}`}'
          >
          <p>
            Here is a portfolio of my most recent work. You can click on the links above to view project descriptions and pictures. Projects are broken up, roughly into a few categories.
          </p>
          <p>
            I have one off apps that are my most recent best work. I try and keep a handful of the most recent examples at the top of the list. These pieces are motivated by the desire to demonstrate a skill or solve a specific problem.
          </p>
          <p>
            I have porfolio websites that I've iterated on. Since these are themselves public facing websites (like this one!) they are a place I can show off the latest things I've learned. This will be the third major revision, and it really shows the improvement along the way.
          </p>
          <p>
            Finally I have the smaller projects section. This is more properly a slush pile of work that is no longer what I consider my best, but are good iterations to both have a view into my own personal development and snippets of code I can go back to. Some of this code is 'deprecated' - meaning that dependencies may have changed and the code is no longer maintained.
          </p>
        </div>
      </template>
    </Motion>

    <Motion :value="project1explanation"
            :spring="config"
    >
      <template scope="values1">
          <div class="projectexplanation2"
               v-bind:class="reversefademethod(1)"
               v-bind:style='{ backgroundColor: usecolor3, color: usecolor4, height: `${values1.value}%`}'
          >
          <h3>
            Shared Drawing Application
          </h3>
          <p>
            This is a live drawing application that I made. It allows different users to log in to the website at once and draw together at the same time. The canvas is shared by each browser client and images and brush strokes are transmitted in real time.
          </p>
          <p>
            Motivation
          </p>
          <p>
            I had had difficulties using sockets before in a previous project so I wanted a cool project involving the use of fast socket streaming. An art project sounded fun.
          </p>
          <p>
            Technologies Used
          </p>
          <p>
            The primary technologies that I used were Phoenix, which is a back end framework built on top of Elixir and Erlang, and Vue.js a javascript front end. I decided to use these technologies because Phoenix has wonderful socket support and it's functional architecture is very fast, while Vue.js is a light weight framework allowing quick development. For deployment I used an application called nanobox which is a 'docker lite' clone that posts and packages to AWS. It was incredibly useful as it had good feature support for Phoenix. I also spent a lot of time on learning html5 canvas.
          </p>
          <p>
            Features
          </p>
          <ul>
            <li>
              Live drawing on streamed sockets
            </li>
            <li>
              Shared timer
            </li>
            <li>
              Color and width picker for brush strokes
            </li>
            <li>
              Emit stickers to canvas
            </li>
            <li>
              Socket voting on final picture
            </li>
            <li>
              Final picture shown to all users
            </li>
          </ul>
          <div
          v-on:mouseover="barhover(11)"  v-on:mouseleave='barleave(11)'
          v-on:click='windowopener("http://pennydrop.nanoapp.io")'
          v-bind:style='{paddingTop:"0.5%", paddingBottom:"1%", paddingLeft:"0.5%", paddingRight: "0.5%", fontSize: "2vh",  backgroundColor: bar11hover===true?usecolor4:usecolor5, color:bar11hover===true?usecolor5:usecolor4, cursor:bar11hover===true?"pointer":"auto", position: "absolute", right: "0%", top: "90%"}'>
            <p>
              Click to See Live App!
            </p>
          </div>
        </div>
      </template>
    </Motion>

    <Motion :value="project2explanation"
            :spring="config"
    >
      <template scope="values1">
        <div class="projectexplanation2"
             v-bind:class="reversefademethod(2)"
             v-bind:style='{ fontSize: "1.8vh", backgroundColor: usecolor3, color: usecolor4, height: `${values1.value}%`}'
        >
          <h3>
            Google Finance Project
          </h3>
          <p>
            I took Google's Finance application and remade it using a more pleasing interface. I also wrote a blog post about the process and the tools that I used and published my results. The application allows a user to search for stocks on the left hand side which are populated with both historical and real time stock data (up-to-the-minute prices). On the right hand side the user can search for news articles. The articles are pindropped by time of publication onto the stock charts in a similar way to Google Finance.
          </p>
          <p>
            Motivation
          </p>
          <p>
            I wanted to get more visibility of my work, but I also wanted to remake an older tool into a more modern style. It seems that there's a lot of older GUI interfaces on the internet that could use more modern interfaces and aesthetics. Along the way I learned a lot and so documenting my process and what I got out of the exercise seemed like it might be useful for others.
          </p>
          <p>
            Technologies Used
          </p>
          <p>
            I used a few different APIs to get data, as well as a charting application called Victory Charts. I used React Motion for drop down menus, as well as React Velocity for other animations. SVG shapes were used for the time flags linking the news articles to the charts.
          </p>
          <p>
            Features
          </p>
          <ul>
            <li>
              Live Stock Data
            </li>
            <li>
              Search for Stocks and News by API calls
            </li>
            <li>
              News and Stocks Linked by SVG Flags, Auto Scrolling News Items
            </li>
            <li>
              Historical Data
            </li>
            <li>
              Victory Charts Implementation
            </li>
            <li>
              Blog Post, with Code Snippets
            </li>
          </ul>
          <div
          v-on:mouseover="barhover(11)"  v-on:mouseleave='barleave(11)'
          v-on:click='windowopener("https://github.com/patientplatypus/professional_portfolio/tree/master/src/components/pages/blogs/blogone")'
          v-bind:style='{fontSize: "1.8vh", paddingTop:"0.5%", paddingBottom:"1%", paddingLeft:"0.5%", paddingRight: "0.5%", backgroundColor: bar11hover===true?usecolor4:usecolor5, color:bar11hover===true?usecolor5:usecolor4, cursor:bar11hover===true?"pointer":"auto", position: "absolute", right: "0%", top: "90%"}'>
            <p>
              Click for Github Repo.
            </p>
          </div>
        </div>
      </template>
    </Motion>

    <Motion :value="project3explanation"
            :spring="config"
    >
      <template scope="values1">
        <div class="projectexplanation2"
             v-bind:class="reversefademethod(3)"
             v-bind:style='{ fontSize: "1.65vh", backgroundColor: usecolor3, color: usecolor4, height: `${values1.value}%`}'
        >
          <h3>
            Personal Job Tracker
          </h3>
          <p>
            This application was made to make the job search easier and more organized. It allows me to search for jobs by scraping job boards, keep an organized contacts list, a calendar that job items and notes can be added to, and automated email page. Voice recognition used for navigation.
          </p>
          <p>
            Motivation
          </p>
          <p>
            I wanted to build an application that was not only useful, but was something that I could see myself using and would be beneficial for me. I also wanted to build a fully featured app that both felt consistent and had a lot of features that could be used together. So I built a job tracker that organizes my job search and also allows me to send emails, put things on a calendar, scrape web pages, and keep a contact list.
          </p>
          <p>
            Technologies Used
          </p>
          <p>
            Written in react on the front end and node.js on the back end. It imports a react-calendar component, scrapes web pages using Cheerio, uses a small node library for email delays, utilizes html5 native voice recognition features, uses react-dropzone for email attachments, material-ui for component prettification.
          </p>
          <p>
            Features
          </p>
          <ul>
            <li>
              Voice Recognition browse between tabs (ie 'go to calendar' goes to calendar page)
            </li>
            <li>
              Website scraping on search allows user to search Meetup for meetups, and linkedin/builtinaustin for jobs. Returns items and allows user to add meetups to calendar page, and jobs to saved jobs. Saved jobs can be sent to email section.
            </li>
            <li>
              Contact list that allows user to add contacts, add email address and search through contacts. Contact can be sent to email page along with notes about the person.
            </li>
            <li>
              Email section allows the user to make templates that will use the job description to prepopulate the message box. Can use dropzone to add attachments to email. Also allows the user to send delayed emails. Calendar section allows user to add notes, displays meetups sent to calendar as well as when an email was sent. Allows user to delete items as well.
            </li>
          </ul>
          <div
          v-on:mouseover="barhover(11)"  v-on:mouseleave='barleave(11)'
          v-on:click='windowopener("https://github.com/patientplatypus/platypusTracker")'
          v-bind:style='{fontSize: "1.65vh", paddingTop:"0.5%", paddingBottom:"1%", paddingLeft:"0.5%", paddingRight: "0.5%", backgroundColor: bar11hover===true?usecolor4:usecolor5, color:bar11hover===true?usecolor5:usecolor4, cursor:bar11hover===true?"pointer":"auto", position: "absolute", right: "0%", top: "90%"}'>
            <p>
              Click for Github Repo.
            </p>
          </div>
        </div>
      </template>
    </Motion>

    <Motion :value="project4explanation"
            :spring="config"
    >
      <template scope="values1">
          <div class="projectexplanation2"
               v-bind:class="reversefademethod(4)"
               v-bind:style='{  fontSize: "2vh", backgroundColor: usecolor3, color: usecolor4, height: `${values1.value}%`}'
          >
            <h3>
              ATX Hack4Change Project - Kiwi Compute
            </h3>
            <p>
            </p>
              At the ATXHack4Change hackathon I was on a small team that worked on this project. It's an IDE for Python that is made to be easy for children to learn how to program. It has an intuitive graphical interface and helper utilities.
            </p>
            <p>
              Motivation
            </p>
            <p>
              I really enjoy going to hackathons to work on cool projects and meet other developers. I chose kiwi compute not based on the idea, but I learned it was an awesome idea, but because I talked with the people on the team and thought they were nice. The project itself is an IDE that allows kids to learn Python in the browser. What makes it different from other Python IDEs is that it is very intuitive to use even for middle schoolers because it has a very nice UI and good explanations.
            </p>
            <p>
              Technologies Used
            </p>
            <p>
              The primary technologies that were used in the project were material-ui design for react as well as an IDE that the project champions had come with. However, my primary contribution was to create the backend in node.js. The features section will list my add-ons.
            </p>
            <p>
              Backend Features
            </p>
            <ul>
              <li>
                Written in Node.js
              </li>
              <li>
                Uses bcrypt to hash passwords for extra security
              </li>
              <li>
                User account creation and log in
              </li>
              <li>
                Users can save and retrieve code
              </li>
              <li>
                User can pick from drop down of past saved projects
              </li>
              <li>
                Users can name projects when they save
              </li>
            </ul>
            <div
            v-on:mouseover="barhover(11)"  v-on:mouseleave='barleave(11)'
            v-on:click='windowopener("https://github.com/patientplatypus/kiwi_compute")'
            v-bind:style='{fontSize: "2vh", paddingTop:"0.5%", paddingBottom:"1%", paddingLeft:"0.5%", paddingRight: "0.5%", backgroundColor: bar11hover===true?usecolor4:usecolor5, color:bar11hover===true?usecolor5:usecolor4, cursor:bar11hover===true?"pointer":"auto", position: "absolute", right: "0%", top: "90%"}'>
              <p>
                Click for Github Repo.
              </p>
            </div>
        </div>
      </template>
    </Motion>

    <Motion :value="project5explanation"
            :spring="config"
    >
      <template scope="values1">
        <div class="projectexplanation2"
             v-bind:class="reversefademethod(5)"
             v-bind:style='{ fontSize: "1.75vh", backgroundColor: usecolor3, color: usecolor4, height: `${values1.value}%`}'
        >
          <h3>
            Python Picture Swapper Application
          </h3>
          <p>
            I made a crud application with a Python backend that allows users to put pictures in a dashboard and trade with other users using 'platybucks'. Features mySQL database tables as well as currency inflation and purchase user flows.
          </p>
          <p>
            Motivation
          </p>
          <p>
            I wanted to make an application that would allow me to play around with both Python and mySQL. So I made a CRUD (Create Read Update Delete) application that allows a user to sell pictures to other users.
          </p>
          <p>
            Technologies Used:
          </p>
          <p>
            Written in React for the Front End and Python Flask for the backend. It uses a lot of SQL database read/writes as well as lots of flexbox for the grid layout. Uses a particularly good modal popup that I made as a plug and play standalone react component. CSS styling for the bank and 'platybucks money holder'.
          </p>
          <p>
            Features
          </p>
          <ul>
            <li>
              Users can 'buy' pictures from the internet with 20 'platybucks', a fictional currency.
            </li>
            <li>
              Users can put their picturs up for sale to other users and buy from other users.
            </li>
            <li>
              Platybucks container section for the user (designed in CSS - the 'bank')
            </li>
            <li>
              User dashboard where they can see their pictures for sale.
            </li>
            <li>
              All pictures for sale section that allows a user to see all pictures for sale and buy one.
            </li>
            <li>
              A 'buy from other users' section where the current user can click on others, see their pictures, and buy one they have for sale
            </li>
            <li>
              Consistent color themes with nice modal popups
            </li>
            <li>
              Over time the currency inflates, but only the bottom 20% of users by currency get new platybucks
            </li>
          </ul>
          <div
          v-on:mouseover="barhover(11)"  v-on:mouseleave='barleave(11)'
          v-on:click='windowopener("https://github.com/patientplatypus/pythonpictureswapper")'
          v-bind:style='{fontSize: "1.75vh", paddingTop:"0.5%", paddingBottom:"1%", paddingLeft:"0.5%", paddingRight: "0.5%", backgroundColor: bar11hover===true?usecolor4:usecolor5, color:bar11hover===true?usecolor5:usecolor4, cursor:bar11hover===true?"pointer":"auto", position: "absolute", right: "0%", top: "90%"}'>
            <p>
              Click for Github Repo.
            </p>
          </div>
        </div>
      </template>
    </Motion>

    <Motion :value="project6explanation"
            :spring="config"
    >
      <template scope="values1">
        <div class="projectexplanation2"
               v-bind:class="reversefademethod(6)"
               v-bind:style='{ fontSize: "1.75vh", backgroundColor: usecolor3, color: usecolor4, height: `${values1.value}%`}'
          >
          <h3>
            React Retro Futurism Portfolio
          </h3>
          <p>
            I made a heavily animated portfolio in React that is inspired by 80s pop culture, 60s pulp sci-fi novels, and video games. The theme of the site was both whimsical and interactive.
          </p>
          <p>
            Motivation
          </p>
          <p>
            I wanted to make a website that was both fun to make and fun to use. I hadn&#39;t made yet what I felt was a "complete" experience in a website, one that engaged the user and had the feeling of "wholeness". This was an effort to make something truly unique compared to other sites out there and something that felt done.
          </p>
          <p>
            Technologies Used:
          </p>
          <p>
            Written in React. First time utilizing css-grid.
          </p>
          <p>
            Features
          </p>
          <ul>
            <li>
              Star field with shooting stars written in Canvas.
            </li>
            <li>
              Back to the Future-esque spaceship created using only CSS.
            </li>
            <li>
              Retro computer screen navigation bar with animated scan lines and shadowed text. Computer also features cords and wires done in SVG and css.
            </li>
            <li>
              Animations done for projectors shoot from computer to divs giving a Star Wars hologram effect. Front page headshot blurs in and out, Jupiter rotates.
            </li>
            <li>
              Complete animation experience on laser cannon that fires, from targetting computer, lights, teleporter and more. Textures overlayed on divs to get cartoonish effect.
            </li>
            <li>
              Bespoke modal on timer with user input on project page. Project page also features clickable projects bar.
            </li>
            <li>
              About Me page features rotating triangles, and Memphis group style introductory menu with headshot.
            </li>
          </ul>
          <div
          v-on:mouseover="barhover(11)"  v-on:mouseleave='barleave(11)'
          v-on:click='windowopener("http://www.q8z8p.com")'
          v-bind:style='{fontSize: "1.75vh", paddingTop:"0.5%", paddingBottom:"1%", paddingLeft:"0.5%", paddingRight: "0.5%", backgroundColor: bar11hover===true?usecolor4:usecolor5, color:bar11hover===true?usecolor5:usecolor4, cursor:bar11hover===true?"pointer":"auto", position: "absolute", right: "0%", top: "90%"}'>
            <p>
              Click for Live Site!
            </p>
          </div>
        </div>
      </template>
    </Motion>

    <Motion :value="project7explanation"
            :spring="config"
    >
      <template scope="values1">
        <div class="projectexplanation2"
             v-bind:class="reversefademethod(7)"
             v-bind:style='{fontSize: "2vh", backgroundColor: usecolor3, color: usecolor4, height: `${values1.value}%`}'
        >
          <h3>
            First React Portfolio
          </h3>
          <p>
            This is my second iteartion of my professional portfolio. It contains links to my portfolio pieces as well as new blog posts and projects that were in active development. It is a more feature rich version of my original portfolio.
          </p>
          <p>
            Motivation
          </p>
          <p>
            My previous blog had personally fun and interesting, but I wanted a cleaner and more professional appearance. I also wanted to start at least one blog post so that I could publish my blog and advertise to a few people online.
          </p>
          <p>
            Technologies Used
          </p>
          <p>
            React with Flexbox. I also use several animation libraries (Velocity, React-Motion, Processing.js).
          </p>
          <p>
            Features
          </p>
          <ul>
            <li>
              Overall clean appearance with consistent color palette.
            </li>
            <li>
              SPA (Single Page Application) with top bar navigation.
            </li>
            <li>
              Home Page has links to social media and popup for email.
            </li>
            <li>
              Home Page has animation popin/popout for resume.
            </li>
            <li>
              About Page has "Kodak" picture modal on timer with arrows (arrows animated).
            </li>
            <li>
              Projects Page has slider overlay for each picture/project.
            </li>
            <li>
              Blog page has 2 blogs (one in development); Algorithms Blog (small) and Google Refinance (big).
            </li>
            <li>
              Contact Page emails me directly.
            </li>
          </ul>
          <div
          v-on:mouseover="barhover(11)"  v-on:mouseleave='barleave(11)'
          v-on:click='windowopener("https://github.com/patientplatypus/professional_portfolio")'
          v-bind:style='{fontSize: "2vh", paddingTop:"0.5%", paddingBottom:"1%", paddingLeft:"0.5%", paddingRight: "0.5%", backgroundColor: bar11hover===true?usecolor4:usecolor5, color:bar11hover===true?usecolor5:usecolor4, cursor:bar11hover===true?"pointer":"auto", position: "absolute", right: "0%", top: "90%"}'>
            <p>
              Click for Github Repo.
            </p>
          </div>
        </div>
      </template>
    </Motion>

    <Motion :value="project8explanation"
            :spring="config"
    >
      <template scope="values1">
        <div class="projectexplanation2"
             v-bind:class="reversefademethod(8)"
             v-bind:style='{fontSize: "2vh", backgroundColor: usecolor3, color: usecolor4, height: `${values1.value}%`}'
        >
          <h3>
            First Portfolio - JS/HTML/CSS
          </h3>
          <p>
            An old version of my portfolio (my first), it is a cool web application in it's own right. It features animations and popups, smooth scrolling and good form design using bootstrap tables.
          </p>
          <p>
            Motivation
          </p>
          <p>
            This was my first portfolio. I wanted it to be personalized to my own tastes, have a consistent color theme and feel that it was 'of one piece', and stand out from other people (which I wanted to accomplish in part with animations). Although it was one of the first things I built, I'm pretty proud of it.
          </p>
          <p>
            Technologies Used
          </p>
          <p>
            Written primarily in jQuery, html, css. It uses the velocity.js animation library to position a lot of the divs on click (such as the about me header and my projects section). I use processing.js to show a pong game, google-map-react along with google maps to show an interactive modal of my travels.
          </p>
          <p>
            Features
          </p>
          <ul>
            <li>
              Smooth scrolling with navigation bar on Single Page Application (SPA)
            </li>
            <li>
              Animations using velocity.js animation library
            </li>
            <li>
              Skills section featuring API calls, CSS div fun, and database store and retrieval
            </li>
            <li>
              Google maps interactive picture modal
            </li>
            <li>
              Message box that emails my gmail account
            </li>
          </ul>
          <div
          v-on:mouseover="barhover(11)"  v-on:mouseleave='barleave(11)'
          v-on:click='windowopener("https://github.com/patientplatypus/portfolio_web")'
          v-bind:style='{fontSize: "2vh", paddingTop:"0.5%", paddingBottom:"1%", paddingLeft:"0.5%", paddingRight: "0.5%", backgroundColor: bar11hover===true?usecolor4:usecolor5, color:bar11hover===true?usecolor5:usecolor4, cursor:bar11hover===true?"pointer":"auto", position: "absolute", right: "0%", top: "90%"}'>
            <p>
              Click for Github Repo.
            </p>
          </div>
        </div>
      </template>
    </Motion>

    <Motion :value="project9explanation"
            :spring="config"
    >
      <template scope="values1">
        <div class="projectexplanation2"
             v-bind:class="reversefademethod(9)"
             v-bind:style='{ fontSize: "1.8vh", backgroundColor: usecolor3, color: usecolor4, height: `${values1.value}%`}'
        >
          <h3>
            Smaller Projects
          </h3>
          <p>
            Here is a list of small projects and miscellaneous code that I've written. Some of it is deprecated or buggy so it doesn't work - for these I have not had time to go back and fix them up, but you can check out the code to see my thought process. Others I have also listed as deprecated as they may be in exotic languages and I have not had the time to get the code base back up. I've included sections to links for deprecated and working examples.
          </p>
          <p>
            Working Examples
          </p>
          <p>
            Here are links to a few small toys. I&#39;ve been playing on and off with things like Rust and Go lang for a while, so here is a working project link to a "Towers of Hanoi" puzzle solver in Rust. I also have here tic-tac-toe made in Python 3 - it has an "AI" that will play against you and win if you make an incorrect move. I have a ping pong game that I made in a language called Processing (here it is processing.js as it is ported to work in html canvas). This last is linked to in my first portfolio. Finally, I have a business card (and outdated resume) that I made in html and css for fun.
          </p>
          <div v-bind:style='{display: "flex", flexDirection:"flex-row", width: "100%", height: "5%"}'>
            <div
            class='textaligncenter'
            v-on:mouseover="barhover(11)"  v-on:mouseleave='barleave(11)'
            v-on:click='windowopener("https://play.integer32.com/?gist=1cf6b353444e2cab17fbfccd3193d5ef&version=undefined")'
            v-bind:style='{flex: "1", height: "100%", lineHeight: "10%", marginBottom:"5%", backgroundColor: bar11hover===true?usecolor4:usecolor5, color:bar11hover===true?usecolor5:usecolor4, cursor:bar11hover===true?"pointer":"auto"}'>
              <p>
                Towers
              </p>
            </div>
            <div v-bind:style='{flex: "1"}'></div>
            <div
            class='textaligncenter'
            v-on:mouseover="barhover(12)"  v-on:mouseleave='barleave(12)'
            v-on:click='windowopener("https://repl.it/HzbX")'
            v-bind:style='{flex: "1", height: "100%", padding:"0.1%", lineHeight: "10%", marginBottom:"5%", backgroundColor: bar12hover===true?usecolor4:usecolor5, color:bar12hover===true?usecolor5:usecolor4, cursor:bar12hover===true?"pointer":"auto"}'>
              <p>
                Tic Tac Toe
              </p>
            </div>
            <div v-bind:style='{flex: "1"}'></div>
            <div
            class='textaligncenter'
            v-on:mouseover="barhover(13)"  v-on:mouseleave='barleave(13)'
            v-on:click='windowopener("https://github.com/patientplatypus/portfolio_web/blob/master/js/pingpong.pde")'
            v-bind:style='{flex: "1", height: "100%", padding:"0.1%", lineHeight: "10%", marginBottom:"5%", backgroundColor: bar13hover===true?usecolor4:usecolor5, color:bar13hover===true?usecolor5:usecolor4, cursor:bar13hover===true?"pointer":"auto"}'>
              <p>
                Ping Pong
              </p>
            </div>
            <div v-bind:style='{flex: "1"}'></div>
            <div
            class='textaligncenter'
            v-on:mouseover="barhover(14)"  v-on:mouseleave='barleave(14)'
            v-on:click='windowopener("https://github.com/patientplatypus/resume_html")'
            v-bind:style='{flex: "1", height: "100%", padding:"0.1%", lineHeight: "10%", marginBottom:"5%", backgroundColor: bar14hover===true?usecolor4:usecolor5, color:bar14hover===true?usecolor5:usecolor4, cursor:bar14hover===true?"pointer":"auto"}'>
              <p>
                Resume
              </p>
            </div>
            <div v-bind:style='{flex: "1"}'></div>
            <div
            class='textaligncenter'
            v-on:mouseover="barhover(15)"  v-on:mouseleave='barleave(15)'
            v-on:click='windowopener("https://github.com/patientplatypus/businesscards")'
            v-bind:style='{flex: "1", height: "100%", padding:"0.1%", lineHeight: "10%", marginBottom:"5%", backgroundColor: bar15hover===true?usecolor4:usecolor5, color:bar15hover===true?usecolor5:usecolor4, cursor:bar15hover===true?"pointer":"auto"}'>
              <p>
                Cards
              </p>
            </div>
          </div>
          <p>
            Deprecated Code
          </p>
          <p>
            I have in my deprecated list two mobile applications. Each of these is working, but is little more than a boilerplate. However, I did learn about strict typing while developing the iOs Swift application and it does run - it even taught me how to use redux in iOs. The React Native application was the first time that I've used mobX, another state management library, and I found that to be very useful. The last link is a Sudoku Solver written in Go lang. Given a Sudoku puzzle it will programmatically will solve it. The code may not be runnable, given dependency and environment updating, but it is a nice example to look at.
          </p>
          <div v-bind:style='{display: "flex", flexDirection:"flex-row", width: "100%", height: "5%"}'>
            <div
            class='textaligncenter'
            v-on:mouseover="barhover(16)"  v-on:mouseleave='barleave(16)'
            v-on:click='windowopener("https://github.com/patientplatypus/FirstSwiftProj")'
            v-bind:style='{flex: "1", height: "100%", lineHeight: "10%", marginBottom:"5%", backgroundColor: bar16hover===true?usecolor4:usecolor5, color:bar16hover===true?usecolor5:usecolor4, cursor:bar16hover===true?"pointer":"auto"}'>
              <p>
                Swift Project.
              </p>
            </div>
            <div v-bind:style='{flex: "1"}'></div>
            <div
            class='textaligncenter'
            v-on:mouseover="barhover(17)"  v-on:mouseleave='barleave(17)'
            v-on:click='windowopener("https://github.com/patientplatypus/reactnativemobx")'
            v-bind:style='{flex: "1", height: "100%", lineHeight: "10%", marginBottom:"5%", backgroundColor: bar17hover===true?usecolor4:usecolor5, color:bar17hover===true?usecolor5:usecolor4, cursor:bar17hover===true?"pointer":"auto"}'>
              <p>
                React Native Project.
              </p>
            </div>
            <div v-bind:style='{flex: "1"}'></div>
            <div
            class='textaligncenter'
            v-on:mouseover="barhover(18)"  v-on:mouseleave='barleave(18)'
            v-on:click='windowopener("https://github.com/patientplatypus/SudokuSolver")'
            v-bind:style='{flex: "1", height: "100%", lineHeight: "10%", marginBottom:"5%", backgroundColor: bar18hover===true?usecolor4:usecolor5, color:bar18hover===true?usecolor5:usecolor4, cursor:bar18hover===true?"pointer":"auto"}'>
              <p>
                Sudoku Solver
              </p>
            </div>
          </div>
        </div>
      </template>
    </Motion>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Motion } from 'vue-motion';
import resume from '../assets/PeterTWeyandResumeSep.pdf';
export default {
  name: 'home',
  components: {
    Motion
  },
  data () {
    return {
      msg: 'Welcome to the Home Page!',
      counter: 0,
      titlen: 100,
      projectclicked: -1,
      projectexplanationclicked: -1,
      project1n: 100,
      project2n: 100,
      project3n: 100,
      project4n: 100,
      project5n: 100,
      project6n: 100,
      project7n: 100,
      project8n: 100,
      project9n: 100,
      projectexplanationn: 0,
      bar1hover: false,
      bar2hover: false,
      bar3hover: false,
      bar4hover: false,
      bar5hover: false,
      bar6hover: false,
      bar7hover: false,
      bar8hover: false,
      bar9hover: false,
      bar10hover: false,
      bar11hover: false,
      bar12hover: false,
      bar13hover: false,
      bar14hover: false,
      bar15hover: false,
      bar16hover: false,
      bar17hover: false,
      bar18hover: false,
      bar19hover: false,
      bar20hover: false,
      resumen: 100,
      project1explanation: 0,
      project2explanation: 0,
      project3explanation: 0,
      project4explanation: 0,
      project5explanation: 0,
      project6explanation: 0,
      project7explanation: 0,
      project8explanation: 0,
      project9explanation: 0,
      titleendingvalue: 5,
      config: {
        stiffness: 170,
        damping: 26,
        precision: 0.01,
      }
    }
  },
  created(){
    setTimeout(()=>{
      this.titlen = this.titleendingvalue;
    },0)
    console.log('current directory', __dirname);
  },
  computed:{
     ...mapGetters([
      'count',
      'recentHistory',
      'usecolor1',
      'usecolor2',
      'usecolor3',
      'usecolor4',
      'usecolor5',
    ]),
  },
  methods: {
      ...mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ]),
    windowopener(url){
      window.open(url);
    },
    fademethod: function(number){
      if(this.projectclicked===number){
        console.log('inside fademethod if statemenent 1 FADEOUT');
        return{'fadeout':true, 'fadein': false}
      }
      if(this.projectclicked!=number){
        console.log('inside fademethod if statemenent 2 FADEIN');
        return{'fadein':true, 'fadeout': false}
      }
    },
    leftmethod: function(number){
      if(this.projectclicked===number){
        return{'moveleft': true, 'moveright':false}
      }else {
        return{'moveright': true, 'moveleft': false}
      }
    },
    reversefademethod: function(number){
      if(this.projectclicked!=number){
        console.log('inside fademethod if statemenent 1 FADEOUT');
        return{'fadeout':true, 'fadein': false}
      }
      if(this.projectclicked===number){
        console.log('inside fademethod if statemenent 2 FADEIN');
        return{'fadein':true, 'fadeout': false}
      }
    },
    barclicked: function(number){
      this.projectclicked = number;
      if(number===1){
        this.project1explanation=75;
        this.project2explanation=0;
        this.project3explanation=0;
        this.project4explanation=0;
        this.project5explanation=0;
        this.project6explanation=0;
        this.project7explanation=0;
        this.project8explanation=0;
        this.project9explanation=0;
      }else if(number === 2){
        this.project1explanation=0;
        this.project2explanation=75;
        this.project3explanation=0;
        this.project4explanation=0;
        this.project5explanation=0;
        this.project6explanation=0;
        this.project7explanation=0;
        this.project8explanation=0;
        this.project9explanation=0;
      }else if(number === 3){
        this.project1explanation=0;
        this.project2explanation=0;
        this.project3explanation=75;
        this.project4explanation=0;
        this.project5explanation=0;
        this.project6explanation=0;
        this.project7explanation=0;
        this.project8explanation=0;
        this.project9explanation=0;
      }else if(number === 4){
        this.project1explanation=0;
        this.project2explanation=0;
        this.project3explanation=0;
        this.project4explanation=75;
        this.project5explanation=0;
        this.project6explanation=0;
        this.project7explanation=0;
        this.project8explanation=0;
        this.project9explanation=0;
      }else if(number === 5){
        this.project1explanation=0;
        this.project2explanation=0;
        this.project3explanation=0;
        this.project4explanation=0;
        this.project5explanation=75;
        this.project6explanation=0;
        this.project7explanation=0;
        this.project8explanation=0;
        this.project9explanation=0;
      }else if(number === 6){
        this.project1explanation=0;
        this.project2explanation=0;
        this.project3explanation=0;
        this.project4explanation=0;
        this.project5explanation=0;
        this.project6explanation=75;
        this.project7explanation=0;
        this.project8explanation=0;
        this.project9explanation=0;
      }else if(number === 7){
        this.project1explanation=0;
        this.project2explanation=0;
        this.project3explanation=0;
        this.project4explanation=0;
        this.project5explanation=0;
        this.project6explanation=0;
        this.project7explanation=75;
        this.project8explanation=0;
        this.project9explanation=0;
      }else if(number === 8){
        this.project1explanation=0;
        this.project2explanation=0;
        this.project3explanation=0;
        this.project4explanation=0;
        this.project5explanation=0;
        this.project6explanation=0;
        this.project7explanation=0;
        this.project8explanation=75;
        this.project9explanation=0;
      }else if(number === 9){
        this.project1explanation=0;
        this.project2explanation=0;
        this.project3explanation=0;
        this.project4explanation=0;
        this.project5explanation=0;
        this.project6explanation=0;
        this.project7explanation=0;
        this.project8explanation=0;
        this.project9explanation=75;
      }
    },
    barhover: function(number){
      if (number===1){
        this.bar1hover = true;
      }else if (number === 2){
        this.bar2hover = true;
      }else if (number === 3){
        this.bar3hover = true;
      }else if (number === 4){
        this.bar4hover = true;
      }else if (number === 5){
        this.bar5hover = true;
      }else if (number === 6){
        this.bar6hover = true;
      }else if (number === 7){
        this.bar7hover = true;
      }else if (number === 8){
        this.bar8hover = true;
      }else if (number === 9){
        this.bar9hover = true;
      }else if (number === 10){
        this.bar10hover = true;
      }else if (number === 11){
        this.bar11hover = true
      }else if (number === 12){
        this.bar12hover = true
      }else if (number === 13){
        this.bar13hover = true
      }else if (number === 14){
        this.bar14hover = true
      }else if (number === 15){
        this.bar15hover = true
      }else if (number === 16){
        this.bar16hover = true
      }else if (number === 17){
        this.bar17hover = true
      }else if (number === 18){
        this.bar18hover = true
      }else if (number === 19){
        this.bar19hover = true
      }else if (number === 20){
        this.bar20hover = true
      }
    },
    barleave: function(number){
      if (number===1){
        this.bar1hover = false;
      }else if (number === 2){
        this.bar2hover = false;
      }else if (number === 3){
        this.bar3hover = false;
      }else if (number === 4){
        this.bar4hover = false;
      }else if (number === 5){
        this.bar5hover = false;
      }else if (number === 6){
        this.bar6hover = false;
      }else if (number === 7){
        this.bar7hover = false;
      }else if (number === 8){
        this.bar8hover = false;
      }else if (number === 9){
        this.bar9hover = false;
      }else if (number === 10){
        this.bar10hover = false;
      }else if (number === 11){
        this.bar11hover = false;
      }else if (number === 12){
        this.bar12hover = false;
      }else if (number === 13){
        this.bar13hover = false;
      }else if (number === 14){
        this.bar14hover = false;
      }else if (number === 15){
        this.bar15hover = false;
      }else if (number === 16){
        this.bar16hover = false;
      }else if (number === 17){
        this.bar17hover = false;
      }else if (number === 18){
        this.bar18hover = false;
      }else if (number === 19){
        this.bar19hover = false;
      }else if (number === 20){
        this.bar20hover = false;
      }
    },
    changefunction: function(value){
    },
    starttitle: function() {
      setTimeout(()=>{
        this.project1n = 20;
      }, 100)
    },
    endtitle: function() {
    },
    restarttitle: function() {
    },
    startprojectbar1: function() {
      setTimeout(()=>{
        this.project2n = 27;
      }, 100)
    },
    startprojectbar2: function() {
      setTimeout(()=>{
        this.project3n = 34;
      }, 100)
    },
    startprojectbar3: function() {
      setTimeout(()=>{
        this.project4n = 41;
      }, 100)
    },
    startprojectbar4: function() {
      setTimeout(()=>{
        this.project5n = 48;
      }, 100)
    },
    startprojectbar5: function() {
      setTimeout(()=>{
        this.project6n = 55;
      }, 100)
    },
    startprojectbar6: function() {
      setTimeout(()=>{
        this.project7n = 62;
      }, 100)
    },
    startprojectbar7: function() {
      setTimeout(()=>{
        this.project8n = 69;
      }, 100)
    },
    startprojectbar8: function() {
      setTimeout(()=>{
        this.project9n = 76;
      }, 100)
    },
    startprojectbar9: function() {
      setTimeout(()=>{
        this.projectexplanationn = 1;
        this.resumen = 85;
      }, 100)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.textaligncenter{
  text-align: center;
  width: 100%
}

.work{
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
}

.fadeout{
  animation: fadeoutanimation .5s linear;
  animation-fill-mode: forwards;
}

.fadein{
  animation: fadeinanimation .5s linear;
  animation-fill-mode: forwards;
}

.moveleft{
  animation: moveleftanimation .5s ease-in;
  animation-fill-mode: forwards;
}

.moveright{
  animation: moverightanimation .5s ease-out;
}

@keyframes moveleftanimation {
  0% {
    left: 75%;
  }
  100% {
    left: 72.49%;
  }
}

@keyframes moverightanimation {
  0% {
    left: 72.49%;
  }
  100% {
    left: 75%;
  }
}



@keyframes fadeoutanimation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeinanimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.projectexplanation{
  position: absolute;
  top: 20%;
  left: 5%;
  width: 65%;
  font-weight: bold;
  overflow: hidden;
  overflow-y: auto;
  padding-left: 1.25%;
  padding-right: 1.25%;
  height: 75%;
  font-size: 2.6vh;
}

.projectexplanation2{
  position: absolute;
  top: 20%;
  left: 5%;
  width: 65%;
  text-align: left;
  font-weight: bold;
  overflow: hidden;
  overflow-y: auto;
  padding-left: 1.25%;
  padding-right: 1.25%;
  height: 75%;
  font-size: 2vh;
}

.welcometitle{
  position: absolute;
  font-size: 2.5vh;
  font-weight: bolder;
  top: 5%;
  height: 10%;
  left: 5%;
  width: 90%;
  line-height: 100%;
}

.projectbar{
  position: absolute;
  font-size: 1.5vh;
  font-weight: bold;
  height: 5%;
  left: 75%;
  width: 20%;
  line-height: 100%;
}

.resumebar{
  position: absolute;
  font-size: 1.5vh;
  font-weight: bolder;
  height: 20%;
  top: 100%;
  padding-left: 2.5%;
  padding-right: 2.5%;
  left: 75%;
  width: 15%;
  line-height: 200%;
}

.explanationbox{
  position: absolute;
  font-size: 2.5vh;
  font-weight: bold;
  top: 30%;
  height: 65%;
  padding-left: 2%;
  padding-right: 2%;
  left: 3%;
  width: 90%;
  overflow: hidden;
  overflow-y: scroll;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
