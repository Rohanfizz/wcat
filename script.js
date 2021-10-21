#! /usr/bin/env node
let path = require('path');
let displayContent = require('./commands/displayContent');

let input = process.argv.slice(2);

let options = [],paths = [];
for(let i = 0;i<input.length;i++){
    if(input[i][0] == '-') options.push(input[i]);
    else paths.push(input[i]);
}

// console.log(options); console.log(paths);

if(options.length > 0 ){          // input[0] is not a path
    let s = false,n = false,b = false;
    if(options.length > 2 || options[0] == options[1]){
        console.log("Please enter a valid command or type\nwcat help\nfor list of all commands.");
    }else{
        for(let i = 0;i<options.length;i++){
            if(options[i] == '-s') s = true;
            else if(options[i] == '-n') n = true;
            else if(options[i] == '-b') b = true;
        }
        if(n && b){
            console.log("Please enter a valid command or type\nwcat help\nfor list of all commands.");
        }else if((n && s) || (b && s)){
            for(let i in paths){
                let p = paths[i];
                displayContent.s(p,true);
            }
        }else if(n){
            for(let i in paths){
                let p = paths[i];
                displayContent.nb(p,true);
            }
        }else if(b){
            for(let i in paths){
                let p = paths[i];
                displayContent.nb(p,false);
            }
        }else if(s){
            for(let i in paths){
                let p = paths[i];
                displayContent.s(p,false);
            }
        }
    }
    
}else{
    // no commands, we only have file paths
    for(let i in input){
        let p = input[i];
        displayContent.displayer(p);
    }
}