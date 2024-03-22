function affichage(){
    var name = document.getElementById("name").value ;
    if(name == "" || !alphabet(name)){
        alert("enter your name")
        return false
    }

    var prename = document.getElementById("prename").value ;
    if(prename == "" || !alphabet(prename)){
        alert("enter your prename")
        return false
    }

    var java = document.getElementById("js").checked ;
    var css = document.getElementById("css").checked ;
    var html = document.getElementById("html").checked ;
    if(!java && !css && !html){
        alert("select the quiz type")
        return false
    }

    var selected = document.getElementById("robot").checked ;
    if(!selected){
        alert("select that you are not a robot")
        return false
    }

    if(java){
        window.location.href = "file:///C:/Users/yassi/OneDrive/Documents/projects/quiz/java_quiz_page/java_quiz.html";
    }
    else if(css){
        window.location.href = "file:///C:/Users/yassi/OneDrive/Documents/projects/quiz/css_quiz_page/css_quiz.html"
    }
    else{
        window.location.href = "file:///C:/Users/yassi/OneDrive/Documents/projects/quiz/html_quiz_page/html_quiz.html"
    }
}

function alphabet(ch){
    var ch = ch.toUpperCase() ;
    var ok = true ;
    var i = 0 ;
    while(ok && i < ch.length){
        if((ch[i] < "A" || ch[i] > "Z" ) && ch[i] != " "){
            ok = false
        }
        i++
    }
    return ok
}