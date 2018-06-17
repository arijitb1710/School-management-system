$(document).ready(function(){

    $("#class").val("");
    $("#section").val("");
    $("#subject").val("");
    $("#new-syllabus input:nth-child(1)").val("");
    $("#new-syl-section").val("");
    $("#new-syl-subject").val("");
    $("#new-syllabus textarea").val("");
    $("#search-marks input:nth-child(1)").val("");
    $("#search-marks input:nth-child(2)").val("");
    $("#search-marks input:nth-child(4)").val("");
    // $("#search-marks input:nth-child(6)").val("");
    $("#search-marks input:nth-child(6)").val("");
    $("#myadd-results input:nth-child(1)").val("");
    $("#myadd-results input:nth-child(2)").val("");
    $("#myadd-results input:nth-child(3)").val("");
   

    var result_name="";
    var result_uclass="";
    var result_section="";
    var result_roll="";
    var term="";
    var subject="";
    var marks="";

    $("#add").click(function(e){
        if($("#existing-syllabus").length == 0)
        {
        $("#new-syllabus").show(); 
        }
        else{
            $("#existing-syllabus").hide();
            $("#new-syllabus").show(); 
        }
    });

    $("#search").click(function(e){
        e.preventDefault();
        var uclass= $("#class").val();
        var section=$("#section").val();
        var subject=$("#subject").val();
        //alert(uclass+section+subject);

        $.ajax({
            type: "POST",
            url: "./data_layer/search_syllabus.php",
            data:{user_class: uclass , user_section:section, user_subject:subject},
            success: function(data){
                if($.trim(data)==="0"){
                    alert("Syllabus does not exist.Add new!");
                    $("#add").show();
                }
                else{
                $.each(data, function(index, element) {
                    alert("Syllabus already exists");
                    if($("#new-syllabus").length == 0)
                    { $("#existing-syllabus").show();
                    if($("#r_subject p").length!=0){
                        $("#r_subject p").remove();
                        $("#r_syllabus p").remove();
                    }
                    $("#r_subject").append("<p class='content-class'>"+element.Subject+"</p>");
                    $("#r_syllabus").append("<p>"+element.Syllabus+"</p>");
                    }
                    else{
                        $("#new-syllabus").hide();
                        $("#existing-syllabus").show();
                        if($("#r_subject p").length!=0){
                            $("#r_subject p").remove();
                            $("#r_syllabus p").remove();
                        }
                        $("#r_subject").append("<p class='content-class'>"+element.Subject+"</p>");
                        $("#r_syllabus").append("<p>"+element.Syllabus+"</p>");
                    }

                }); 
            }            
            },
            error: function (request, error) {
                console.log(error);
                
            
            }
        })

        
    });

    $("#r_subject").click(function(){
        $("#r_syllabus").slideToggle();
        $("#r_subject p").toggleClass("active");
    });

    $("#new-syllabus input:nth-child(1)").blur(function(e){
        if($(this).val().length === 0){
            alert("Please enter a class");
        }
    });
    $("#new-syl-section").blur(function(e){
        if($(this).val().length === 0){
            alert("Please enter a section");
        }
    });
    $("#new-syl-subject").blur(function(e){
        if($(this).val().length === 0){
            alert("Please enter a subject");
        }
    });

    $("#new-syllabus textarea").blur(function(e){
        if($(this).val().length === 0){
            alert("Please enter the Syllabus");
        }
    });

    $("#new-syllabus button").click(function(e){
        e.preventDefault();
        var uclass=$("#new-syllabus input:nth-child(1)").val();
        var usection=$("#new-syl-section").val();
        var usub=$("#new-syl-subject").val();
        var syl=$("#new-syllabus textarea").val();

        if(uclass.length!=0 && usection.length!=0 && usub.length!=0 && syl.length!=0){
            $.ajax({
                type: "POST",
                url: "./data_layer/insert_syllabus.php",
                data:{r_class: uclass , r_section:usection, r_subject:usub, r_syl:syl},
                success: function(data){
                    //alert(data);
                    if ($.trim(data) === 'success'){
                        //$("#login-success-popup").show();
                    alert("Syllabus inserted successfully");
                    $("#new-syllabus").hide();
                    $("#class").val("");
                    $("#section").val("");
                    $("#subject").val("");
                    }
                    else{
                    alert("Syllabus insertion error");
                    }
                    
                },
                error: function (request, error) {
                    console.log(error);
                    
                
                }
            });//ajax ends here
        }
        else{
            alert("Please fill the form contents!");
        }
    });

    $("#results").click(function(){
        $("#add-syllabus").hide();
        $("#new-syllabus").hide();
        $("#existing-syllabus").hide();
        $("#main-marks").show();
        $("#add").hide();
        
    });
    
    $("#syllabus").click(function(){
        $("#add-syllabus").show();
        $("#main-marks").hide();
    });

    $("#search-marks button").click(function(){
        result_name= $("#search-marks input:nth-child(1)").val();
        result_uclass= $("#search-marks input:nth-child(2)").val();
        result_section= $("#search-marks input:nth-child(4)").val();
        // var term= $("#search-marks input:nth-child(6)").val();
        result_roll= $("#search-marks input:nth-child(6)").val();
        //alert(name+uclass+section+term+roll);
        if(result_name.length!=0 && result_uclass.length!=0 && result_section.length!=0 &&  result_roll.length!=0){
            $.ajax({
                type: "POST",
                url: "./data_layer/search_result.php",
                data:{user_name: result_name , user_class:result_uclass, user_section:result_section, user_roll:result_roll},
                success: function(data){
                    //alert(data);
                    if ($.trim(data) === '0'){
                    alert("Result not found.Please add new !");
                    $("#myadd-results").show();
                     }
                    else{
                        
                        $("#myview-results").show();

                        if($(".subject-marks").length){
                            $("#res1-marks").remove();
                            $("#res1").append('<div id="res1-marks"></div>');
                            $("#res2-marks").remove();
                            $("#res2").append('<div id="res2-marks"></div>');
                            $("#res3-marks").remove();
                            $("#res3").append('<div id="res3-marks"></div>');
                        }

                        $.each(data, function(index, element){
                            var str="";
                            str+="<div>";
                            str+="<div class='subject-marks'>"+element.subject+"</div>";
                            str+="<div class='subject-marks'>"+element.marks+"</div>";
                            str+="</div>";

                            // alert(str);
                            //alert(element.term);
                            if($.trim(element.term)==='I'){
                                $("#res1-marks").append(str);
                            }
                            // else{
                            //     $("#res1-marks").text("No data available");
                            // }

                            if($.trim(element.term)==='II'){
                                $("#res2-marks").append(str);
                            }
                            // else{
                            //     $("#res2-marks").text("No data available");
                            // }

                            if($.trim(element.term)==='III'){
                                $("#res3-marks").append(str);
                            }  
                            // else{                       
                            //     $("#res3-marks").text("No data available");
                            // }                
                        });

                        // alert($("#res1-marks").children("div").length);
                        // alert($("#res2-marks").children("div").length);
                        // alert($("#res3-marks").children("div").length);
                        if($("#res1-marks").children("div").length<1){
                            $("#res1-marks").text("No data available");
                        }
                        if($("#res2-marks").children("div").length<1){
                            $("#res2-marks").text("No data available");
                        }
                        if($("#res3-marks").children("div").length<1){
                            $("#res3-marks").text("No data available");
                        }

                        
                    }
                    
                },
                error: function (request, error) {
                    console.log(error);
                    
                
                }
            });
        }
        else{
            alert("Please check input values!");
        }

    });


    $("#myadd-results button").click(function(){

        term=$("#myadd-results input:nth-child(1)").val();
        subject=$("#myadd-results input:nth-child(2)").val();
        marks=$("#myadd-results input:nth-child(3)").val();
        //alert(term+subject+marks); 
        if(term.length!=0 && subject.length!=0 && marks.length!=0){

            $.ajax({
                type: "POST",
                url: "./data_layer/insert_result.php",
                data:{user_name: result_name , user_class:result_uclass, user_section:result_section, user_roll:result_roll, user_term:term, user_subject:subject, user_marks:marks},
                success: function(data){
                    //alert(data);
                    if ($.trim(data) === 'success'){
                    alert("Result added successfully!");
                     }
                    else{
                        
                        alert(data);
                    }
                    
                },
                error: function (request, error) {
                    console.log(error);
                    
                
                }
            });

        }
        else{
            alert("Please check add parameters!");
        }

    });

    $(".add").click(function(){
        $("#myadd-results").show();
    });


    $("#res1").on('dblclick', '.subject-marks', function(){
        //alert($(this).index()+result_uclass+result_section+result_roll);
        //alert($(this).text());
        var prev_subject="";
        var subject="";
        var marks="";
        var term="I";
        if($(this).index()===0)
        {
            prev_subject=$(this).text();
             marks=$(this).next().text();
            //alert("Sub"+prev_subject+"Marks"+marks);
        }
        else if($(this).index()===1){
            marks=$(this).text();
            prev_subject=$(this).prev().text();
            //alert("Sub"+prev_subject+"Marks"+marks);
        }
        $(this).css('background-color','white');
        $(this).attr('contenteditable','true');
        $(this).blur(function(){
            $(this).css('background-color','lightblue'); 
            $(this).attr('contenteditable','false');
            if($(this).index()===0)
            {
                 subject=$(this).text();
                 marks=$(this).next().text();
                //alert("Sub"+subject+"Marks"+marks);
                //alert("prev-subject"+prev_subject);
            }
            else if($(this).index()===1){
                marks=$(this).text();
                subject=$(this).prev().text();
               // alert("Sub"+subject+"Marks"+marks);
                //alert("prev-subject"+prev_subject);
            }

            $.ajax({
                type: "POST",
                url: "./data_layer/update_results.php",
                data:{user_class: result_uclass , user_section:result_section, user_roll:result_roll,user_subject:subject, user_marks:marks, user_term:term, user_prev_subject:prev_subject},
                success: function(data){
                    //alert(data);
                    if (data.trim() === 'success'){
                    alert("Result updated successfuully !");
                     }
                    else{
                        
                        alert(data);
                    }
                    
                },
                error: function (request, error) {
                    console.log(error);
                    
                
                }
            });


        });
    });
    
    $("#res2").on('dblclick', '.subject-marks', function(){
        //alert($(this).index()+result_uclass+result_section+result_roll);
        //alert($(this).text());
        var prev_subject="";
        var subject="";
        var marks="";
        var term="II";
        if($(this).index()===0)
        {
            prev_subject=$(this).text();
             marks=$(this).next().text();
            //alert("Sub"+prev_subject+"Marks"+marks);
        }
        else if($(this).index()===1){
            marks=$(this).text();
            prev_subject=$(this).prev().text();
            //alert("Sub"+prev_subject+"Marks"+marks);
        }
        $(this).css('background-color','white');
        $(this).attr('contenteditable','true');
        $(this).blur(function(){
            $(this).css('background-color','lightblue'); 
            $(this).attr('contenteditable','false');
            if($(this).index()===0)
            {
                 subject=$(this).text();
                 marks=$(this).next().text();
                //alert("Sub"+subject+"Marks"+marks);
                //alert("prev-subject"+prev_subject);
            }
            else if($(this).index()===1){
                marks=$(this).text();
                subject=$(this).prev().text();
               // alert("Sub"+subject+"Marks"+marks);
                //alert("prev-subject"+prev_subject);
            }

            $.ajax({
                type: "POST",
                url: "./data_layer/update_results.php",
                data:{user_class: result_uclass , user_section:result_section, user_roll:result_roll,user_subject:subject, user_marks:marks, user_term:term, user_prev_subject:prev_subject},
                success: function(data){
                    //alert(data);
                    if (data.trim() === 'success'){
                    alert("Result updated successfuully !");
                     }
                    else{
                        
                        alert(data);
                    }
                    
                },
                error: function (request, error) {
                    console.log(error);
                    
                
                }
            });


        });
    });

    $("#res3").on('dblclick', '.subject-marks', function(){
        //alert($(this).index()+result_uclass+result_section+result_roll);
        //alert($(this).text());
        var prev_subject="";
        var subject="";
        var marks="";
        var term="III";
        if($(this).index()===0)
        {
            prev_subject=$(this).text();
             marks=$(this).next().text();
            //alert("Sub"+prev_subject+"Marks"+marks);
        }
        else if($(this).index()===1){
            marks=$(this).text();
            prev_subject=$(this).prev().text();
            //alert("Sub"+prev_subject+"Marks"+marks);
        }
        $(this).css('background-color','white');
        $(this).attr('contenteditable','true');
        $(this).blur(function(){
            $(this).css('background-color','lightblue'); 
            $(this).attr('contenteditable','false');
            if($(this).index()===0)
            {
                 subject=$(this).text();
                 marks=$(this).next().text();
                //alert("Sub"+subject+"Marks"+marks);
                //alert("prev-subject"+prev_subject);
            }
            else if($(this).index()===1){
                marks=$(this).text();
                subject=$(this).prev().text();
               // alert("Sub"+subject+"Marks"+marks);
                //alert("prev-subject"+prev_subject);
            }

            $.ajax({
                type: "POST",
                url: "./data_layer/update_results.php",
                data:{user_class: result_uclass , user_section:result_section, user_roll:result_roll,user_subject:subject, user_marks:marks, user_term:term, user_prev_subject:prev_subject},
                success: function(data){
                    //alert(data);
                    if (data.trim() === 'success'){
                    alert("Result updated successfuully !");
                     }
                    else{
                        
                        alert(data);
                    }
                    
                },
                error: function (request, error) {
                    console.log(error);
                    
                
                }
            });


        });
    });

});