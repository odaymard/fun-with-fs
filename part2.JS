const util = require('util')
const fs = require('fs');
const obj = {};
var getInfo = function (path,obj){
  debugger;
  const files = fs.readdirSync(path);
  files.forEach(function (file){
     const stats= fs.statSync( path + '/' + file);
     if (stats.isFile()) {
         debugger;
       obj[file]=stats.size;  
     }else if (stats.isDirectory()) {
     debugger;    
     obj[file]={};
     getInfo(( fs.realpathSync(path) + '/' + file),obj[file]);
     
     }  
     
  })  
}
getInfo(( fs.realpathSync('C:/Users/Miqdad/Desktop/nodejs/funwithfs/filess/files')),obj);
console.log(util.inspect(obj, false, null)); // using util.inspect to call the full object indeepth
 json= JSON.stringify(obj,null,4);
 console.log(' json : ' + json);
 fs.writeFile('files.json',json);