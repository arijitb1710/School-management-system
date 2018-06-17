$(document).ready(function(){
    $("#name").val(""); 
    $("#address").val("");
    $("#email").val(""); 
    $("#userid").val("");
    $("#password").val(""); 
    $("#telephone").val(""); 
    $("#emergency").val(""); 
     var userid_exists=0;

    
    $("#navigate-login").click(function(e){
        window:location.replace("login.html")
    });

    $("#name").blur(function(){
        var val = $("#name").val();
       // alert(val);
       if(val.length === 0)
       { $("#nameerr").show();}
       else {
        $("#nameerr").hide();  
       }
       
    });

    $("#address").blur(function(){
        var val = $("#address").val();
       // alert(val);
       if(val.length === 0)
       { $("#addresserr").show();}
       else {
        $("#addresserr").hide();  
       }
       
    });

    $("#email").blur(function(){
        var val = $("#email").val();
       // alert(val);
       if(val.length === 0)
       { $("#emailerr").show();}
       else {
        $("#emailerr").hide();  
       }
       
    });

    $("#userid").blur(function(){
         var val = $("#userid").val();
    //    // alert(val);
       if(val.length === 0)
       { $("#useriderr").show();}
       else {
        $("#useriderr").hide();  
       }

       if(val.length != 0)
       {
       $.ajax({
        type: "POST",
        url: "./data_layer/check_same_userid.php",
        data:{user_id:val},
        success: function(data){
            alert(data);
            if(data.trim()!="0")
            {
            userid_exists=1;
            }
            // if (data.trim() === 'admin'){
            //     //$("#login-success-popup").show();
            // window.location.href="admin.html";
            // }
            // else{
            //     alert("Only admin allowed!!");
            // }
            
        },
        error: function (request, error) {
            console.log(error);
            
        
        }
    });
    }
       
    });

    $("#password").blur(function(){
        var val = $("#password").val();
       // alert(val);
       if(val.length === 0)
       { $("#passworderr").show();}
       else {
        $("#passworderr").hide();  
       }
       
    });

    $("#telephone").blur(function(){
        var val = $("#telephone").val();
       // alert(val);
       if(val.length === 0)
       { $("#teleerr").show();}
       else {
        $("#teleerr").hide();  
       }
       
    });

    $("#emergency").blur(function(){
        var val = $("#emergency").val();
       // alert(val);
       if(val.length === 0)
       { $("#emergencyerr").show();}
       else {
        $("#emergencyerr").hide();  
       }
       
    });

    

    $("#regsubmit").click( function(e){
        e.preventDefault();
        var name=$("#name").val();
        var address=$("#address").val();
        var email=$("#email").val(); 
        var userid=$("#userid").val();
        var password=$("#password").val();
        var telephone=$("#telephone").val();
        var emergency=$("#emergency").val();
        alert(emergency);
        alert($("#emergency").val().length);
        alert(telephone);
        alert($("#telephone").val().length);
        alert(userid_exists);
        if(($("#name").val().length !== 0) && ($("#address").val().length !== 0) && ($("#email").val().length !== 0) && ($("#userid").val().length !== 0) && ($("#password").val().length !== 0) && userid_exists!=1 && ($("#telephone").val().length !== 0) && ($("#emergency").val().length !== 0)){
          if($("#email").is(':valid')){
            $.ajax({
            type: "POST",
            url: "registration.php",
            data:{uname:name, uaddress:address, uemail: email,username: userid , upassword:password, utelephone:telephone,uemergency:emergency},
            success: function(data){
                //alert(data);
                if (data.trim() === 'success'){
                    //$("#login-success-popup").show();
                $("#formerr").hide();     
                $("#reg-succcess-msg").show();
                $("#navigate-login").show();
                $("#name").val(""); 
                $("#address").val("");
                $("#email").val(""); 
                $("#userid").val("");
                $("#password").val(""); 
                $("#telephone").val(""); 
                $("#emergency").val(""); 
                }
                else{
                    $("#reg-error-msg").show();  
                    alert(data);
                }
                
            },
            error: function (request, error) {
                console.log(error);
                
            
            }
        }); //ajax call ends here
    }
    else{
        $("#invalidemailerr").show();
    }
    }
    else{
        $("#formerr").show();  
        
    }

    })

})