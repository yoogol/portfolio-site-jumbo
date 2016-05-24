console.log("loading js");

var websiteButton = document.querySelector(".websites");
var browswerAppsButton = document.querySelector(".browser-apps");
var mobileAppsButton = document.querySelector(".mobile-apps");
var everythingElseButton = document.querySelector(".everything-else");
var iconsContainer = document.querySelector("#icons-container");
var myTitle = document.querySelector(".my-title");
var myName = document.querySelector(".my-name");
var menuContainer = document.querySelector("#menu-container");
var mainContainer = document.querySelector("#main-container");
var activeButton = document.querySelector(".activate-button");
var menuButtons = document.getElementsByClassName('menu-button');
var nextStepButton = document.querySelector(".next-step-button");


// Texts
var myText = document.querySelector("#text-container");
var websitesText = "Personal, wedding, business, you name it! I will be happy to design a simple to use, pretty and mobile-optimized website for your specific needs. For your convenience I can make a Wordpress-based website that will allow you to easily and independently manage your content at any moment."
var browserAppsText = "Need your website to do something more complicated than showing content? Does your website need to save user information, retrieve data from your database or an external API and interact with users? Then you need an app! Here are some examples of browser-base apps that I’ve built."
var mobileAppsText = "Want to go one step further than having your app available in a browser? Here are some examples of native mobile apps I’ve built using React Native technology."
var moreAboutMe = "Technology and communication have always been at the center of my interests and professional life. First time I used the Internet I was hooked and amazed by its unprecedented, groundbreaking power to connect people to information and to each other. I wanted to be part of it. <br/> Before becoming a web developer and entrepreneur, I worked as a senior manager at a social media marketing agency, created and managed a non-profit to promote free online education and studied the effect of the Internet communication on society and it’s political institutions. <br/> You can find more details about all of this and more in this section.<br/>Thanks for visiting and I hope to hear from you soon!"

websiteButton.addEventListener("click", function() {
  for (var i = 0; i < menuButtons.length; i++) {
    menuButtons[i].classList.remove("activate-button")
  };
  iconsContainer.classList.add("activate-icons");
  myTitle.classList.add("scrollupandremove");
  myName.classList.add("scrollupandremove");
  menuContainer.classList.add("activate-menu");
  websiteButton.classList.add("activate-button");
  myText.innerHTML = websitesText;
  nextStepButton.classList.remove("hidden");
  nextStepButton.innerHTML = "Order website"
});

browswerAppsButton.addEventListener("click", function() {
  for (var i = 0; i < menuButtons.length; i++) {
    menuButtons[i].classList.remove("activate-button")
  };
  iconsContainer.classList.add("activate-icons");
  myTitle.classList.add("scrollupandremove");
  myName.classList.add("scrollupandremove");
  menuContainer.classList.add("activate-menu");
  browswerAppsButton.classList.add("activate-button");
  myText.innerHTML = browserAppsText;
  nextStepButton.classList.remove("hidden");
  nextStepButton.innerHTML = "Order browswer app"
});
mobileAppsButton.addEventListener("click", function() {
  for (var i = 0; i < menuButtons.length; i++) {
    menuButtons[i].classList.remove("activate-button")
  };
  iconsContainer.classList.add("activate-icons");
  myTitle.classList.add("scrollupandremove");
  myName.classList.add("scrollupandremove");
  menuContainer.classList.add("activate-menu");
  mobileAppsButton.classList.add("activate-button");
  myText.innerHTML = mobileAppsText;
  nextStepButton.classList.remove("hidden");
  nextStepButton.innerHTML = "Order mobile app"
});

everythingElseButton.addEventListener("click", function() {
  for (var i = 0; i < menuButtons.length; i++) {
    menuButtons[i].classList.remove("activate-button")
  };
  iconsContainer.classList.add("activate-icons");
  myTitle.classList.add("scrollupandremove");
  myName.classList.add("scrollupandremove");
  menuContainer.classList.add("activate-menu");
  everythingElseButton.classList.add("activate-button");
  nextStepButton.classList.add("hidden");
  myText.innerHTML = moreAboutMe;
});
