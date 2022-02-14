$("input").keyup(function(){
    console.log($("input").val().length)
    if($("input").val().length>5){

        $("input").removeClass("is-invalid").addClass("is-valid")
    
    }
    else{
        $("input").removeClass("is-valid").addClass("is-invalid")
    }
})