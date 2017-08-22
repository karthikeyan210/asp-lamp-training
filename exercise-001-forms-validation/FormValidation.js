/**
 * To check the required fields are filled
 *
 * @return boolean
 */
function validation()
{
    var isValid = true;
    var inputs = document.forms["myForm"].getElementsByTagName("input");
    var msg = {error:""};
    var countChecked = 0;
    for (var i = 0; i < inputs.length; i++) {
        var dataRequired = inputs[i].getAttribute("data-required");
        var type = inputs[i].getAttribute("name");
        if (type == "gender") {
            if (inputs[i].checked) {
                countChecked++;
            }
        }
        msg.error = "";
        if (dataRequired) {
            if (inputs[i].value == "") {
                msg.error = "Must fill this field";
                isValid = false;
            }
            var nextElement = inputs[i].nextElementSibling;
            nextElement.innerHTML = msg.error;            
        }
    }

    if (countChecked == 0) {
        document.getElementById("gender-error").innerHTML = 
        "Select Gender";
        isValid = false;
    } else {
        document.getElementById("gender-error").innerHTML = 
        "";
    }
    if (isValid == true) {
        var result = validateInput(inputs, msg);
        if(result === false) {
            isValid = false;
        }
    }
    return isValid;
}
/**
 * To validate all the inputs
 *
 * @param object inputs All the input tags in the form
 * @param object msg    Message for display the errors
 *
 * @return boolean
 */
function validateInput(inputs, msg)
{
    var isValid = true;
    var nameRegExp = /^([a-zA-Z]+)([ \.-][a-zA-Z]+)?$/;
    var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var yearRegExp = /^([\d]{4})$/;
    var date = new Date();
    for (var i = 0; i< inputs.length; i++) {
        msg.error = "";
        var fieldType = inputs[i].getAttribute("field-type");
        if (fieldType == "name") {
            if (!nameRegExp.test(inputs[i].value)) {
                msg.error = "Enter valid data";
                isValid = false;
            }
        }
        if (fieldType == "email") {
            if (!emailRegExp.test(inputs[i].value)) {
                msg.error = "Enter valid email";
                isValid = false;
            }
        }
        if (fieldType == "year") {
            if (!yearRegExp.test(inputs[i].value)) {
                msg.error = "Enter valid year";
                isValid = false;
            } else {
                year = parseInt(inputs[i].value);
                if (year < 1970 || year > date.getFullYear()) {
                    msg.error = "Enter a valid Year";
                    isValid = false;
                }
            }
        }
        if (fieldType == "dob") {
            var result = validateDob(inputs, i, msg);
            if(result === false) {
                isValid = false;
            }
        }
        if (fieldType == null) {
            msg.error = "";
        }
        var nextElement = inputs[i].nextElementSibling;
        nextElement.innerHTML = msg.error;            
    }
    return isValid;
}
/**
 * To validate the date of birth
 *
 * @param object inputs All the input tags in the form
 * @param int    index  Index of the inputs
 * @param object msg    Message for display the errors
 *
 * @return boolean
 */
function validateDob(inputs, index, msg)
{
    var isValid = true;
    var dobRegExp = /^[\d]{2}[/][\d]{2}[/][\d]{4}$/;
    var dob = inputs[index].value;
    if (!dobRegExp.test(dob)) {
        msg.error = "Enter valid Date";
        isValid = false;
    }
    var dob = dob.split("/");
    var birthDay = parseInt(dob[0]);
    var birthMonth = parseInt(dob[1]);
    var birthYear = parseInt(dob[2]);
    if (birthMonth == 0 || birthMonth >12 || birthDay == 0 || birthDay > 31
        || birthYear < 1970) {          
        msg.error = "Enter valid Date";
        isValid = false;
    }
    var date = new Date();
    var age = date.getFullYear() - birthYear;
    var month = (date.getMonth()+1) - birthMonth;
    var day = date.getDate() - birthDay;
    if (month < 0 || (month == 0 && day < 0)) {
        age--;
    }
    if (age < 0) {
        msg.error = "Enter valid Date of Birth";
        isValid = false;
    }
    return isValid;
}
