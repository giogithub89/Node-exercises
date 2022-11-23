const fs = require("node:fs");

fs.writeFile('fileMEssage.txt', 'this is a new message', 'utf-8', function(error){
    if(error){
        console.log(error + 'cannot create file');
        return;
    }
    console.log('file created')
})
