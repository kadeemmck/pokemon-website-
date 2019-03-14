$(document).ready(function () {
    console.log("ready!");





$("#button").click(function(){
   const name = $("#name").val()
    const url = "https://pokeapi.co/api/v2/pokemon/" + name + "/"
 
   $.ajax({

    url: url,
    

    success: function (data) {
        console.log(data.sprites.back_default)
        console.log(data) 
          let pokemon = data.sprites.back_default
    const image = document.createElement("IMG");
    image.setAttribute("class","picture")
    image.src = pokemon
    $("#pokemonPic").html(image)
    },

    error: function (request, error) {


        console.log(error)
        console.log(request)

    }
})

})
});