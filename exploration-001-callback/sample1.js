var allUserData = [];
var str = "karthik";
function logStuff(userData) 
{
    if ( typeof userData === "string") {
        console.log(userData);
    } else if ( typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
}
function getInput(options, callback) 
{
    allUserData.push (options);
    callback(options);
    callback(str);
}
getInput({name:"Rich", speciality:"JavaScript"}, logStuff);
