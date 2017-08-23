function setName(firstName)
{
    var welcome = "Welcome! ";
    function displayName (lastName) 
    {
        return welcome + firstName + " " + lastName;
    }
    return displayName;
}

var name = setName("Michael"); 
console.log(name("Jackson"));