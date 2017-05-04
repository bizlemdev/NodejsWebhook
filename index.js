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
    
	 "attachmentLayout":"carousel",
                   "attachments": [
                     {
                      "contentType": "application/vnd.microsoft.card.thumbnail",
                       "content": {
                         "title": "I'm a thumbnail card",
                         "subtitle": "Pig Latin Wikipedia Page",
                         "images": [
                           {
                            "url": "https://www.google.co.in/search?q=skype+image&tbm=isch&imgil=DhJaKjc7Ar5gvM%253A%253BDLLGS44NQ14GqM%253Bhttps%25253A%25252F%25252Fwww.skype.com%25252Fen%25252F&source=iu&pf=m&fir=DhJaKjc7Ar5gvM%253A%252CDLLGS44NQ14GqM%252C_&usg=__5HQRMDPVyQswokCywpXxDAZxyEo%3D&biw=1366&bih=662&ved=0ahUKEwinq7bU5tPTAhVBP48KHU4bCUQQyjcIPw&ei=X9cJWed_wf68BM62pKAE#imgrc=DhJaKjc7Ar5gvM:"
                          }
                        ],
                        "buttons": [
                          {
                            "type": "openUrl",
                           "title": "WikiPedia Page",
                            "value": "https://en.wikipedia.org/wiki/Pig_Latin"
                          }
                        ]
                      }
                    },
					{
                      "contentType": "application/vnd.microsoft.card.thumbnail",
                       "content": {
                         "title": "I'm a thumbnail card",
                         "subtitle": "Pig Latin Wikipedia Page",
                         "images": [
                           {
                            "url": "https://www.google.co.in/search?q=skype+image&tbm=isch&imgil=DhJaKjc7Ar5gvM%253A%253BDLLGS44NQ14GqM%253Bhttps%25253A%25252F%25252Fwww.skype.com%25252Fen%25252F&source=iu&pf=m&fir=DhJaKjc7Ar5gvM%253A%252CDLLGS44NQ14GqM%252C_&usg=__5HQRMDPVyQswokCywpXxDAZxyEo%3D&biw=1366&bih=662&ved=0ahUKEwinq7bU5tPTAhVBP48KHU4bCUQQyjcIPw&ei=X9cJWed_wf68BM62pKAE#imgrc=DhJaKjc7Ar5gvM:"
                          }
                        ],
                        "buttons": [
                          {
                            "type": "openUrl",
                           "title": "WikiPedia Page",
                            "value": "https://en.wikipedia.org/wiki/Pig_Latin"
                          }
                        ]
                      }
                    },
					{
                      "contentType": "application/vnd.microsoft.card.thumbnail",
                       "content": {
                         "title": "I'm a thumbnail card",
                         "subtitle": "Pig Latin Wikipedia Page",
                         "images": [
                           {
                            "url": "https://www.google.co.in/search?q=skype+image&tbm=isch&imgil=DhJaKjc7Ar5gvM%253A%253BDLLGS44NQ14GqM%253Bhttps%25253A%25252F%25252Fwww.skype.com%25252Fen%25252F&source=iu&pf=m&fir=DhJaKjc7Ar5gvM%253A%252CDLLGS44NQ14GqM%252C_&usg=__5HQRMDPVyQswokCywpXxDAZxyEo%3D&biw=1366&bih=662&ved=0ahUKEwinq7bU5tPTAhVBP48KHU4bCUQQyjcIPw&ei=X9cJWed_wf68BM62pKAE#imgrc=DhJaKjc7Ar5gvM:"
                          }
                        ],
                        "buttons": [
                          {
                            "type": "openUrl",
                           "title": "WikiPedia Page",
                            "value": "https://en.wikipedia.org/wiki/Pig_Latin"
                          }
                        ]
                      }
                    }
                  ]
}
   


}}
   
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'biz-webhook-sample',
        data: {
		"skype" :slack_message
           			
        }
    });
});




restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
