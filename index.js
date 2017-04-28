'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/bizbotapi', function(req, res) {
   var speech = "false";
    if(req.body.result != null && req.body.result.parameters != null){
   if(req.body.result.parameters.echoText == "Create New Project"){
       speech = "in Which tool you want to create Project?";
      }else if(req.body.result.parameters.echoText == "Github"){
      speech = "What is the Project Name and  Description?";
      }else if(req.body.result.parameters.echoText == "Name New Description NLP POC"){
      speech = "Ok. I am going to create \"New\" project in Github with description \"NLP POC\"";
      }else if(req.body.result.parameters.echoText == "How many Tasks open in X Project current sprint"){
      speech = "20 Tasks and 5 Bugs are in Open status";
      }else if(req.body.result.parameters.echoText == "Use X project"){
      speech = "ok";
      }else if(req.body.result.parameters.echoText == "Start Build"){
      speech = "What is the Job name that you want to start building?";
      }else if(req.body.result.parameters.echoText == "Ansibe API"){
      speech = "Build Process Completed";
      }else if(req.body.result.parameters.echoText == "Create New Branch in Github and CI/CD pipeline"){
      speech = "Which Project?";
      }else if(req.body.result.parameters.echoText == "X Project"){
      speech = "What should be new branch Name?";
      }else if(req.body.result.parameters.echoText == "beta v0.1"){
      speech = "Is new pipeline for \"beta_v0.1\" Branch?";
      }else if(req.body.result.parameters.echoText == "yes"){
      speech = "Is the pipeline for developer or Autodeployment?";
      }else if(req.body.result.parameters.echoText == "Autodeployment"){
      speech="Creating \"beta_v0.1\" Branch in Github for \"X\" repository";
            	speech=speech+'<br>'+"Creating new CI/CD pipeline job for \"beta_v0.1\" Branch with default Autodeployment schedule";
            	speech=speech+'<br>'+"CI/CD pipeline job (\"beta_v0.1\") created in Jenkins";
      }else if(req.body.result.parameters.echoText == "Create New Task"){
      speech = "in Which project you want to create task?";
      }else if(req.body.result.parameters.echoText == "X"){
      speech = "What is the Task Description?";
      }else if(req.body.result.parameters.echoText == "NLP POC"){
      speech = "Do you want to assign it to specific user?";
      }else if(req.body.result.parameters.echoText == "I am not sure at this point"){
      speech="Ok. I am going to create \"NLP POC\" task under \"X\" project and assign it to default user.";
      speech=speech+'<br>'+"X-1023(\"NLP POC\") is created under \"X\" project.";
      }else if(req.body.result.parameters.echoText == "Assign NLP POC Task to Geetanjali"){
      speech = " is it for \"X\" project?";
      }else if(req.body.result.parameters.echoText == "ya"){
      speech="Ok. I am Assigning \"NLP POC\" task under \"X\" project to \"Geetanjali\".";
      speech=speech+'<br>'+"X-1023(\"NLP POC\") is assigned to \"Geetanjali\".";
      }else{
      speech = "I am not able to Recognize your Voice !";
      }
   }
    // var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'biz-webhook-sample'
    });
});

restService.post('/slack-test', function(req, res) {

    var slack_message = {
        "text": "Details of JIRA board for Browse and Commerce",
        "attachments": [{
            "title": "JIRA Board",
            "title_link": "http://www.google.com",
            "color": "#36a64f",

            "fields": [{
                "title": "Epic Count",
                "value": "50",
                "short": "false"
            }, {
                "title": "Story Count",
                "value": "40",
                "short": "false"
            }],

            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
        }, {
            "title": "Story status count",
            "title_link": "http://www.google.com",
            "color": "#f49e42",

            "fields": [{
                "title": "Not started",
                "value": "50",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }]
        }]
    }
    return res.json({
        speech: "speech",
        displayText: "speech",
        source: 'webhook-echo-sample',
        data: {
            "slack": slack_message
        }
    });
});




restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
