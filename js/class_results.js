$(document).ready(function(){

    $("#class").val("");
    $("#section").val("");
    $("#roll_no").val("");
    $("#term").val("");
    $("#search").click(function(){

        var uclass=$("#class").val();
        var section=$("#section").val();
        var roll=$("#roll_no").val();
        var term=$("#term").val();

        if(uclass.length!==0 && section.length!==0 && roll.length!==0 && term.length!==0){

            $.ajax({
                type: "POST",
                url: "./data_layer/view_class_result.php",
                data:{user_term:term , user_class:uclass, user_section:section, user_roll:roll},
                success: function(data){
                    //alert(data);
                    if ($.trim(data) === '0'){
                    alert("Sorry , No result found");
                     }
                    else{
                        $("#result-display").show();
                        if($(".subject-marks").length){
                            $("#res1-marks").remove();
                            $("#result-display").append('<div id="res1-marks"></div>');
                        }
                        $.each(data, function(index, element){
                            var str="";
                            $(".headers").text("Report Card for "+element.name);
                            str+="<div>";
                            str+="<div class='subject-marks'>"+element.subject+"</div>";
                            str+="<div class='subject-marks'>"+element.marks+"</div>";
                            str+="</div>";
                            $("#res1-marks").append(str);
                        });
                    }
                    
                },
                error: function (request, error) {
                    console.log(error); 
                
                }
            });
        }
        else{
            alert("Please check the input !");
        }

    });


});