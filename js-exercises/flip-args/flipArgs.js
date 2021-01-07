function flipArgs() {
    var flippedArgs=[];
    var len = arguments.length;
    for(var i=0; i<len; i++){
        flippedArgs[i] = arguments[len-1-i];
    }
    return flippedArgs;
  
}