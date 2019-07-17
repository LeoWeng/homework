window.onload=function(){
    if(confirm("Window string")){
        alert("you click ok");
    }
    else{
        alert("you click cancel");
    }
    if(str=prompt("Window inside string","Default string")){
        alert("your input:"+str);
    }
    else{
        alert("you click cancel");
    }
};