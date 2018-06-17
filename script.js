$(document).ready(function(){
    console.log(sessionStorage.getItem("session_username"));

    $("#admin-username").val("");
    $("#Username").val(""); 
    $("#Password").val("");
    $("#Username").blur(function(){
        var val = $("#Username").val();
        
        sessionStorage.setItem("session_username", val);
        console.log(sessionStorage.getItem("session_username"));
            
        
        
       // alert(val);
       if(val.length === 0)
       { $("#Usernameerr").show();}
       else {
        $("#Usernameerr").hide();  
       }
       
    });

    
    $("#Password").blur(function(){
        var val = $("#Password").val();
       // alert(val);
       if(val.length === 0)
       { $("#Passworderr").show();}
       else {
        $("#Passworderr").hide();  
       }
       
    });

    
    $("#Login").click(function(e){
        e.preventDefault();
        var userid=$("#Username").val();
        var password=$("#Password").val();
        $.ajax({
            type: "POST",
            url: "./data_layer/select_role.php",
            data:{username: userid , pass:password},
            success: function(data){
                //alert(data);
                if ((data.trim() === 'student') || (data.trim() === 'admin') || (data.trim() === 'teacher')){
                    //$("#login-success-popup").show();
                sessionStorage.setItem("session_role", data.trim());
                console.log(sessionStorage.getItem("session_role"));
                window.location.replace("home.html");
                }
                else{
                    $("#Loginerr").show();  
                }
                
            },
            error: function (request, error) {
                console.log(error);
                
            
            }
        });
        //alert("HI");
    }); 

    $("#logout").click(function(){
        //alert('Hi');
        window.location.replace("login.html");
    })
   
/*$("#Menu-div").click(function(){
   // alert('Hi');
    $("#Menu-button").toggleClass("menu-minus");
    $("#Menu-div").animate({height: "180px"}, 2000,"linear");
    $("Menu.li").show();
})*/
$("#Menu-div").hover(function(){
    $("#Menu-button").toggleClass("menu-minus");
});

$("#login-success-popup").click(function(){
    $("#login-success-popup").hide(); 
});

$("#add-stock").click(function(){
    window.location.href="add-stock.html";
});

$("#Brandwise").click(function(){
    $("#Add-products-brand").show();
});

$("#Brandwise").on("click","#add-brand-popup-submit",function(e) {
    e.preventDefault();
     alert('test');  
    //I want to do Ajax stuff   
   });

   var mychart1 = document.getElementById("stu-attendance-chart").getContext("2d");
   var demochart1 =  new Chart(mychart1 , {
       type: 'pie',
       data: {
           labels:['A','B', 'C', 'D'],
           datasets:[{
               label: 'Attendance',
               data: [5,10,15,20],
               backgroundColor:[
                   'rgba(255, 99, 132, 1)',
                   'rgba(54, 162, 235, 1)',
                   'rgba(255, 206, 86, 1)',
                   'rgba(75, 192, 192, 1)',
                               ],
               
                   }]
           },
           options: {
            title: {
                display: true,
                text: 'Student Attendance at a glance',
                fontColor: 'white',
                fontStyle: 'bold',
                fontSize: 12
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'white',
                    fontStyle: 'bold'
                }
           }
        }
                   
   });

   var mychart4 = document.getElementById("teacher-attendance").getContext("2d");
   var demochart4 =  new Chart(mychart4 , {
       type: 'doughnut',
       data: {
       labels:['A','B', 'C', 'D'],
       datasets:[{
           label: 'Attendance',
           data: [5,10,15,20],
           backgroundColor:[
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
                           ]
               }]
       },
       options: {
        title: {
            display: true,
            text: 'Teacher Attendance at a glance',
            fontColor: 'white',
            fontStyle: 'bold',
            fontSize: 12
        },
        legend: {
            display: true,
            labels: {
                fontColor: 'white',
                fontStyle: 'bold'
            }
       }
       }
                   
   });

   var mychart2 = document.getElementById("finance").getContext("2d");
   var demochart2 =  new Chart(mychart2 , {
       type: 'line',
       data: {
           labels:['A','B', 'C', 'D', 'E', 'F','G','H','I', 'J', 'K'],
           datasets:[{
               label: 'Monthly Finance',
               fill: false,
               lineTension: 0, 
               borderColor: 'red',
               data: [10,5,15,3,1,1,2,4,10,2,20],
               backgroundColor:[
                   'rgba(255, 99, 132, 1)'
                   
                            ]
                   }]
           },
        options: {
            title: {
                display: true,
                text: 'Finance at a glance',
                fontColor: 'white',
                fontStyle: 'bold',
                fontSize: 12
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'white',
                    fontStyle: 'bold'
                }
           },
           scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'white',
                    fontStyle: 'bold'
                },
                
            }],
          xAxes: [{
                ticks: {
                    fontColor: 'white',
                    fontStyle: 'bold'
                },
                
            }]
        } 
        }
                   
   });

   var mychart3 = document.getElementById("results-chart").getContext("2d");
   var demochart3 =  new Chart(mychart3 , {
       type: 'bar',
       data: {
       labels:['A','B', 'C', 'D','E','B', 'C', 'D','A','B', 'C', 'D','A','B', 'C', 'D'],
       datasets:[{
           label: 'Results',
           data: [5,10,15,20,5,10,15,20,5,10,15,20,5,10,15,20,5,10,15,20],
           backgroundColor:[
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
                            ]
                   }]
           },
       options: {
        title: {
            display: true,
            text: 'Results at a glance',
            fontColor: 'white',
            fontStyle: 'bold',
            fontSize: 12
        },
        legend: {
            display: true,
            labels: {
                fontColor: 'white',
                fontStyle: 'bold'
            }
       },
       scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true,
                fontColor: 'white',
                fontStyle: 'bold'
            },
            
        }],
      xAxes: [{
            ticks: {
                fontColor: 'white',
                fontStyle: 'bold'
            },
            
        }]
    } 
       }
                   
   });

   /* $("#admin").click(function(){
    $("#admin-cred").show();   
    $("#admin-cred").animate({
         top: "140px",
      },500);
    $("#fict-body").addClass("blur-background");    

    $("#admin-cred button:first").click(function(){
       
        username_val = $("#admin-username").val();
        password_val = $("#admin-password").val();

        //alert(username_val);
    
        $.ajax({
            type: "POST",
            url: "./data_layer/admin_nav.php",
            data:{admin_name: username_val , admin_password:password_val},
            success: function(data){
                //alert(data);
                if (data.trim() === 'admin'){
                    //$("#login-success-popup").show();
                window.location.href="admin.html";
                }
                else{
                    alert("Only admin allowed!!");
                }
                
            },
            error: function (request, error) {
                console.log(error);
                
            
            }
        });
    });


}); */

// $("#close_admin_cred").click(function(){
//     $("#admin-cred").hide();
//     $("#fict-body").removeClass("blur-background");
         
// });

$("#admin").click(function(){
    var val = sessionStorage.getItem("session_role");
    if(val === "admin"){
        window.location.href="admin.html";    
    }
    else{
        alert("Only admin allowed!!");
    }
});

$("#main-content div:nth-child(3)").click(function(){
    var val = sessionStorage.getItem("session_role");
    if(val === "teacher"){
        window.location.href="teacher.html";    
    }
    else{
        alert("Only teacher allowed!!");
    }
});

$("#Menu-div").click(function(){
    //$(this).css("height","180px");
    if($(this).height() != 180)
    {
    $(this).animate({
        height:'180px'
    });
    $("#Menu li").css("display","block");
    $("#Menu-button").addClass("menu-minus");
    }
    else{
        $(this).animate({
            height:'50px'
        });  
        $("#Menu li").css("display","none");
    }
    
});





});


