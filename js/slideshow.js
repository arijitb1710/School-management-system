$(document).ready(function(){

    $.getJSON("view_file.php", function(data){
        var id=1;
        var img_data="";
        $.each(data, function(key,value){
            img_data += "<img src='./uploads/"+value+"' class='inactive'>";
            
        });
        $(".image-container").append(img_data);
        $(".image-container img:nth-child(1)").addClass("active");
        $(".image-container img:nth-child(1)").removeClass("inactive");
    });





    $("#next").click(function(e){
        console.log("clicked");
        var currentimage=$(".active");
        var nextimage=currentimage.next();

        if(nextimage.length)
        {currentimage.removeClass("active");
        currentimage.addClass("inactive");
        nextimage.removeClass("inactive");
        nextimage.addClass("active");}
    });

    $("#prev").click(function(e){
        console.log("clicked");
        var currentimage=$(".active");
        var nextimage=currentimage.prev();
        if(nextimage.length)
        {currentimage.removeClass("active");
        currentimage.addClass("inactive");
        nextimage.removeClass("inactive");
        nextimage.addClass("active");
    }
    });

});