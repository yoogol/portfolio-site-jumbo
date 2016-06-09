console.log("loading js");
console.log($( window ).height());

var contentShowing = false;
var clickEventAdded = false;


$(".menu-button").click(function(event) {
  $(".menu-button").removeClass("activate-button");
  var iconsPosition = $(window).height() - $("#icons-container").height();
  var footerPosition = $(window).height() - $("footer").height();

  $("#icons-container").animate({
    "font-size": "25px",
    "top": iconsPosition,
    "width": "60%",
    "margin": "0 20% 0 20%",
  }, 1500);

  $(".my-name").slideUp("slow", function() {
  });
  $(".my-title").slideUp("slow", function() {
  });

  $(".jumbotron").animate({
    "top": "0px",
    "height": "100px"
  }, 1500);

  $(".menu-button").animate({
    "height": "50px"
  })

  $("#menu-container").animate({
    "top": "0px",
    "width": "80%",
    "margin": "0 10% 0 10%"
  }, 1500);

  $("footer").fadeIn(1500);
  $("footer").css("top", footerPosition);

  var changeContent = function() {
    console.log("function running");
    if ($(event.target).hasClass("websites")) {
      $(".content").fadeOut(30);
      $(".website-content").fadeIn("slow")
    } else if ($(event.target).hasClass("browser-apps")) {
      $(".content").fadeOut(30);
      $(".browswerapp-content").fadeIn("slow")
    } else if ($(event.target).hasClass("mobile-apps")) {
      $(".content").fadeOut(30);
      $(".mobileapp-content").fadeIn("slow")
    } else if ($(event.target).hasClass("everything-else")) {
      $(".content").fadeOut(30);
      $(".everythingelse-content").fadeIn("slow");
      $(".everythingelse-text").fadeOut(0);
      $(".about-button").css("background","linear-gradient(45deg, lightgrey 87%, white 50%)");
      $(".aboutme-text").fadeIn("fast")
      $(".about-me-b").css("background","linear-gradient(45deg, grey 87%, white 50%)");

      if (clickEventAdded == false) {
        $(".about-button").click(function(event) {
          clickEventAdded = true;
          $(".everythingelse-text").fadeOut(0)
          $(".about-button").css("background","linear-gradient(45deg, lightgrey 87%, white 50%)");
          $(event.target).css("background","linear-gradient(45deg, grey 87%, white 50%)");
          if ($(event.target).hasClass("about-me-b")) {
            $(".everythingelse-text").fadeOut(30)
            $(".aboutme-text").fadeIn("slow")
          } else if ($(event.target).hasClass("social-media-b")) {
            $(".everythingelse-text").fadeOut(30)
            $(".socialmedia-text").fadeIn("slow")
          } else if ($(event.target).hasClass("online-ed-b")) {
            $(".everythingelse-text").fadeOut(30);
            $(".onlineedu-text").fadeIn("slow")
          }
          else if ($(event.target).hasClass("internet-soc-b")) {
            $(".everythingelse-text").fadeOut(30);
            $(".internet-text").fadeIn("slow")
          } else if ($(event.target).hasClass("blog-b")) {
            $(".everythingelse-text").fadeOut(30);
            $(".blog-text").fadeIn("slow")
          }
        })
      }

    }
  }

  if (contentShowing == false) {
    setTimeout(function() {
      $(event.target).addClass("activate-button");
      changeContent();
      contentShowing = true;
    }, 1500)
  } else {
    $(event.target).addClass("activate-button");
    changeContent();
  };

});

$(".fa-home").click(function() {
  contentShowing = false;
  $(".content").fadeOut(30);
  $(".menu-button").removeClass("activate-button");

  $("#icons-container").animate({
    "font-size": "30px",
    "top": "10px",
    "width": "100%",
    "margin": "0 0 0 0",
  }, 1500);

  setTimeout(function () {
    $(".my-name").fadeIn("slow", function() {
    });
    $(".my-title").fadeIn("slow", function() {
    });
  }, 1500);


  $(".jumbotron").animate({
    "top": "160px",
    "height": "230px"
  }, 1500);

  $(".menu-button").animate({
    "height": "70px",
  })

  $("#menu-container").animate({
    "top": "430px",
  }, 1500);
})

$(".fa-envelope").click(function() {
  document.location.href = "mailto:yulia@yuliashea.com?subject=" + "Website visitor interested to get in touch"
})



// $(".websites").click(function() {
//   $(".websites").addClass("activate-button")
// })


//
// var websiteButton = document.querySelector(".websites");
// var browserAppsButton = document.querySelector(".browser-apps");
// var mobileAppsButton = document.querySelector(".mobile-apps");
// var everythingElseButton = document.querySelector(".everything-else");
// var iconsContainer = document.querySelector("#icons-container");
// var myTitle = document.querySelector(".my-title");
// var myName = document.querySelector(".my-name");
// var leadText = document.querySelector(".lead-text");
// var menuContainer = document.querySelector("#menu-container");
// var mainContainer = document.querySelector("#main-container");
// var activeButton = document.querySelector(".activate-button");
// var menuButtons = document.getElementsByClassName('menu-button');
// var nextStepButton = document.querySelector(".next-step-button");
// var screenshotsContainer = document.querySelector("#screenshots-container");
// var linkedinIcon = document.querySelector(".fa-linkedin");
// var githubIcon = document.querySelector(".fa-github-alt");
// var twitterIcon = document.querySelector(".fa-twitter");
// var emailIcon = document.querySelector(".fa-envelope");
// var homeIcon = document.querySelector(".fa-home");
// var aboutmeButtonContainer = document.querySelector("#aboutme-button-container");
// var aboutMeButton = document.querySelector(".about-me-b");
// var socialMedButton = document.querySelector(".social-media-b");
// var onlineEdButton = document.querySelector(".online-ed-b");
// var internetSocButton = document.querySelector(".internet-soc-b");
// var photosButton = document.querySelector(".photos-b");
// var blogButton = document.querySelector(".blog-b");
// var aboutmeButtons = document.getElementsByClassName('about-button');
// var emailPopUp = document.querySelector(".emailpopup");
// var contentContainer = document.querySelector(".content-container");
//
//
//
//
// // Texts
// var myText = document.querySelector("#text-container");
// var websitesText = "<p>Personal, wedding, business, you name it! I will be happy to design a simple-to-use, pretty and mobile-optimized website for your specific needs. It can be as simple as this one you are currently visiting or it can be much more intricate and colorful.</p> <p>For your convenience I can make a Wordpress-based website that will allow you to easily and independently manage your content at any moment.</p><strong>Site examples are coming soon!</strong>"
// var browserAppsText = "<p>Need your website to do something more complicated than showing content? Does your website need to save user information, retrieve data from a database or use an external API and interact with users? Then you need an app!</p> <strong>Here are some examples of browser-based apps that I’ve built. More coming soon!</strong>"
// var mobileAppsText = "<p>Want to go one step further than having your app available in a browser? Let's build a mobile application then!</p><strong>Examples are coming soon!</strong>"
// var moreAboutMe = "<h2 style='text-align:center'>More about me</h2><p>Technology and communication have always been at the center of my interests and professional life. First time I used the Internet I was hooked and amazed by its unprecedented, groundbreaking power to connect people to information and to each other. I wanted to be part of it. </p><p> Before becoming a web developer and entrepreneur, I worked as a senior manager at a social media marketing agency, created and managed a non-profit to promote free online education and studied the effect of the Internet communication on society and it’s political institutions. </p> <p>You can find more details about all of this and more in this section.<p/> <p> Thanks for visiting and I hope to hear from you soon!"
// var socialMediaStudy = "<h2 style='text-align:center'>Social Media Study</h2><p>Social media is the oil of the Internet communication machine, and as such it is an invaluable resource not just for those who want or need to communicate, but also for those who want to understand how, why and when people communicate.</p><p>In 2011 I joined Converseon, a boutique marketing agency in New York City, as a research analyst and later as a manager where for five years I was involved in studying how consumers communicate about brands and products on social media.</p><p>It was exciting to be part of a new and quickly developing field such as social media listening. During the years I was involved in it, the industry had undergone significant transformation, bringing about new opportunities and challenges. Higher internet penetration across the world allowed social media research to become truly international, increased overall variability and accuracy of data. It further emphasized the importance of social media for businesses.</p> <p> Making sense of all this increasingly complex and massive data has, however, become more and more challenging. Social media platforms are continuously tightening control over their data access, decreasing its transparency for others. There are still no one industry-wide standard of data quality and research methodology. Clean and meaningful data continues to come at a high cost.</p><p>Lately new technologies such as machine learning and other type of analysis automation started to bring about a new hope for these challenges. This realization inspired me to pursue of more technical carrier in programming.</p>"
// var onlineEducation = "<h2 style='text-align:center'>Online Education</h2><p>One of the most fascinating opportunities that Internet has opened for everyone who has access to it is the opportunity to learn. Anything. From anywhere. Absolutely free. </p><p>In 2011 I found myself spending more time watching free lectures from Harvard, Yale and John Hopkins University than I spent on Facebook, Twitter and other social media sites combined. </p><p>Studies had shown that although impact of online courses on educational system on a macro level may be limited, they may have a tremendous effect on lives of specific, self-motivated students who otherwise would have had no access to such educational resources. I wanted to make sure that everyone of these students had a chance to use them and started a non-profit to spread information about Massive Open Online Courses among young people in my home country of Russia.</p><p>mirovoystudent.ru";
// var internetSociety = "<h2 style='text-align:center'>Internet and Society</h2><p>As a famous guru of media studies Marshall McLuhan said, “We shape our tools and thereafter our tools shape us”. Although McLuhan didn’t live to see the Internet in action and had in mind some earlier media, his wisdom is fully applicable to it the Internet. In my days as a student at Fordham, a school where McLuhan once came to teach himself, I spend my time studying just that.</p><p>In my research I focused specifically on the Internet’s ability or lack of thereof to improve chances of a country (and more specifically my poor motherland Russia) to become a real democracy. </p><p>Is liberation of information through the Internet sufficient for development of critical and independent thinking and trust in democratic institutions? What are the forces that might counteract such development?</p><p>My Master’s thesis covering these topic is available here.</p><p>And here is a short article that was presented on this topic at one of the conferences.</p><p>Do you agree with my point? Let me know your thoughts!"
// var photos = "<h2 style='text-align:center'>Photos of Life and Travel</h2><p>Words, words, words…</p><p>Communication is not just about words, isn’t it?</p><p>Today’s Internet with all its Instagrams and Snapchats is here to prove just that. And so I thought my website wouldn’t be complete without a couple of pictures that show the world through my eyes of an amateur photographer. In the end I took them to share with others. Please enjoy if you care!</p><p style='text-align:center'>Photos coming soon!</p><img class='profile-pic' src='/assets/profile4.jpg'>";
// var blog = "<h2 style='text-align:center'>My Blog</h2><p>Interested in my writing? I'm honored. Seriously.</p><p> I write, though infrequently, on a variety of topics ranging from my personal experiences to all things communication and technology. You can find my blog on LinkedIn.</p>"
//
// // screenshots
// var fallingwordsgame = document.createElement('div');
// fallingwordsgame.classList.add("screenshot-subcontainer");
// fallingwordsgame.innerHTML = "<a target='_blank' href='http://yoogol.github.io/project-one/'><p class='subline'>Typing game of falling words</p><img src='assets/fallingwordsgame.png' class='screenshot'></a>";
//
// var techcarreerresource = document.createElement('div');
// techcarreerresource.classList.add("screenshot-subcontainer");
// techcarreerresource.innerHTML = "<a target='_blank' href='http://yoogol.github.io/project-two/'><p class='subline'>Tech career resource to find relevant skills, meetups and online courses</p><img src='assets/techcarreerresource.png' class='screenshot'></a>";
//
// // icon events
// var emailIcon = document.querySelector(".fa-envelope");
// emailIcon.addEventListener("click", function() {
//   console.log("Clicked");
//   document.location.href = "mailto:yulia@yuliashea.com?subject="
//       + "Website visitor interested to get in touch"
//   // emailPopUp.classList.remove("hidden");
//   // emailPopUp.innerHTML = "Hello";
// });
//
// // button events
//
// // websites
//
// websiteButton.addEventListener("click", function() {
//   for (var i = 0; i < menuButtons.length; i++) {
//     menuButtons[i].classList.remove("activate-button")
//   };
//   mainContainer.classList.remove("hidden");
//   mainContainer.classList.remove("aboutmepage");
//   contentContainer.classList.add("activate");
//   iconsContainer.classList.add("activate-icons");
//   myTitle.classList.add("scrollupandremove");
//   myName.classList.add("scrollupandremove");
//   leadText.classList.add("scrollupandremove");
//   menuContainer.classList.add("activate-menu");
//   websiteButton.classList.add("activate-button");
//   nextStepButton.classList.remove("hidden");
//   nextStepButton.innerHTML = "Email me about your</br> website idea";
//   myText.innerHTML = websitesText;
//   screenshotsContainer.innerHTML = "";
//   // screenshotsContainer.appendChild(priscilla);
//   // screenshotsContainer.appendChild(marilyn);
//   nextStepButton.addEventListener("click", function() {
//     document.location.href = "mailto:yulia@yuliashea.com?subject="
//         + "Website visitor interested in a new website"
//   });
//   aboutmeButtonContainer.classList.add("hidden");
//   myText.classList.remove("aboutmepage");
// });
//
// // browser apps
// browserAppsButton.addEventListener("click", function() {
//   for (var i = 0; i < menuButtons.length; i++) {
//     menuButtons[i].classList.remove("activate-button")
//   };
//   mainContainer.classList.remove("aboutmepage");
//   nextStepButton.classList.remove("hidden");
//   contentContainer.classList.add("activate");
//   iconsContainer.classList.add("activate-icons");
//   myTitle.classList.add("scrollupandremove");
//   myName.classList.add("scrollupandremove");
//   leadText.classList.add("scrollupandremove");
//   menuContainer.classList.add("activate-menu");
//   browserAppsButton.classList.add("activate-button");
//   myText.innerHTML = browserAppsText;
//
//   screenshotsContainer.innerHTML = "";
//   screenshotsContainer.appendChild(fallingwordsgame);
//   screenshotsContainer.appendChild(techcarreerresource);
//   nextStepButton.innerHTML = "Email me about your</br> browswer app idea";
//   nextStepButton.addEventListener("click", function() {
//     document.location.href = "mailto:yulia@yuliashea.com?subject="
//         + "Website visitor interested in a browser app"
//   });
//   aboutmeButtonContainer.classList.add("hidden");
//   myText.classList.remove("aboutmepage");
// });
//
//
// // mobile apps
// mobileAppsButton.addEventListener("click", function() {
//   for (var i = 0; i < menuButtons.length; i++) {
//     menuButtons[i].classList.remove("activate-button")
//   };
//   mainContainer.classList.remove("aboutmepage");
//   contentContainer.classList.add("activate");
//   iconsContainer.classList.add("activate-icons");
//   myTitle.classList.add("scrollupandremove");
//   myName.classList.add("scrollupandremove");
//   leadText.classList.add("scrollupandremove");
//   menuContainer.classList.add("activate-menu");
//   mobileAppsButton.classList.add("activate-button");
//   myText.innerHTML = mobileAppsText;
//   nextStepButton.classList.remove("hidden");
//   screenshotsContainer.innerHTML = "";
//   nextStepButton.innerHTML = "Email me about your </br>mobile app idea";
//   nextStepButton.addEventListener("click", function() {
//     document.location.href = "mailto:yulia@yuliashea.com?subject="
//         + "Website visitor interested in a mobile app"
//   });
//   aboutmeButtonContainer.classList.add("hidden");
//   myText.classList.remove("aboutmepage");
// });
//
//
// // eveything else
// everythingElseButton.addEventListener("click", function() {
//   for (var i = 0; i < menuButtons.length; i++) {
//     menuButtons[i].classList.remove("activate-button")
//   };
//   mainContainer.classList.add("aboutmepage");
//   contentContainer.classList.add("activate");
//   aboutMeButton.classList.add("selected");
//   iconsContainer.classList.add("activate-icons");
//   myTitle.classList.add("scrollupandremove");
//   myName.classList.add("scrollupandremove");
//   leadText.classList.add("scrollupandremove");
//   menuContainer.classList.add("activate-menu");
//   everythingElseButton.classList.add("activate-button");
//   nextStepButton.classList.add("hidden");
//   screenshotsContainer.classList.add("hidden");
//   screenshotsContainer.innerHTML = "";
//   myText.innerHTML = moreAboutMe;
//   aboutmeButtonContainer.classList.remove("hidden");
//   myText.classList.add("aboutmepage");
//
//   aboutMeButton.addEventListener("click", function() {
//     for (var i = 0; i < aboutmeButtons.length; i++) {
//       aboutmeButtons[i].classList.remove("selected");
//     };
//     aboutMeButton.classList.add("selected");
//     myText.innerHTML = moreAboutMe;
//   });
//
//   socialMedButton.addEventListener("click", function() {
//     for (var i = 0; i < aboutmeButtons.length; i++) {
//       aboutmeButtons[i].classList.remove("selected");
//     };
//     socialMedButton.classList.add("selected");
//     myText.innerHTML = socialMediaStudy;
//   });
//
//   onlineEdButton.addEventListener("click", function() {
//     for (var i = 0; i < aboutmeButtons.length; i++) {
//       aboutmeButtons[i].classList.remove("selected");
//     };
//     onlineEdButton.classList.add("selected");
//     myText.innerHTML = onlineEducation;
//   });
//
//   internetSocButton.addEventListener("click", function() {
//     for (var i = 0; i < aboutmeButtons.length; i++) {
//       aboutmeButtons[i].classList.remove("selected");
//     };
//     internetSocButton.classList.add("selected");
//     myText.innerHTML = internetSociety;
//   });
//
//   blogButton.addEventListener("click", function() {
//     for (var i = 0; i < aboutmeButtons.length; i++) {
//       aboutmeButtons[i].classList.remove("selected");
//     };
//     blogButton.classList.add("selected");
//     myText.innerHTML = blog;
//   })
//   photosButton.addEventListener("click", function() {
//     for (var i = 0; i < aboutmeButtons.length; i++) {
//       aboutmeButtons[i].classList.remove("selected");
//     };
//     photosButton.classList.add("selected");
//     myText.innerHTML = photos;
//   });
//
// });
