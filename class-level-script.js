$(document).ready(function(){

    //Session Handling , if username is equal to null , redirects to login page
    var s_username=sessionStorage.getItem("session_username");
    console.log("s_username:"+s_username);
    if(s_username === null)
    {
        //alert("Empty username");
        window.location.replace("login.html");
    }

    var periods = ["Day","P1", "P2", "P3", "Break", "P4", "P5","P6"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var period="";
    var day="";
    var value="";
    var flag="";
    var value_array = [];
    var day_array = [];
    var period_array = [];
    var c = 0;

        $("#class").val("");
        $("#section").val("");
    
        

        $("#search").click(function(e){
            $("#timetable").show();
            $("#save").show();
        });

        $.getJSON("reg.php", function(data){
            var reg_data="";
            $.each(data, function(key,value){
                reg_data += "<tr>";
                reg_data += "<td>"+value.Day+"</td>";
                reg_data += "<td>"+value.P1+"</td>";
                reg_data += "<td>"+value.P2+"</td>";
                reg_data += "<td>"+value.P3+"</td>";
                reg_data += "<td>"+value.Break+"</td>";
                reg_data += "<td>"+value.P4+"</td>";
                reg_data += "<td>"+value.P5+"</td>";
                reg_data += "<td>"+value.P6+"</td>";
                reg_data += "</tr>";
    
            });
            $("#timetable").append(reg_data);
        });

        $("#timetable").on("dblclick", "td", function() {
            $(this).css({'background-color':'lightblue'});
            $(this).attr('contenteditable','true');
            var row = $(this).closest("tr").index();
            var col = $(this).closest("td").index();
            $(this).on('input', function () {
                
             });
             
             period=periods[col];
             //period_array.push(period);
             day=days[row-1]
             //day_array.push(day);
             //flag= $(this).attr('contenteditable');

              $(this).on('blur', function () {
                $(this).css({'background-color':'lightgrey'});
                $(this).attr('contenteditable','false');
                value = $(this).text();
                // alert("Period:"+period);
                // alert("Day:"+day);
                // alert("New value:"+value);
                $.ajax({
                    type: "POST",
                    url: "class1.php",
                    data:{rowname: day , colname:period, cell:value},
                    success: function(data){
                        if (data.trim() === 'success'){
                            console.log('Update successful'); 
                            //$("#save p").show();        
                        }
                        else{
                            console.log('Update error');
                        }                        
                    },
                    error: function (request, error) {
                        console.log(error);
                        
                    
                    }
                });

                                
              });
            //alert("Row"+row);
            //alert("Col"+col);
            

           // alert('Flag:'+flag);
            //alert('Day:'+day);
            //alert('Value:'+value);
           
          });

          $("#save-timetable").click(function(e){
            //e.preventDefault();              
            $("#save p").show(); 
          });

    })