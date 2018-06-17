$(document).ready(function(){


   $("#search-content input:nth-child(1)").val("");
   $("#search-content input:nth-child(2)").val("");

   $("#search-content button").click(function(e){
        e.preventDefault();
        //$("#search-content").hide();
        var uclass=$("#search-content input:nth-child(1)").val();
        var usection=$("#search-content input:nth-child(2)").val();

        if($('#syllabus tr').length>1) 
        {
            $('#syllabus tbody tr').remove();
            $('#syllabus tbody').append("<tr></tr>");
        } 

        if(uclass.length!=0 && usection.length!=0){
            $.ajax({
                type: "POST",
                url: "./data_layer/search_syllabus_classwise.php",
                data:{r_class: uclass , r_section:usection},
                success: function(data){
                    //alert(data);
                    if ($.trim(data) !== '0'){
                        $.each(data, function(index, element) { 

                            if($('#syllabus tr:last td').length<3){
                                var str1=""
                                str1+="<td>";
                                str1+="<div class='subject'><p class='content-class'>"+element.Subject+"</p></div>";
                                str1+="<div class='syllabus' hidden><p>"+element.Syllabus+"</p></div>";
                                str1+="</td>";
                                $('#syllabus tbody tr:last').append(str1);
                            }
                            else{
                                var str="";
                                str+="<tr>"
                                str+="<td>";
                                str+="<div class='subject'><p class='content-class'>"+element.Subject+"</p></div>";
                                str+="<div class='syllabus' hidden><p>"+element.Syllabus+"</p></div>";
                                str+="</td>";
                                str+="</tr>";
                                $('#syllabus tbody tr:last').after(str);
                            }

                        });
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
            alert("Please fill the details!")
        }

   });

   $("#syllabus").on("click", ".subject", function() {
    // $('.syllabus').slideToggle();
    $(this).next(".syllabus").slideToggle();
    $(this).children(".subject p").toggleClass('active');
   });



});