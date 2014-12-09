

var bio = {
  "name": "Garrett Bryan",
  "role": "Web Developer",
  "contact": "(323) 459-3964",
  "pic": "images/fry.jpg",
  "welcome": "Hi, nice to meet you.",
  "skills": ["surfing", "snowboarding", "etc"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);

$("#header").prepend(formattedPic);
$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);





$("#topContacts").prepend(formattedMobile);