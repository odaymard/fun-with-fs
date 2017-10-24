const util = require('util')
const fs = require('fs');
const obj = {};
var getInfo = function (path,obj) {
  const files = fs.readdirSync(path);
  files.forEach(function (file){
     const stats= fs.statSync( path + '/' + file);
     if (stats.isFile()) {
       obj[file]=stats.size;  
     }else if (stats.isDirectory()) {   
     obj[file] = {};
     getInfo(fs.realpathSync(path) + '/' + file,obj[file]);
     }  
  })  
}
getInfo((fs.realpathSync('path')),obj);
console.log(util.inspect(obj, false, null)); // using util.inspect to call the full object indeepth
json= JSON.stringify(obj,null,4);
console.log(' json : ' + json);
fs.writeFile('files.json',json);
