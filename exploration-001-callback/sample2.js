var userData = {
    id: 3787,
    fullName: "Not Set",
    setFullName: function(firstName, lastName)  
    {
      this.fullName = firstName + " " + lastName;
    }
}

function setName(firstName, lastName, callback, obj)  
{
    if (typeof callback == 'function') {
        callback.call(obj, firstName, lastName);
    }
}

setName("Barack", "Obama", userData.setFullName, userData);
console.log(userData.fullName);
