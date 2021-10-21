let path = require('path');
let fs = require('fs');
let readline = require('readline');


function displayer(p){
    let content = fs.readFileSync(p,"utf8");
    console.log(content);
    console.log("~~~~~~~~~~~~~~~End of file "+path.basename(p)+"~~~~~~~~~~~~~~~");
}
function s(p){
    let content = fs.readFileSync(p,"utf8");
    let contentArray = content.split("\n");

    // console.log(contentArray);
    for(let i = 0;i<contentArray.length;i++){
        if(contentArray[i] != "\r") console.log(contentArray[i]);
    }
    console.log("~~~~~~~~~~~~~~~End of file "+path.basename(p)+"~~~~~~~~~~~~~~~");
}
module.exports = {
    displayer : displayer,
    s: s
}