
var bio = {
  "name": "Garrett Bryan",
  "role": "Web Developer and Entrepreneur",
  "contacts": {
    "mobile":"323-459-3964",
    "email":"garrettdavisbryan@gmail.com",
    "github":"https://github.com/garrettbryan",
    "twitter":"@GarrettDBryan",
    "location":"Raleigh, NC"
  },
  "bioPic": "images/garrettrockclimbing300x300.jpg",
  "welcomeMessage": "Hi, nice to meet you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "skills": ["JavaScript", "CSS", "HTML", "MongoDB", "AJAX", "TDD"]
};

var education = {
  "display" : function(){
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
  },
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
  "display" : function(){
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
  },
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
  "display" : function(){
    for (var project in projects.projects){
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(
        HTMLprojectTitle.replace("%data%",projects.projects[project].title)+
        HTMLprojectDates.replace("%data%",projects.projects[project].dates)+
        HTMLprojectDescription.replace("%data%",projects.projects[project].description)
        );
      for (var i = 0; i < projects.projects[project].images.length; i++){
        if (projects.projects[project].images[i]["path"]){
          $(".project-entry:last").append(
            HTMLcompleteprojectImage.replace("%data%",projects.projects[project].images[i]["path"]).
            replace("%title%", projects.projects[project].images[i]["title"]).
            replace("%alt%", projects.projects[project].images[i]["alt"])
          );
        }else{
          $(".project-entry:last").append(
            HTMLprojectImage.replace("%data%",projects.projects[project].images[i])
          );
        }
      }
    }
  },
  "projects": [
/*CURRENT PROJECTS*/
    {
      "title": "3D House Scan Parser",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "Have you ever had to extract a floorplan from the scan of a house? Well I did.",
      "images": [
      "images/project_images/3D_model_parsing/3D_model_parsing1.jpg",
      "images/project_images/3D_model_parsing/3D_model_parsing2.jpg",
      "images/project_images/3D_model_parsing/3D_model_parsing3.jpg",
      "images/project_images/3D_model_parsing/3D_model_parsing4.jpg",
      "images/project_images/3D_model_parsing/3D_model_parsing5.jpg"
      ]
    },
    {
      "title": "Libpourator",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
      "images/project_images/microwave_libpourator/microwave_libpourator_side.png",
      "images/project_images/microwave_libpourator/microwave_libpourator_side_cross-section.png",
      "images/project_images/microwave_libpourator/microwave_libpourator_side_cross-section_pouring-position.png"
      ]
    },
    {
      "title": "Open-Source Optical Pyrometer",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
      "images/project_images/spectrometer/spectrometer1.jpg",
      "images/project_images/spectrometer/spectrometer2.jpg",
      "images/project_images/spectrometer/spectrometer3.jpg",
      "images/project_images/spectrometer/spectrometer4.jpg",
      "images/project_images/spectrometer/spectrometer5.jpg",
      "images/project_images/spectrometer/spectrometer6.jpg",
      "images/project_images/spectrometer/spectrometer7.jpg"
      ]
    },
    {
      "title": "Handheld LTD Stirling Engine",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
        "images/project_images/handheld_ltd_stirling_engine/handheld_ltd_stirling_engine1.jpg",
        "images/project_images/handheld_ltd_stirling_engine/handheld_ltd_stirling_engine2.jpg",
        "images/project_images/handheld_ltd_stirling_engine/handheld_ltd_stirling_engine3.jpg",
        "images/project_images/handheld_ltd_stirling_engine/handheld_ltd_stirling_engine4.jpg"
      ]
    },
/*COMPLETED PROJECTS*/
    {
      "title": "RepRap Mendel",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
        "images/project_images/reprap_mendel/reprap_mendel1.jpg" ,
        "images/project_images/reprap_mendel/reprap_mendel2.jpg" ,
        "images/project_images/reprap_mendel/reprap_mendel3.jpg"
      ]
    },
    {
      "title": "RepRap Nozzle",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
      "images/project_images/reprap_mendel_nozzle/reprap_mendel_nozzle1.jpg",
      "images/project_images/reprap_mendel_nozzle/reprap_mendel_nozzle2.jpg",
      "images/project_images/reprap_mendel_nozzle/reprap_mendel_nozzle3.jpg"
      ]
    },
    {
      "title": "Initial RepRap Calibration",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
      "images/project_images/reprap_mendel_calibration/reprap_mendel_calibration1.jpg",
      "images/project_images/reprap_mendel_calibration/reprap_mendel_calibration2.jpg",
      "images/project_images/reprap_mendel_calibration/reprap_mendel_calibration3.jpg",
      "images/project_images/reprap_mendel_calibration/reprap_mendel_calibration4.jpg"
      ]
    },
    {
      "title": "Ceramic Slip Casting",
      "dates": "June 27, 1980 - sometime in the future",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
        "images/project_images/slip_cast/slip_cast1.jpg",
        "images/project_images/slip_cast/slip_cast2.jpg",
        "images/project_images/slip_cast/slip_cast3.jpg",
        "images/project_images/slip_cast/slip_cast4.jpg",
        "images/project_images/slip_cast/slip_cast5.jpg",
        "images/project_images/slip_cast/slip_cast6.jpg",
        "images/project_images/slip_cast/slip_cast7.jpg",
        "images/project_images/slip_cast/slip_cast8.jpg",
        "images/project_images/slip_cast/slip_cast9.jpg",
      ]
    },
    {
      "title": "Hole Tracer",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "Let's say you want a pipe to intersect another pipe at a precise position,\
      with a certain offset and angle. How does the hole change as it is applied to different \
      surfaces? This web app allows you to print out that trace tape it to the surface so you can\
      cut that precise hole.",
      "images": [
        "images/project_images/hole_templates/hole_templates01.jpg",
        "images/project_images/hole_templates/hole_templates02.jpg",
        "images/project_images/hole_templates/hole_templates03.jpg",
        "images/project_images/hole_templates/hole_templates04.jpg",
        "images/project_images/hole_templates/hole_templates05.jpg",
        "images/project_images/hole_templates/hole_templates06.jpg",
        "images/project_images/hole_templates/hole_templates07.jpg",
        "images/project_images/hole_templates/hole_templates08.jpg",
        "images/project_images/hole_templates/hole_templates09.jpg",
        "images/project_images/hole_templates/hole_templates10.jpg",
        "images/project_images/hole_templates/hole_templates11.jpg"

      ]
    },
    {
      "title": "Shrink Test - Aluminium",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
      "images/project_images/shrink_test_Al/shrink_test_Al1.jpg",
      "images/project_images/shrink_test_Al/shrink_test_Al2.jpg",
      "images/project_images/shrink_test_Al/shrink_test_Al3.jpg",
      "images/project_images/shrink_test_Al/shrink_test_Al4.jpg",
      "images/project_images/shrink_test_Al/shrink_test_Al5.jpg",
      "images/project_images/shrink_test_Al/shrink_test_Al6.jpg",
      "images/project_images/shrink_test_Al/shrink_test_Al7.jpg"
      ]
    },
    {
      "title": "Matchplate Pneumatic Vibrator",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
      "images/project_images/pneumatic_vibrator/pneumatic_vibrator1.jpg",
      "images/project_images/pneumatic_vibrator/pneumatic_vibrator2.jpg",
      "images/project_images/pneumatic_vibrator/pneumatic_vibrator3.jpg",
      "images/project_images/pneumatic_vibrator/pneumatic_vibrator4.jpg",
      "images/project_images/pneumatic_vibrator/pneumatic_vibrator5.jpg",
      "images/project_images/pneumatic_vibrator/pneumatic_vibrator6.jpg",
      "images/project_images/pneumatic_vibrator/pneumatic_vibrator7.jpg",
      "images/project_images/pneumatic_vibrator/pneumatic_vibrator8.jpg",
      "images/project_images/pneumatic_vibrator/pneumatic_vibrator9.jpg"
      ]
    },
    {
      "title": "Casting Flask Hardware",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
        "images/project_images/flask_hardware/flask_hardware01.jpg",
        "images/project_images/flask_hardware/flask_hardware02.jpg",
        "images/project_images/flask_hardware/flask_hardware03.jpg",
        "images/project_images/flask_hardware/flask_hardware04.jpg",
        "images/project_images/flask_hardware/flask_hardware05.jpg",
        "images/project_images/flask_hardware/flask_hardware06.jpg",
        "images/project_images/flask_hardware/flask_hardware07.jpg",
        "images/project_images/flask_hardware/flask_hardware08.jpg",
        "images/project_images/flask_hardware/flask_hardware09.jpg",
        "images/project_images/flask_hardware/flask_hardware10.jpg",
        "images/project_images/flask_hardware/flask_hardware11.jpg",
        "images/project_images/flask_hardware/flask_hardware12.jpg",
        "images/project_images/flask_hardware/flask_hardware13.jpg"
      ]
    },
    {
      "title": "Flask Pin Bushing V2",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
        "images/project_images/flask_pin_bushing/flask_pin_bushing1.jpg",
        "images/project_images/flask_pin_bushing/flask_pin_bushing2.jpg",
        "images/project_images/flask_pin_bushing/flask_pin_bushing3.jpg",
        "images/project_images/flask_pin_bushing/flask_pin_bushing4.jpg"
      ]
    },
    {
      "title": "Investment Metal Casting",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
        "images/project_images/investment_casting/investment_casting01.jpg",
        "images/project_images/investment_casting/investment_casting02.jpg",
        "images/project_images/investment_casting/investment_casting03.jpg",
        "images/project_images/investment_casting/investment_casting04.jpg",
        "images/project_images/investment_casting/investment_casting05.jpg",
        "images/project_images/investment_casting/investment_casting06.jpg",
        "images/project_images/investment_casting/investment_casting07.jpg",
        "images/project_images/investment_casting/investment_casting08.jpg",
        "images/project_images/investment_casting/investment_casting09.jpg",
        "images/project_images/investment_casting/investment_casting10.jpg",
        "images/project_images/investment_casting/investment_casting11.jpg",
        "images/project_images/investment_casting/investment_casting12.jpg",
        "images/project_images/investment_casting/investment_casting13.jpg",
        "images/project_images/investment_casting/investment_casting14.jpg",
        "images/project_images/investment_casting/investment_casting15.jpg",
        "images/project_images/investment_casting/investment_casting16.jpg",
        "images/project_images/investment_casting/investment_casting17.jpg"
      ]
    },
    {
      "title": "Etching Aluminum Plate with HCl",
      "dates": "June 27, 1980 - sometime in the future",
      "description": "A rock and a hardplace, mostly my own doing.",
      "images": [
        "images/project_images/etching_Al_plate/etching_Al_plate01.jpg",
        "images/project_images/etching_Al_plate/etching_Al_plate02.jpg",
        "images/project_images/etching_Al_plate/etching_Al_plate03.jpg",
        "images/project_images/etching_Al_plate/etching_Al_plate04.jpg",
        "images/project_images/etching_Al_plate/etching_Al_plate05.jpg",
        "images/project_images/etching_Al_plate/etching_Al_plate06.jpg",
        "images/project_images/etching_Al_plate/etching_Al_plate07.jpg",
        "images/project_images/etching_Al_plate/etching_Al_plate08.jpg",
        "images/project_images/etching_Al_plate/etching_Al_plate09.jpg",
        "images/project_images/etching_Al_plate/etching_Al_plate10.jpg",
        "images/project_images/etching_Al_plate/etching_Al_plate11.jpg"
      ]
    },
/*FAILURES*/
    {
      "title": "Some Failures",
      "dates": "June 27, 1980 - sometime in the future",
      "description": "A few of my notable failures:",
      "images": [
        {
          "path": "images/project_images/failures/failures2.jpg",
          "title": "Over deflockulated ceramic slip being scraped out of a plaster mold.",
          "alt": "Gooey gelatinous ceramic slip sticking to the inside of a plaster mold."
        },
        {
          "path": "images/project_images/failures/failures1.jpg",
          "title": "55 gallons of ceramic slip ruined by over deflockulation.",
          "alt": "Three half meter wide gelatinous blobs of ceramic slip poured onto pinestraw to dry for disposal."
        },
        {
          "path": "images/project_images/failures/failures3.jpg",
          "title": "While mixing, an abnormally large amount of air was introduced to the ceramic slip",
          "alt": "Three broken pieces of large a large highly porous greenware tile."
        },
        {
          "path": "images/project_images/failures/failures4.jpg",
          "title": "The printer nozzle over heated and carburized some ABS plastic inside the nozzle.",
          "alt": "Smoking 3D printer print head"
        },
        {
          "path": "images/project_images/failures/failures5.jpg",
          "title": "An early print that failed due to clogged nozzle.",
          "alt": "Red ABS partial 3D print"
        },
        {
          "path": "images/project_images/failures/failures6.jpg",
          "title": "Failed to properly calibrate my PID hot end controller.",
          "alt": "3D printer nozzle clogged with carburized ABS. Red ABS has begun to be extruded from the side."
        },
        {
          "path": "images/project_images/failures/failures7.jpg",
          "title": "Melting through 3D printable plastic for easy investment casting.",
          "alt": "Pieces of unmelted plastic laying next to a failed aluminum casting."
        },
        {
          "path": "images/project_images/failures/failures8.jpg",
          "title": "I put the core in the cope! It fell out when I mated it to the drag.",
          "alt": "cope with sand, upside down with core  installed."
        }
      ]
    },
/*CULTURAL FIT*/
    {
      "title": "Adventuring",
      "dates": "June 27, 1980 - sometime in the future",
      "description": "I always loved the outdoors and am always down for a hike that tests my limits.",
      "images": [
        "images/project_images/adventuring/adventuring01.jpg",
        "images/project_images/adventuring/adventuring02.jpg",
        "images/project_images/adventuring/adventuring03.jpg",
        "images/project_images/adventuring/adventuring04.jpg",
        "images/project_images/adventuring/adventuring05.jpg",
        "images/project_images/adventuring/adventuring06.jpg",
        "images/project_images/adventuring/adventuring07.jpg",
        "images/project_images/adventuring/adventuring08.jpg",
        "images/project_images/adventuring/adventuring09.jpg",
        "images/project_images/adventuring/adventuring10.jpg",
        "images/project_images/adventuring/adventuring11.jpg"
        ]
    },
    {
      "title": "Lily Pearl Bryan",
      "dates": "April 17, 2013 - ",
      "description": "Doing my part to raise our little girl into an intellegent, dynamic, confident, and independent woman.",
      "images": [
        "images/project_images/lily/lily01.jpg" ,
        "images/project_images/lily/lily02.jpg" ,
        "images/project_images/lily/lily03.jpg" ,
        "images/project_images/lily/lily04.jpg" ,
        "images/project_images/lily/lily05.jpg" ,
        "images/project_images/lily/lily06.jpg" ,
        "images/project_images/lily/lily07.jpg" ,
        "images/project_images/lily/lily08.jpg" ,
        "images/project_images/lily/lily09.jpg" ,
        "images/project_images/lily/lily10.jpg" ,
        "images/project_images/lily/lily11.jpg" ,
        "images/project_images/lily/lily12.jpg" ,
        "images/project_images/lily/lily13.jpg"
      ]
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


projects.display();
work.display();
education.display();



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

