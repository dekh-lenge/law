/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { history } from "./utils/history";
 import { connect } from "react-redux";
 import { setActiveData } from "./redux/actions";
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
       // document.getElementById("toggleBtn").addEventListener('click', this.toggle, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
     onDeviceReady: function() {
        console.log('deviceready event');
        //document.getElementById('regId').innerHTML = 'true';
		
		
		 app.push = window.PushNotification.init({
     "android": {
         "senderID": "363046536510"
     },
     "ios": {
       "sound": true,
       "vibration": true,
       "badge": true
     },
     "windows": {}
 });

 app.push.on('registration', function(data) {
  console.log("registration event: " + data.registrationId);  
  var oldRegId = localStorage.getItem('fcmtoken');
    if (oldRegId !== data.registrationId) {
        // Save new registration ID
        localStorage.setItem('fcmtoken', data.registrationId);
        // Post registrationId to your app server as the value has changed
    }
 });

 app.push.on('error', function(e) {
     console.log("push error = " + e.message);
 });
 
  app.push.on('notification', function(data) {
  console.log('notification event',data);
  // if (data.additionalData.url) {
    var datareceived = data.additionalData;
    if(datareceived){
      history.push('/'+datareceived.url)
      this.props.setActiveData(datareceived.activeData)
    }
    // window.location.href = datareceived;
    //alert (page);
    // if(!data.additionalData['content-available']) {
    //   var page = datareceived;
    //   window.location.href = page;
    // } else {
    //   //console.log('called');
    //   if(data.additionalData){
    //   console.log(data.additionalData);
    //   window.localStorage.setItem('newItem', data.additionalData.selectedtab);
    //   localStorage.setItem("newTab", data.additionalData.type);
    //   $(".khata-bubble").hide();
    //   $(".khata-bubble").css("background",data.additionalData.color);
    //   $("#" + data.additionalData.type + " .khata-bubble").show();
    // }
    //   // $('body').find('.khata-bubble').show();
    // }
    
	  //alert(page);
	 // window.location.href = page;
    //app.toggle();
  // } else {
   // var cards = document.getElementById("cards");
    var push = data.title + data.message +  data.additionalData.foreground;
	//alert(push);
	
   //var x  = document.getElementById("results").innerHTML = 'hi';
  // alert(x);

 //alert(page);
   //.innerHTML= page;
  //}
  //alert(x);
  

  app.push.finish(function() {
      console.log('success');
  }, function() {
      console.log('error');
  });
 });
		
    },
 accept: function() {
   alert("Accepted");
 },
 reject: function() {
   alert("Rejection!");
 },
 maybe: function() {
   alert("Maybe, I dunno. I can't tell for sure");
 },
   toggle: function (id) {
	  
	   
	   
      // var cats = document.querySelector("#cats");
// alert (cats);
     // var cards = document.querySelector("#cards");
     // if (cats.style.display === 'none') {
       // cats.style.display = 'block';
       // cards.style.display = 'none';
     // } else {
       // cats.style.display = 'none';
       // cards.style.display = 'block';
     // }
   }
};

		

let App = app.initialize();

const mapDispatchToProps = dispatch => ({
  setActiveData: data => dispatch(setActiveData(data))
});

export default connect(null, mapDispatchToProps)(App);

