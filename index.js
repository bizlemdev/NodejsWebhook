'use strict';


const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());
var internmen = null;
var endrespo;
var count=0;
var requirment=[];


restService.post('/bizbotapi', function(req, res) {
   var speech = "false";
    if(req.body.result != null && req.body.result.parameters != null){
   if(req.body.result.parameters.echoText == "Create New Project"){
      // speech = "in Which tool you want to create Project?";
	   speech = JSON.stringify(req.body);
      }else if(req.body.result.parameters.echoText == "Github"){
     // speech = "What is the Project Name and  Description?";
	      speech = JSON.stringify(req.body);
      }else if(req.body.result.parameters.echoText == "Name New Description NLP POC"){
    //  speech = "Ok. I am going to create \"New\" project in Github with description \"NLP POC\"";
	      speech = JSON.stringify(req.body);
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
      //speech = "I am not able to Recognize your Voice !";
        speech = JSON.stringify(req.body);
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

var speech = "false";
    if(req.body.result != null && req.body.result.parameters != null){
   if(req.body.result.parameters.echoText == "Create New Project"){
   
var slack_message = {
     "text": "New comic book alert!",
    "attachments": [
        {
            "title": "The Further Adventures of Slackbot",
            "fields": [
                {
                    "title": "Volume",
                    "value": "1",
                    "short": true
                },
                {
                    "title": "Issue",
                    "value": "3",
            "short": true
                }
            ],
            "author_name": "Stanford S. Strickland  <https://www.google.com|google>",
            "author_icon": "http://a.slack-edge.com/7f18https://a.slack-edge.com/bfaba/img/api/homepage_custom_integrations-2x.png",
            "image_url": "http://i.imgur.com/OJkaVOI.jpg?1"
        },
        {
            "title": "Synopsis",
            "text": "After @episod pushed exciting changes to a devious new branch back in Issue 1, Slackbot notifies @don about an unexpected deploy..."
        },
        {
            
            "title": "Would you recommend it to customers?",
            "callback_id": "comic_1234_xyz",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "Recommend",
                    "text": "Recommend",
                    "type": "textbox",
                    "value": "Recommend"
                },
                {
                    "name": "no",
                    "text": "No",
                    "type": "button",
                    "value": "bad"
                }
            ]
        }
]
}          
   


}}
   
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'biz-webhook-sample',
        data: {
		"slack" :slack_message
           			
        }
    });
});

restService.post('/slack-button-test', function(req, res) {

var speech = "false";
    if(req.body.result != null && req.body.result.parameters != null){
   if(req.body.result.parameters.echoText == "give buttons"){
   
var skype_message = {
	 "text": "New comic book alert!",
       "attachments": [
            {
                 "contentType": "image/png",
                 "contentUrl": "https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png",
                 "name":"Bender_Rodriguez.png"
             }
         ]
     }
}else{ 
	speech="not recognized";
}
    } 
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'biz-webhook-sample',
        data: {
		"skype" :skype_message
           			
        }
    });
});


restService.post('/conversation-demo', function(req, res) {
var speech = "false";
   if(req.body.result != null && req.body.result.parameters != null){
   if(internmen==null){
   
     
      if(req.body.result.parameters.echoText == "Create New Project"){ 
	  count=0;
        speech = NLP("Create New Project");
      }
    }else{
		if(req.body.result != null && req.body.result.parameters != null){ 
		requirment[count]=req.body.result.parameters.echoText;
		count++;
		speech = conversation(count);
		}
	
	}
	}
	return res.json({
        speech: speech,
        displayText: speech,
        source: 'biz-webhook-sample'
    });

});


function conversation(no){
var ss = internmen.split("~"); 
if(no<ss.length){
 return ss[no];

}else {
var str="Project created in "+requirment[0]+" Project name is "+requirment[1];
internmen=null;
count=0;
return str;

}
}

function NLP(a){
	var res = "false";
	if(a=="Create New Project"){
	internmen="Tool~ProjectName";
	res = conversation(0);
	}
	return res;
	}








restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
