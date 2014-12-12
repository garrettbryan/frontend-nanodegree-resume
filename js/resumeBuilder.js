
var bio = {
  "name": "Garrett Bryan",
  "role": "Web Developer",
  "contacts": {
    "mobile":"323-459-3964",
    "email":"garrettdavisbryan@gmail.com",
    "github":"https://github.com/garrettbryan",
    "twitter":"@GarrettDBryan",
    "location":"Raleigh, NC"
  },
  "bioPic": "images/garrettrockclimbing300x300.jpg",
  "welcomeMessage": "Hi, nice to meet you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "skills": ["surfing", "snowboarding", "etc", "some more things", "another awesome thing"]
};

var education = {
  "schools": [
    {
      "name": "UCLA",
      "location": "Los Angeles, CA",
      "degree": "drop-out",
      "majors": ["Material Science"],
      "dates": "Fall 2010 - Spring 2011",
      "url": "ucla.edu"
    },
    {
      "name": "Los Angeles City College",
      "location": "Los Angeles, CA",
      "degree": "Transfer Student",
      "majors": ["Material Science"],
      "dates": "omg",
      "url": "lacitycollege.edu"
    },
    {
      "name": "Los Angeles Valley College",
      "location": "Valley Glen, CA",
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
      "location": "Valley Glen, CA",
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
      "images": ["images/197x148.gif" ]
    },
    {
      "title": "my life v2",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": ["images/197x148.gif" ,"images/197x148.gif" ,"images/197x148.gif"]
    },
    {
      "title": "Hole Tracer",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "Let's say you want a pipe to intersect another pipe at a precise position,\
      with a certain offset and angle. How does the hole change as it is applied to different \
      surfaces? This web app allows you to print out that trace tape it to the surface so you can\
      cut that precise hole.",
      "images": ["images/197x148.gif" ,"images/197x148.gif" ,"images/197x148.gif" ,"images/197x148.gif"]
    },
    {
      "title": "my life v2",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": ["images/197x148.gif" ,"images/197x148.gif" ,"images/197x148.gif" ,"images/197x148.gif"]
    }
  ]
};




$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
displayContacts();

$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

function displayContacts(){
  for (var method in bio.contacts){
    console.log(bio.contacts[method]);
    $("#topContacts").append(HTMLcontactGeneric.replace("%data%",bio.contacts[method]).replace("%contact%",method));
  }
}


if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(entry) {
    $("#skills").append(HTMLskills.replace("%data%", entry));
  });
}





projects.display = function(){
  for (var project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(
      HTMLprojectTitle.replace("%data%",projects.projects[project].title)+
      HTMLprojectDates.replace("%data%",projects.projects[project].dates)+
      HTMLprojectDescription.replace("%data%",projects.projects[project].description)
      );
    for (var i = 0; i < projects.projects[project].images.length; i++){
      $(".project-entry:last").append(
        HTMLprojectImage.replace("%data%",projects.projects[project].images[i])
      );
    }
  }
}

projects.display();

displayWork();

function displayWork(){
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
}

displayEducation();

function displayEducation(){
  for (school in education.schools){
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(
      HTMLschoolName.replace("%data%", education.schools[school].name)+
      HTMLschoolDegree.replace("%data%", education.schools[school].degree)+
      HTMLschoolDates.replace("%data%", education.schools[school].dates)+
      HTMLschoolLocation.replace("%data%", education.schools[school].location)+
      HTMLschoolMajor.replace("%data%", education.schools[school].majors)
      );
  }
}

function locationizer(work) {
  var workLocations = [];
  for (var job in work.jobs){
    workLocations.push(work.jobs[job].location);
  }
  return workLocations;
}

$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});

$("#mapDiv").append(googleMap);

