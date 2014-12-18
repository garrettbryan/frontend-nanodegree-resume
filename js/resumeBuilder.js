var bio = {
  "addSkills": function() {
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(entry) {
        $("#skills").append(HTMLskills.replace("%data%", entry));
      });
    }
  },
  "displayContacts": function() {
    for (var method in bio.contacts) {
      console.log(bio.contacts[method]);
      $("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts[method]).replace("%contact%", method));
    }
  },
  "display": function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
    bio.displayContacts();
    bio.addSkills();
  },
  "displayFooterContacts": function(){
    for (var method in bio.contacts) {
      console.log(bio.contacts[method]);
      $("#footerContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts[method]).replace("%contact%", method));
    }
  },
  "connect": function(){
    var connection = $("#letsConnect > h2").html();
    $("#letsConnect > h2").html('<a href="mailto:' + bio.contacts.email + '">' + connection + '</a>');
  },
  "name": "Garrett Bryan",
  "role": "Web Developer and Entrepreneur",
  "contacts": {
    "mobile": "323-459-3964",
    "email": "garrettdavisbryan@gmail.com",
    "github": "https://github.com/garrettbryan",
    "twitter": "@GarrettDBryan",
    "location": "Raleigh, NC"
  },
  "bioPic": "images/garrettrockclimbing300x300.jpg",
  "welcomeMessage": "Hi, Thanks for coming to my site. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "skills": ["JavaScript", "jQuery", "CSS", "HTML", "MongoDB", "Git and Github", "Perl", "AJAX", "TDD"]
};

var navs = {
  "display": function() {
    $('#header > hr').after(row);
    $('#header > .row').append(col6 + col6);
    $('#header > .row > div').last().append(HTMLnav);
    for (var nav in navs.endPoints){
      $('div.nav > ul').append(HTMLnavLink.replace(
        "%path%", navs.endPoints[nav].path).replace(
        "%title%", navs.endPoints[nav].title));
    }
  },
  "endPoints": [
  {
    "title": "blog",
    "path": "index.html"
  },
  {
    "title": "work",
    "path": "work.html"
  },
  {
    "title": "projects",
    "path": "projects.html"
  },
  {
    "title": "resume",
    "path": "resume.html"
  }
  ]
}

var education = {
  "display": function() {
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(
        HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url) +
        HTMLschoolDegree.replace("%data%", education.schools[school].degree) +
        HTMLschoolDates.replace("%data%", education.schools[school].dates) +
        HTMLschoolLocation.replace("%data%", education.schools[school].location) +
        HTMLschoolMajor.replace("%data%", education.schools[school].majors)
      );
    }
  },
  "schools": [{
    "name": "UCLA",
    "location": "Los Angeles, CA",
    "degree": "drop-out",
    "majors": ["Material Science"],
    "dates": "Fall 2010 - Spring 2011",
    "url": "http://www.ucla.edu"
  }, {
    "name": "Los Angeles City College",
    "location": "Los Angeles, CA",
    "degree": "Transfer Student",
    "majors": ["Material Science"],
    "dates": "omg",
    "url": "http://www.lacitycollege.edu"
  }, {
    "name": "Los Angeles Valley College",
    "location": "Valley Glen, CA",
    "degree": "Transfer Student",
    "majors": ["Material Science", "Cinema"],
    "dates": "omg",
    "url": "http://www.lavc.edu"
  }],
  "onlineCourses": [{
    "title": "Front-End Developer Nanodegree",
    "school": "Udacity",
    "dates": "December Cohort",
    "url": "https://www.udacity.com/course/nd001"
  }]
};

var work = {
  "display": function() {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(
        HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("%url%", work.jobs[job].url) +
        HTMLworkTitle.replace("%data%", work.jobs[job].title) +
        HTMLworkLocation.replace("%data%", work.jobs[job].location) +
        HTMLworkDates.replace("%data%", work.jobs[job].dates) +
        HTMLworkDescription.replace("%data%", work.jobs[job].description)
      );
    }
  },
  "jobs": [{
    "employer": "Fotokem",
    "title": "Digital IO Operator",
    "location": "Burbank, CA",
    "dates": "July 2006 to November 2013",
    "description": "Writing a lot of perl scripts. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "url": "http://www.fotokem.com/"
  }, {
    "employer": "Fotokem",
    "title": "Weekend Film Dailies Scheduler",
    "location": "Burbank, CA",
    "dates": "June 2005 to July 2006",
    "description": "Schedule Film Processing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "url": "http://www.fotokem.com/"
  }, {
    "employer": "Los Angeles Valley College",
    "title": "Math Tutor",
    "location": "Valley Glen, CA",
    "dates": "2007",
    "description": "2+2=4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "url": "http://www.lavc.edu/"
  }]
};

var projects = {
  "display": function() {
    for (var j = 0; j < projects.projects.length; j++) {
      var classes = "";
      if ((j % 2)){
        classes = classes + "even-project ";
      }
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").addClass(classes).append(
        HTMLprojectTitle.replace("%data%", projects.projects[j].title).replace("%url%", project.url) +
        HTMLprojectDates.replace("%data%", projects.projects[j].dates) +
        HTMLprojectDescription.replace("%data%", projects.projects[j].description)
      );
      for (var i = 0; i < projects.projects[j].images.length; i++) {
        if (projects.projects[j].images[i]["path"]) {
          $(".project-entry:last").append(
            HTMLcompleteprojectImage.replace("%data%", projects.projects[j].images[i]["path"]).replace("%title%", projects.projects[j].images[i]["title"]).replace("%alt%", projects.projects[j].images[i]["alt"])
          );
        } else {
          $(".project-entry:last").append(
            HTMLprojectImage.replace("%data%", projects.projects[j].images[i])
          );
        }
      }
    }
  },

  "carousel": function(project, index) {
    var imageCount = project.images.length;
    var indicators = "",
      images = "",
      classes = "";
    if ((index % 2)){
      classes = classes + "even-project ";
    }
    console.log(imageCount);
    for (var i = 0; i < imageCount; i++) {

      if (i === 0) {
        indicators = indicators +
          CarouselIndicators.replace(/%id%/gm, index).replace(/%index%/gm, i).replace(/%active%/gm, 'class="active"') +
          "\n";
        images = images +
          CarouselImage.replace(/%imgPath%/gm, project.images[i].path).replace(/%imgAlt%/gm, project.images[i].alt).replace(/%imgTitle%/gm, project.images[i].title).replace(/%active%/gm, "active") +
          "\n";
      } else {
        indicators = indicators +
          CarouselIndicators.replace(/%id%/gm, index).replace(/%index%/gm, i).replace(/%active%/gm, '') +
          "\n";
        images = images +
          CarouselImage.replace(/%imgPath%/gm, project.images[i].path).replace(/%imgAlt%/gm, project.images[i].alt).replace(/%imgTitle%/gm, project.images[i].title).replace(/%active%/gm, "") +
          "\n";
      }
    }
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(
      HTMLprojectTitle.replace("%data%", project.title).replace("%url%", project.url) +
      HTMLprojectDates.replace("%data%", project.dates)
      //
    );
    $(".project-entry:last .row:first").addClass(classes);
    $(".project-entry:last").append(
      CarouselStart.replace(/%id%/gm, index).replace(/%classes%/gm, classes) +
      indicators +
      CarouselImagesHead +
      images +
      CarouselControls.replace(/%id%/gm, index) +
      CarouselDescription.replace("%data%", HTMLprojectDescription.replace("%data%", project.description))
    );
  },

  "carouselDisplayAll": function(){
    for (var i = 0; i < projects.projects.length; i++){
      projects.carousel(projects.projects[i], i);
    }
  },
  "projects": [
    /*CURRENT PROJECTS*/
    {
      "title": "House Interior Scan Parser",
      "url": "linux_of_power_generation.html",
      "dates": "July 2014 - August 2014",
      "description": "Have you ever had to extract a floorplan from the scan of a house? Paleo irony literally 90's, +1 heirloom roof party wolf Tumblr Williamsburg. Neutra cred 8-bit next level butcher Austin, locavore kogi cold-pressed. Taxidermy Intelligentsia vinyl XOXO jean shorts, Banksy migas McSweeney's readymade ugh craft beer chia hashtag. Direct trade lomo vegan, meh McSweeney's butcher master cleanse Godard meggings. Odd Future shabby chic direct trade, fanny pack mlkshk readymade VHS. Heirloom High Life whatever, Vice art party VHS ugh. Squid letterpress twee Pinterest gluten-free Tumblr.",
      "images": [{
        "path": "images/project_images/3D_model_parsing/3D_model_parsing1.jpg",
        "title": "The algo searches the array for sequential, contiguous, and parallel faces and puts them into a data structure called a blob.",
        "alt": "Highlighted tesselated subset of a house interior scan.",
      }, {
        "path": "images/project_images/3D_model_parsing/3D_model_parsing2.jpg",
        "title": "Subsequent passes then combine the blobs into surfaces.",
        "alt": "Multiple highlighted tesselated subsets.",
      }, {
        "path": "images/project_images/3D_model_parsing/3D_model_parsing3.jpg",
        "title": "Further refinement of the comparison algo.",
        "alt": "More refined highlighted tesslelated subset.",
      }, {
        "path": "images/project_images/3D_model_parsing/3D_model_parsing4.jpg",
        "title": "Success! The floor, ceiling, walls and miscellaneous features can be separated from each other.",
        "alt": "The floor of a house interior scan is highlighted.",
      }, {
        "path": "images/project_images/3D_model_parsing/3D_model_parsing5.jpg",
        "title": "The floor plan is separated from the rest of the structure.",
        "alt": "Highlighted floorplan on a black field.",
      }, ]
    }, {
      "title": "Libpourator",
      "url": "linux_of_power_generation.html",
      "dates": "When I have free time.",
      "description": "I think there is a need for a simple, safe, and economic way to a 3D print into a metal object. Paleo irony literally 90's, +1 heirloom roof party wolf Tumblr Williamsburg. Neutra cred 8-bit next level butcher Austin, locavore kogi cold-pressed. Taxidermy Intelligentsia vinyl XOXO jean shorts, Banksy migas McSweeney's readymade ugh craft beer chia hashtag. Direct trade lomo vegan, meh McSweeney's butcher master cleanse Godard meggings. Odd Future shabby chic direct trade, fanny pack mlkshk readymade VHS. Heirloom High Life whatever, Vice art party VHS ugh. Squid letterpress twee Pinterest gluten-free Tumblr.",
      "images": [{
        "path": "images/project_images/microwave_libpourator/microwave_libpourator_side.png",
        "title": "The Libpourator microwave furnace consists of a refractory monolith, with a susceptor crucible.",
        "alt": "Side view of the libpourator refractory monolith and crucible.",
      }, {
        "path": "images/project_images/microwave_libpourator/microwave_libpourator_side_cross-section.png",
        "title": "The microwave will be placed onto its back, so that the door opens from the top, and the libpourator placed inside.",
        "alt": "Side cross-section of the libpourator inside the microwave.",
      }, {
        "path": "images/project_images/microwave_libpourator/microwave_libpourator_side_cross-section_pouring-position.png",
        "title": "When the melt reaches pour temp the entire microwave is tipped slowly onto it's side, causing the molten metal to fill the the investment mold.",
        "alt": "Side cross-secton of the libpourator and microwave tipped into pour position.",
      }, ]
    }, {
      "title": "Open-Source Optical Pyrometer",
      "url": "linux_of_power_generation.html",
      "dates": "When I have free time.",
      "description": "For the libpourator to be effective, it needs to be controllable. Plaid Helvetica Tumblr cray. Jean shorts forage chillwave swag meditation gluten-free VHS, +1 meggings photo booth gastropub quinoa you probably haven't heard of them cornhole 3 wolf moon. Pickled American Apparel Bushwick tote bag sartorial, wayfarers Neutra Intelligentsia post-ironic. Messenger bag tofu small batch next level Truffaut, 8-bit shabby chic mixtape viral crucifix chambray organic PBR&B. Marfa hoodie ethical twee mumblecore viral bespoke, beard narwhal asymmetrical trust fund selfies. Pop-up tousled fanny pack salvia, gluten-free gastropub raw denim meditation. Yr quinoa seitan literally mlkshk High Life.",
      "images": [{
        "path": "images/project_images/spectrometer/spectrometer1.jpg",
        "title": "Basically a box with an adjustable diffraction grating.",
        "alt": "Open MDF box with lid, inside an adjustable diffraction grating.",
      }, {
        "path": "images/project_images/spectrometer/spectrometer3.jpg",
        "title": "The raw photograph captured by the Raspberry Pi of a compact flourescent lightbulb spectrum.",
        "alt": "Photograph of the diffraction grating and resulting spectrum inside the box.",
      }, {
        "path": "images/project_images/spectrometer/spectrometer4.jpg",
        "title": "Red channel isolated.",
        "alt": "Black and white photo.",
      }, {
        "path": "images/project_images/spectrometer/spectrometer5.jpg",
        "title": "Green channel isolated.",
        "alt": "Black and white photo.",
      }, {
        "path": "images/project_images/spectrometer/spectrometer6.jpg",
        "title": "Blue channel isolated.",
        "alt": "Black and white photo.",
      }, {
        "path": "images/project_images/spectrometer/spectrometer7.jpg",
        "title": "Spectrum of a candle flame",
        "alt": "Photograph of the diffraction grating and resulting spectrum inside the box.",
      }, ]
    }, {
      "title": "Handheld LTD Stirling Engine",
      "url": "linux_of_power_generation.html",
      "dates": "When I have free time.",
      "description": "One of my future castings. Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/handheld_ltd_stirling_engine/handheld_ltd_stirling_engine1.jpg",
        "title": "Top",
        "alt": "CAD drawing",
      }, {
        "path": "images/project_images/handheld_ltd_stirling_engine/handheld_ltd_stirling_engine2.jpg",
        "title": "Side",
        "alt": "CAD drawing",
      }, {
        "path": "images/project_images/handheld_ltd_stirling_engine/handheld_ltd_stirling_engine3.jpg",
        "title": "Front",
        "alt": "CAD drawing",
      }, {
        "path": "images/project_images/handheld_ltd_stirling_engine/handheld_ltd_stirling_engine4.jpg",
        "title": "3/4 view",
        "alt": "CAD drawing",
      }, ]
    },
    /*COMPLETED PROJECTS*/
    {
      "title": "RepRap Mendel",
      "url": "linux_of_power_generation.html",
      "dates": "2009",
      "description": "My own handmade Mendel!!! Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/reprap_mendel/reprap_mendel1.jpg",
        "title": "Mendel nearly complete.",
        "alt": "Front view of the nearly complete Mendel.",
      }, {
        "path": "images/project_images/reprap_mendel/reprap_mendel2.jpg",
        "title": "Heated build platform in place.",
        "alt": "Front view of the nearly complete Mendel and heated build platform.",
      }, {
        "path": "images/project_images/reprap_mendel/reprap_mendel3.jpg",
        "title": "Finished Mendel!",
        "alt": "Complete Mendel with heated build platform installed printing an early print.",
      }, ]
    }, {
      "title": "RepRap Nozzle",
      "url": "linux_of_power_generation.html",
      "dates": "June 2010",
      "description": "The first nozzles I made for my 3D printer would ooze molten plastic from the side if enough pressure was exerted on the filament. So I made two new ones from an updated design. Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/reprap_mendel_nozzle/reprap_mendel_nozzle1.jpg",
        "title": "I shoved that teflon rod in a brass sleave and was able to drill that hole.",
        "alt": "3.2mm hole in a 5mm rod",
      }, {
        "path": "images/project_images/reprap_mendel_nozzle/reprap_mendel_nozzle2.jpg",
        "title": "The teflon tube runs the length of the brass nozzle and the PEEK insulator",
        "alt": "Nozzle showing the placement of the teflon tube inside the PEEK insulator.",
      }, {
        "path": "images/project_images/reprap_mendel_nozzle/reprap_mendel_nozzle3.jpg",
        "title": "Always make a backup.",
        "alt": "Two freshly machined nozzles standing next to each other.",
      }, ]
    }, {
      "title": "Initial RepRap Calibration",
      "url": "linux_of_power_generation.html",
      "dates": "June 2010",
      "description": "Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/reprap_mendel_calibration/reprap_mendel_calibration1.jpg",
        "title": "The very first calibration cubes.",
        "alt": "Sequence of calibration cubes.",
      }, {
        "path": "images/project_images/reprap_mendel_calibration/reprap_mendel_calibration2.jpg",
        "title": "Getting close.",
        "alt": "Close-up of calibration cubes.",
      }, {
        "path": "images/project_images/reprap_mendel_calibration/reprap_mendel_calibration3.jpg",
        "title": "Printing the cube.",
        "alt": "Close-up of the printer extruding the cube.",
      }, {
        "path": "images/project_images/reprap_mendel_calibration/reprap_mendel_calibration4.jpg",
        "title": "The final cube. A little thin on the infill.",
        "alt": "Caliper measuring exactly 20.00mm calibration box.",
      }, ]
    }, {
      "title": "Ceramic Slip Casting",
      "url": "linux_of_power_generation.html",
      "dates": "2008 - ",
      "description": "Interatomic forces are cool. Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/slip_cast/slip_cast1.jpg",
        "title": "Mixing clay, water, sodium silicate, and sodium carbonate. This is deflocking the slip.",
        "alt": "Mixer mixing a text batch of clay slip.",
      }, {
        "path": "images/project_images/slip_cast/slip_cast2.jpg",
        "title": "After mixing and degassing, the slip is poured into the mold. In this case it is a large crucible.",
        "alt": "Plaster of paris crucible mold filled to the top with slip.",
      }, {
        "path": "images/project_images/slip_cast/slip_cast3.jpg",
        "title": "Given enough time, the water in the slip is drawn into the plaster and the clay particles are deposited onto the mold face. Its like a giant filter.",
        "alt": "Crucible is thick enough, poured remaining slip in to container.",
      }, {
        "path": "images/project_images/slip_cast/slip_cast4.jpg",
        "title": "As the clay dries it shrinks, and pulls itself away from the walls of the mold.",
        "alt": "Inside view of mold.",
      }, {
        "path": "images/project_images/slip_cast/slip_cast5.jpg",
        "title": "The clay shrinks quite a bit and makes it very easy to remove.",
        "alt": "Close-up of the ceramic separating from the mold.",
      }, {
        "path": "images/project_images/slip_cast/slip_cast6.jpg",
        "title": "Crucible ready for firing.",
        "alt": "Crucible removed from the mold.",
      }, {
        "path": "images/project_images/slip_cast/slip_cast7.jpg",
        "title": "Small crucible and plinth for small furnace.",
        "alt": "6\" crucible standing on a plinth.",
      }, {
        "path": "images/project_images/slip_cast/slip_cast8.jpg",
        "title": "This piece used a rubber plug embedded into the mold to create the precise hole in the side.",
        "alt": "Bowl shaped ceramic piece with a hole in the side.",
      }, {
        "path": "images/project_images/slip_cast/slip_cast9.jpg",
        "title": "This piece used a piece of lexan on the bottom of the mold to create the open section.",
        "alt": "Three layer wedding cake shaped ceramic piece, open on top and bottom.",
      }, ]
    }, {
      "title": "Hole Tracer",
      "url": "linux_of_power_generation.html",
      "dates": "June 2008 - ",
      "description": "Let's say you want a pipe to intersect another pipe at a precise position, with a certain offset and angle. How does the hole change as it is applied to different surfaces? This web app allows you to print out that trace tape it to the surface so you can cut that precise hole. XOXO lomo Godard, fap taxidermy butcher trust fund tousled Thundercats. Food truck leggings blog, heirloom aesthetic pug iPhone. Single-origin coffee kogi scenester American Apparel umami vinyl viral raw denim meh literally chia, banjo flannel. Tote bag mumblecore mustache four dollar toast. Lomo tousled aesthetic cliche iPhone, fixie letterpress shabby chic 3 wolf moon sustainable. Sriracha listicle art party, tote bag four dollar toast readymade blog PBR&B American Apparel. PBR&B Shoreditch freegan, leggings typewriter pickled cray hashtag wayfarers.",
      "images": [{
          "path": "images/project_images/hole_templates/hole_templates01.jpg",
          "title": "Different traces based on different offsets.",
          "alt": "Three different teardrop traces.",
        }, {
          "path": "images/project_images/hole_templates/hole_templates02.jpg",
          "title": "One trace applied to an empty freon cylinder.",
          "alt": "The perspective shows that the teardrop shape becomes circular when viewed from a specific angle.",
        }, {
          "path": "images/project_images/hole_templates/hole_templates03.jpg",
          "title": "Pipe is placed into furnace body while refractory is rammed.",
          "alt": "Teardrop hole is cut and a pipe of appropriate size is inserted.",
        }, {
          "path": "images/project_images/hole_templates/hole_templates04.jpg",
          "title": "After the refractory has dried the pipe can be removed.",
          "alt": "Close up of furnace with refractory.",
        }, {
          "path": "images/project_images/hole_templates/hole_templates05.jpg",
          "title": "The internal mold is removed.",
          "alt": "The refractory has retained its shape.",
        }, {
          "path": "images/project_images/hole_templates/hole_templates06.jpg",
          "title": "The internal mold included a teardrop hole to insert the pipe.",
          "alt": "Internal mold showing how a pipe would align",
        }, {
          "path": "images/project_images/hole_templates/hole_templates07.jpg",
          "title": "The cylinder was not the best shape to use for this application.",
          "alt": "Close-up of pipe intersecting internal mold.",
        }, {
          "path": "images/project_images/hole_templates/hole_templates09.jpg",
          "title": "Trying to remove a cylinder from the casting is a pain. So I implemented a conical shape.",
          "alt": "Conical shape instead of a cylinder.",
        }, {
          "path": "images/project_images/hole_templates/hole_templates10.jpg",
          "title": "Output.",
          "alt": "The printed output.",
        }, {
          "path": "images/project_images/hole_templates/hole_templates11.jpg",
          "title": "Sanity check #2, the cylinder forms a right angle with the axis of the cone.",
          "alt": "The printed output assembled.",
        },

      ]
    }, {
      "title": "Shrink Test - Aluminium",
      "url": "linux_of_power_generation.html",
      "dates": "July 2009 - ",
      "description": "Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/shrink_test_Al/shrink_test_Al1.jpg",
        "title": "This step pattern is used to determine the shrinkage factor as the molten metal solidifies and returns to room temperature.",
        "alt": "3D printer creating a step block.",
      }, {
        "path": "images/project_images/shrink_test_Al/shrink_test_Al3.jpg",
        "title": "Sand mold created with the step block.",
        "alt": "Step block held above the sand mold.",
      }, {
        "path": "images/project_images/shrink_test_Al/shrink_test_Al4.jpg",
        "title": "Melting the aluminum in the micro furnace.",
        "alt": "Complete sand mold placed next to a small melting furnace.",
      }, {
        "path": "images/project_images/shrink_test_Al/shrink_test_Al5.jpg",
        "title": "The step block casting.",
        "alt": "The cleaned casting with sprue and gate still attached.",
      }, {
        "path": "images/project_images/shrink_test_Al/shrink_test_Al6.jpg",
        "title": "Side view.",
        "alt": "Comparison of the step block and casting.",
      }, {
        "path": "images/project_images/shrink_test_Al/shrink_test_Al7.jpg",
        "title": "Top view.",
        "alt": "Comparison of the step block and casting.",
      }, ]
    }, {
      "title": "Matchplate Pneumatic Vibrator",
      "url": "linux_of_power_generation.html",
      "dates": "July 2009 - ",
      "description": "Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/pneumatic_vibrator/pneumatic_vibrator1.jpg",
        "title": "SketchUp design.",
        "alt": "Screen shot of the SketchUp design.",
      }, {
        "path": "images/project_images/pneumatic_vibrator/pneumatic_vibrator2.jpg",
        "title": "Printing the patterns.",
        "alt": "3D printer printing out a pattern for the casting.",
      }, {
        "path": "images/project_images/pneumatic_vibrator/pneumatic_vibrator4.jpg",
        "title": "Clockwise from top left: Core mold, lid, a part of the core mold, and the main body",
        "alt": "Four 3D printed plastic patterns sitting on a table.",
      }, {
        "path": "images/project_images/pneumatic_vibrator/pneumatic_vibrator5.jpg",
        "title": "Sand molds created.",
        "alt": "Cope and Drag created waiting for the core.",
      }, {
        "path": "images/project_images/pneumatic_vibrator/pneumatic_vibrator6.jpg",
        "title": "Core created and placed into drag (see right side of photo).",
        "alt": "Cope and Drag sitting side by side awaiting next step.",
      }, {
        "path": "images/project_images/pneumatic_vibrator/pneumatic_vibrator7.jpg",
        "title": "The cleaned casting ready for further machining.",
        "alt": "Pattern and casting sitting side by side.",
      }, {
        "path": "images/project_images/pneumatic_vibrator/pneumatic_vibrator8.jpg",
        "title": "Castings machined.",
        "alt": "Casting and its hardware sitting on a table.",
      }, {
        "path": "images/project_images/pneumatic_vibrator/pneumatic_vibrator9.jpg",
        "title": "Only thing left is to mount it to a matchplate.",
        "alt": "Assembled pneumatic vibrator.",
      }, ]
    }, {
      "title": "Casting Flask Hardware",
      "url": "linux_of_power_generation.html",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/flask_hardware/flask_hardware02.jpg",
        "title": "Patterns coming off the 3D printer.",
        "alt": "Two 3D printed patterns on the print bed",
      }, {
        "path": "images/project_images/flask_hardware/flask_hardware04.jpg",
        "title": "Aligning the registration pin.",
        "alt": "Using a flat surface, a cast iron table saw, and parallels to align the registration pin.",
      }, {
        "path": "images/project_images/flask_hardware/flask_hardware05.jpg",
        "title": "Use bondo to set the pin, and finish the pattern.",
        "alt": "Added bondo to the previous set up.",
      }, {
        "path": "images/project_images/flask_hardware/flask_hardware10.jpg",
        "title": "Successful clearance check.",
        "alt": "All patterns loosely assembled to check clearances.",
      }, {
        "path": "images/project_images/flask_hardware/flask_hardware11.jpg",
        "title": "Successful clearance check.",
        "alt": "All patterns loosely assembled to check clearances.",
      }, {
        "path": "images/project_images/flask_hardware/flask_hardware12.jpg",
        "title": 'Sandcasting with a "chill".',
        "alt": "Patterns and chill positioned on the drag, awaiting further processing.",
      }, {
        "path": "images/project_images/flask_hardware/flask_hardware13.jpg",
        "title": "Cooled rough casting.",
        "alt": "Two pin bushing still attached the gates and sprue  .",
      }, ]
    }, {
      "title": "Cope Mount for Pin Bushing V2",
      "url": "linux_of_power_generation.html",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/flask_pin_bushing/flask_pin_bushing1.jpg",
        "title": "Power failure.",
        "alt": "Incomplete 3D print.",
      }, {
        "path": "images/project_images/flask_pin_bushing/flask_pin_bushing2.jpg",
        "title": "wrote a perl script to extract a subsection of gcode.",
        "alt": "remaining section of the 3D print.",
      }, {
        "path": "images/project_images/flask_pin_bushing/flask_pin_bushing4.jpg",
        "title": "Successful clearance check.",
        "alt": "Two sections next to each other.",
      }, ]
    }, {
      "title": "Investment Metal Casting",
      "url": "linux_of_power_generation.html",
      "dates": "June 27, 1980 - sometime in the past",
      "description": "Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/investment_casting/investment_casting01.jpg",
        "title": "Plaster of Paris mold.",
        "alt": "Plaster mold curing.",
      }, {
        "path": "images/project_images/investment_casting/investment_casting04.jpg",
        "title": "Slowly melting out the plastic was not time effective.",
        "alt": "Close-up as before with slight discoloration of the of the plaster.",
      }, {
        "path": "images/project_images/investment_casting/investment_casting05.jpg",
        "title": "New process actually burned out the plastic, using a heating coil.",
        "alt": "Heavily blackened plaster mold.",
      }, {
        "path": "images/project_images/investment_casting/investment_casting07.jpg",
        "title": "I poured this mold in three stages. Note the natural parting lines.",
        "alt": "The blackened plaster mold.",
      }, {
        "path": "images/project_images/investment_casting/investment_casting08.jpg",
        "title": "This allowed me to check the inside of the mold.",
        "alt": "Separated blackened plaster mold.",
      }, {
        "path": "images/project_images/investment_casting/investment_casting09.jpg",
        "title": "New plaster holding it together for the pour.",
        "alt": "Blackened mold encased in new plaster.",
      }, {
        "path": "images/project_images/investment_casting/investment_casting10.jpg",
        "title": "Waiting for sprues.",
        "alt": "Plaster molds in a drag.",
      }, {
        "path": "images/project_images/investment_casting/investment_casting11.jpg",
        "title": "Waiting for the molten metal.",
        "alt": "The styrofoam sprues sticking out of the sand.",
      }, {
        "path": "images/project_images/investment_casting/investment_casting13.jpg",
        "title": "Shakeout.",
        "alt": "Breaking open the plaster molds after they cooled.",
      }, {
        "path": "images/project_images/investment_casting/investment_casting17.jpg",
        "title": "Partial success.",
        "alt": "Close-up of the two successful castings.",
      }, ]
    }, {
      "title": "Etching Aluminum Plate with HCl",
      "url": "linux_of_power_generation.html",
      "dates": "June 27, 1980 - sometime in the future",
      "description": "Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/etching_Al_plate/etching_Al_plate01.jpg",
        "title": "Image to be etched.",
        "alt": "Laser print of the etching.",
      }, {
        "path": "images/project_images/etching_Al_plate/etching_Al_plate05.jpg",
        "title": "Using a hotplate to heat the aluminum to remelt the toner and transfer the image.",
        "alt": "Workspace.",
      }, {
        "path": "images/project_images/etching_Al_plate/etching_Al_plate06.jpg",
        "title": "Use water and gently remove the paper.",
        "alt": "Scraping the paper off the aluminum leaving the deposited toner.",
      }, {
        "path": "images/project_images/etching_Al_plate/etching_Al_plate07.jpg",
        "title": "Build acid containment walls.",
        "alt": "Hot glue plastic walls around the image.",
      }, {
        "path": "images/project_images/etching_Al_plate/etching_Al_plate08.jpg",
        "title": "Pour in a dilute solution of HCl.",
        "alt": "The reaction forms hydrogen gas.",
      }, {
        "path": "images/project_images/etching_Al_plate/etching_Al_plate09.jpg",
        "title": "When etched to proper depth neutralize the acid with a base.",
        "alt": "acid base reaction fizzing.",
      }, {
        "path": "images/project_images/etching_Al_plate/etching_Al_plate10.jpg",
        "title": "Marvel at the coolness.",
        "alt": "Aluminum plate cleaned off, and ready for machining.",
      }, ]
    },
    /*FAILURES*/
    {
      "title": "Some Failures",
      "url": "linux_of_power_generation.html",
      "dates": "June 27, 1980 - sometime in the future",
      "description": "Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/failures/failures2.jpg",
        "title": "Over deflockulated ceramic slip being scraped out of a plaster mold.",
        "alt": "Gooey gelatinous ceramic slip sticking to the inside of a plaster mold."
      }, {
        "path": "images/project_images/failures/failures1.jpg",
        "title": "55 gallons of ceramic slip ruined by over deflockulation.",
        "alt": "Three half meter wide gelatinous blobs of ceramic slip poured onto pinestraw to dry for disposal."
      }, {
        "path": "images/project_images/failures/failures3.jpg",
        "title": "While mixing, an abnormally large amount of air was introduced to the ceramic slip",
        "alt": "Three broken pieces of large a large highly porous greenware tile."
      }, {
        "path": "images/project_images/failures/failures4.jpg",
        "title": "The printer nozzle over heated and carburized some ABS plastic inside the nozzle.",
        "alt": "Smoking 3D printer print head"
      }, {
        "path": "images/project_images/failures/failures5.jpg",
        "title": "An early print that failed due to clogged nozzle.",
        "alt": "Red ABS partial 3D print"
      }, {
        "path": "images/project_images/failures/failures6.jpg",
        "title": "Failed to properly calibrate my PID hot end controller.",
        "alt": "3D printer nozzle clogged with carburized ABS. Red ABS has begun to be extruded from the side."
      }, {
        "path": "images/project_images/failures/failures7.jpg",
        "title": "Melting through 3D printable plastic for easy investment casting.",
        "alt": "Pieces of unmelted plastic laying next to a failed aluminum casting."
      }, {
        "path": "images/project_images/failures/failures8.jpg",
        "title": "I put the core in the cope! It fell out when I mated it to the drag.",
        "alt": "cope with sand, upside down with core  installed."
      }]
    },
    /*CULTURAL FIT*/
    {
      "title": "Adventuring",
      "url": "http://en.wikipedia.org/wiki/Mount_Everest",
      "dates": "June 27, 1980 - sometime in the future",
      "description": "Selfies biodiesel forage blog, seitan DIY heirloom cold-pressed tattooed twee Pitchfork paleo. Chambray scenester iPhone occupy Intelligentsia butcher. Art party lumbersexual cred locavore. Cray tofu sartorial Bushwick actually aesthetic, pug post-ironic keffiyeh scenester gluten-free. Pop-up XOXO letterpress typewriter. Quinoa kogi selfies put a bird on it narwhal organic. Keffiyeh four loko shabby chic forage craft beer seitan beard, viral cornhole taxidermy vegan freegan chambray sartorial.",
      "images": [{
        "path": "images/project_images/adventuring/adventuring01.jpg",
        "title": "Canyoneering Angeles National Forest.",
        "alt": "Garrett and three friends posing at trailhead.",
      }, {
        "path": "images/project_images/adventuring/adventuring02.jpg",
        "title": "250 foot rapel.",
        "alt": "Canyoneer begining his rapel.",
      }, {
        "path": "images/project_images/adventuring/adventuring03.jpg",
        "title": "Waterfall rapel.",
        "alt": "Rapeling through a waterfall with a wetsuit.",
      }, {
        "path": "images/project_images/adventuring/adventuring04.jpg",
        "title": "Ladybug mating season in Lytle Creek.",
        "alt": "Thousands of ladybugs covering the trunk of a tree.",
      }, {
        "path": "images/project_images/adventuring/adventuring05.jpg",
        "title": "Setting up for a rapel.",
        "alt": "Garrett and friends posing at top of a precipice.",
      }, {
        "path": "images/project_images/adventuring/adventuring06.jpg",
        "title": "Rapelling down a 10 foot culvert.",
        "alt": "Inside a 10 foot culvert with a bight light at the end of the tunnel.",
      }, {
        "path": "images/project_images/adventuring/adventuring07.jpg",
        "title": "Waterfall rapels are slippery.",
        "alt": "Canyoneer sliping on a waterfall rapel.",
      }, {
        "path": "images/project_images/adventuring/adventuring08.jpg",
        "title": "Jumping into a deeper than expected pool.",
        "alt": "Garrett with water up to his chest.",
      }, {
        "path": "images/project_images/adventuring/adventuring09.jpg",
        "title": "Half hour from LA.",
        "alt": "Garrett and friends hiking out of the canyon.",
      }, {
        "path": "images/project_images/adventuring/adventuring10.jpg",
        "title": "Awesome views of nature.",
        "alt": "Clouds pouring down the Santa Monica Mountians."
      }, ]
    }, {
      "title": "Lily Pearl Bryan",
      "url": "#",
      "dates": "April 17, 2013 - ",
      "description": "Doing my part to raise our little girl into an intellegent, dynamic, confident, and independent woman. XOXO lomo Godard, fap taxidermy butcher trust fund tousled Thundercats. Food truck leggings blog, heirloom aesthetic pug iPhone. Single-origin coffee kogi scenester American Apparel umami vinyl viral raw denim meh literally chia, banjo flannel. Tote bag mumblecore mustache four dollar toast. Lomo tousled aesthetic cliche iPhone, fixie letterpress shabby chic 3 wolf moon sustainable. Sriracha listicle art party, tote bag four dollar toast readymade blog PBR&B American Apparel. PBR&B Shoreditch freegan, leggings typewriter pickled cray hashtag wayfarers.",
      "images": [{
        "path": "images/project_images/lily/lily01.jpg",
        "title": "My wife and daughter on Lily's first birthday.",
        "alt": "Blowing out a candle on a cupcake.",
      }, {
        "path": "images/project_images/lily/lily03.jpg",
        "title": "Grandma's house.",
        "alt": "Close-up of Lily's adorable face.",
      }, {
        "path": "images/project_images/lily/lily05.jpg",
        "title": "New car.",
        "alt": "Lily in her pink car.",
      }, {
        "path": "images/project_images/lily/lily06.jpg",
        "title": "Sprinklers.",
        "alt": "Lily playing with a sprinkler.",
      }, {
        "path": "images/project_images/lily/lily08.jpg",
        "title": "Squishing through the mud during a summer shower.",
        "alt": "Lily in a bright pink rain suit.",
      }, {
        "path": "images/project_images/lily/lily09.jpg",
        "title": "Masterpiece.",
        "alt": "Lily posing with her apple tree painting.",
      }, {
        "path": "images/project_images/lily/lily13.jpg",
        "title": "Lily got a new pink rose hat.",
        "alt": "Lily waving while wearing her new hat.",
      }, ]
    }
  ]
};

work.display();
education.display();
projects.carouselDisplayAll();
//projects.display();
bio.display();
bio.displayFooterContacts();
bio.connect();
navs.display();


function locationizer(work) {
  var workLocations = [];
  for (var job in work.jobs) {
    workLocations.push(work.jobs[job].location);
  }
  return workLocations;
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$("#mapDiv").append(googleMap);
