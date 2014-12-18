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
    $('#header > .row > div').first().addClass('flex-box').append(construction);

    for (var nav in navs.endPoints){
      $('div.nav > ul').append(HTMLnavLink.replace(
        "%path%", navs.endPoints[nav].path).replace(
        "%title%", navs.endPoints[nav].title));
    }
  },
  "endPoints": [
  {
    "title": "resume",
    "path": "index.html"
  },
  {
    "title": "work",
    "path": "under_construction.html"
  },
  {
    "title": "projects",
    "path": "under_construction.html"
  },
  {
    "title": "resume",
    "path": "under_construction.html"
  }
  ]
}


bio.display();
bio.displayFooterContacts();
bio.connect();
navs.display();

