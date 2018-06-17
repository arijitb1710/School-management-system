$(document).ready(function(e){

    var session_username=sessionStorage.getItem("session_username");

    if(session_username===null)
    {
        window.location.replace("login.html");
    }

});

