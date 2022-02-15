$("button").click(function(){
    $.ajax({url:"https://restcountries.com/v3.1/name/france",
    success: function(data, status, response){
        $("#country").text(data[0].name.common)
        $("#capital").html(data[0].capital)
    }    
})
})