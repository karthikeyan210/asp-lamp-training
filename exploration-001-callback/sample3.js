function setProfile(name, game)  
{
    var profile = name + " is a good " + game + " player.";
}

function getDetails(name, game, callback)  
{
    if (typeof callback === 'function') {
        callback(name, game);
    }
}

getDetails("Siva", "Volley Ball", setProfile);
console.log(profile);