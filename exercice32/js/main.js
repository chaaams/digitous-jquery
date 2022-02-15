$("button").click(function(){
    $.ajax({url: "https://restcountries.com/v3.1/name/france",
    success: function (data, statuts, reponse){
        console.log(data[0].name.common +", "+ data[0].capital)
    }
    })
})