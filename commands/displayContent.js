let path = require('path');
let fs = require('fs');
let readline = require('readline');


function displayer(p){
    let content = fs.readFileSync(p,"utf8");
    console.log(content);
    console.log("~~~~~~~~~~~~~~~End of file "+path.basename(p)+"~~~~~~~~~~~~~~~");
}

module.exports = {
    displayer : displayer
}