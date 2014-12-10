

var bio = {
  "name": "Garrett Bryan",
  "role": "Web Developer",
  "contact": {
    "mobile":"323-459-3964",
    "email":"garrettdavisbryan@gmail.com",
    "github":"https://github.com/garrettbryan",
    "twitter":"@GarrettDBryan",
    "location":"Raleigh"
  },
  "bioPic": "images/garrettrockclimbing300x300.jpg",
  "welcomeMessage": "Hi, nice to meet you.",
  "skills": ["surfing", "snowboarding", "etc"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedPic);
$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {};
work.position = "Stay-At-Home-Dad";
work.employer = "Wife";
work.years = 0.5;
work.city = "Raleigh";

var fPosition =

$("#main").append(work["position"]);


var education = {
  "schools": [
    {
      "name": "UCLA",
      "city": "Los Angeles",
      "major": "Material Science",
      "dates": "Fall 2010 - Spring 2011"
    },
    {
      "name": "Los Angeles City College",
      "city": "Los Angeles",
      "major": "Transfer Student",
      "dates": "omg",
      "courses": ["Differential Equations", "Multivariable Calculus", "Linear Algebra", "Chemistry 102"]
    },
    {
      "name": "Los Angeles Valley College",
      "city": "Valley Glen",
      "major": "Transfer Student",
      "dates": "omg",
      "courses": ["Integral Calculus", "Differential Calculus", "Chemistry 101"]
    }
  ],
  "onlineCourses": [
    {
    "title": "Front-End Developer Nanodegree",
    "school": "Udacity",
    "dates": "December Cohort",
    "url": "https://www.udacity.com/course/nd001"
    }
  ]
};
ed["name"] = "UCLA";
ed["years"] = [2010,2011];
ed["city"] = "Los Angeles";

$("#main").append(ed.name);



$("#topContacts").prepend(formattedMobile);