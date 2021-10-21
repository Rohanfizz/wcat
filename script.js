
let path = require('path');
let displayContent = require('./commands/displayContent');

let input = process.argv.slice(2);


if(input[0] === path.basename(input[0]) ){          // input[0] is not a path
    if(input[1] === path.basename(input[1])){       // input [1] is also not a path
        // two commands, one will obvio be -s, whats the other?

    }else{
        // which command?

    }
}else{
    // no commands, we only have file paths
    for(let i in input){
        let p = input[i];
        displayContent.displayer(p);
    }
}