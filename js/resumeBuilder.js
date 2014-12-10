
var bio = {
  "name": "Garrett Bryan",
  "role": "Web Developer",
  "contact": {
    "mobile":"323-459-3964",
    "email":"garrettdavisbryan@gmail.com",
    "github":"https://github.com/garrettbryan",
    "twitter":"@GarrettDBryan",
    "location":"Raleigh, NC"
  },
  "bioPic": "images/garrettrockclimbing300x300.jpg",
  "welcomeMessage": "Hi, nice to meet you.",
  "skills": ["surfing", "snowboarding", "etc"]
};

var education = {
  "schools": [
    {
      "name": "UCLA",
      "location": "Los Angeles",
      "degree": "drop-out",
      "majors": ["Material Science"],
      "dates": "Fall 2010 - Spring 2011",
      "url": "ucla.edu"
    },
    {
      "name": "Los Angeles City College",
      "location": "Los Angeles",
      "degree": "Transfer Student",
      "majors": ["Material Science"],
      "dates": "omg",
      "url": "lacitycollege.edu"
    },
    {
      "name": "Los Angeles Valley College",
      "location": "Valley Glen",
      "degree": "Transfer Student",
      "majors": ["Material Science", "Cinema"],
      "dates": "omg",
      "url": "lavc.edu"
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

var work = {
  "jobs": [
    {
      "employer": "Fotokem",
      "title": "Digital IO Operator",
      "location": "Burbank, CA",
      "dates": "July 2006 to November 2013",
      "description": "Writing a lot of perl scripts. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "employer": "Fotokem",
      "title": "Weekend Film Dailies Scheduler",
      "location": "Burbank, CA",
      "dates": "June 2005 to July 2006",
      "description": "Schedule Film Processing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "employer": "Los Angeles Valley College",
      "title": "Math Tutor",
      "location": "Valley Glen",
      "dates": "2007",
      "description": "2+2=4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "my life",
      "dates": "June 27, 1980 - sometime in the future",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": []
    }
  ]
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

if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(entry) {
    $("#skills").append(HTMLskills.replace("%data%", entry));
  });
}

for (job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  $(".work-entry:last").append(
    HTMLworkEmployer.replace("%data%", work.jobs[job].employer)+
    HTMLworkTitle.replace("%data%", work.jobs[job].title)+
    HTMLworkLocation.replace("%data%", work.jobs[job].location)+
    HTMLworkDates.replace("%data%", work.jobs[job].dates)+
    HTMLworkDescription.replace("%data%", work.jobs[job].description)
    );
}



/*
var work = {};
work.position = "Stay-At-Home-Dad";
work.employer = "Wife";
work.years = 0.5;
work.city = "Raleigh";

var fPosition =

$("#main").append(work["position"]);



ed["name"] = "UCLA";
ed["years"] = [2010,2011];
ed["city"] = "Los Angeles";

$("#main").append(ed.name);



$("#topContacts").prepend(formattedMobile
*/