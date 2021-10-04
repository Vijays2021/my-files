let players = [
    {
        "name": "Kohli", "sports":"Cricket", "city":"Rcb"
    },
    {
        "name": "Ronaldo", "sports":"Soccer", "city":"Manchester"
    }
]
let getplayers = function(){
   setTimeout(() => {
        players.forEach((players) =>{
        console.log(players.name + "," + players.sports + "," + players.city);
        });
    },1000)
}

getplayers();