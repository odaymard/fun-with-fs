var fs = require ('fs');
var getfolder = function (path) {
  fs.readdir(path,function(err,files) {
    if (!err){
      fs.stat( path ,function(err,stats ) {
        if (!err) { 
          if (stats.isDirectory()) {
            console.log(path + ' contains ' + files);      
            files.forEach(function(file){ 
              fs.stat( path + '\\' + file ,function(err,stats ) {
                if (!err) {
                  if (stats.isDirectory()) {
                    getfolder( fs.realpathSync(path) + '\\' + file );
                  }else {
                    return;
                  }
               }else { 
                  console.log('eror ' + err);
                  process.exit;
               }  
              }) 
	          })
          } else {
              return;
          }
        }else {
           console.log('err ' + err);
           process.exit;    
        }      
      });
    }else { 
       console.log('err ' + err);
       process.exit; 
    }
   
  });
}

getfolder( fs.realpathSync('./'));
