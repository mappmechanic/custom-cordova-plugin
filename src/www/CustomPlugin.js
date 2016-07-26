var exec = require('cordova/exec');

function CustomPlugin() {
 console.log("CustomPlugin.js: is created");
}

CustomPlugin.prototype.showToast = function(aString){
 console.log("CustomPlugin.js: showToast");

 exec(function(result){
     /*alert("OK" + reply);*/
   },
  function(result){
    /*alert("Error" + reply);*/
},"CustomPlugin",aString,[]);
}

 var customPlugin = new CustomPlugin();
 module.exports = customPlugin;
