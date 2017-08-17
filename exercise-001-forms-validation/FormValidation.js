function addMoreFields(id, spanId)
{
    var remove = document.getElementById(spanId);
    var previousElement = document.getElementById(id).previousElementSibling;
    var previousElementClone = previousElement.cloneNode(true);
    var lastElement = document.getElementById(id);
    var containerLength = lastElement.children.length;
    lastElement.appendChild(previousElementClone);
    if (containerLength == 0) {
        var removeButton = document.createElement('input');
        removeButton.setAttribute("type","button");
        removeButton.setAttribute("value","-");
        removeButton.onclick = function() { removeFields(id, spanId); };
        remove.appendChild(removeButton);
    }
}
//To remove the fields which added unnecessarily
function removeFields(id, spanId)
{
    var remove = document.getElementById(spanId);
    var container = document.getElementById(id);
    var containerLength = container.childNodes.length;
    var lastElement = container.childNodes[containerLength-1];
    container.removeChild(lastElement);
    containerLength = container.childNodes.length;
    if (containerLength == 0) {
        remove.removeChild(remove.children[0]);
    }
}

//To check the required fields are filled
function validation()
{
    var isValid = true;
    var inputs = document.forms["myForm"].getElementsByTagName("input");
    var error = document.getElementsByClassName("error");
    var index = 0;
    for (var i = 0; i < inputs.length; i++) {
        var dataRequired = inputs[i].getAttribute("data-required");
        if (dataRequired) {
            if (inputs[i].value == "") {
                error[index].innerHTML = "Must fill this field";
                isValid = false;
            } else {
                error[index].innerHTML = "";
            }
            index++;
        }
    }
    if (isValid == true) {
        return validateInput();
    }
    return isValid;
}
//For validate all the inputs
function validateInput()
{
    isValid = true;
    var fullName = document.getElementById("full-name").value;
    var email = document.getElementById("email-id").value;
    var dob = document.getElementById("dob").value;
    var genderLength = document.myForm.gender.length;
    var countGender = 0;
    var quaEducation = document.getElementsByClassName("education");
    var quaCourse = document.getElementsByClassName("course");
    var quaYear = document.getElementsByClassName("year");
    var educationError = document.getElementsByClassName("education-error");
    var courseError = document.getElementsByClassName("course-error");
    var yearError = document.getElementsByClassName("year-error");
    var experienceFrom = document.getElementsByClassName("from");
    var experienceTo = document.getElementsByClassName("to");
    var experienceOrg = document.getElementsByClassName("organization");
    var fromError = document.getElementsByClassName("from-error");
    var toError = document.getElementsByClassName("to-error");
    var orgError = document.getElementsByClassName("organization-error");
    var skill = document.getElementsByClassName("skill");
    var skillError = document.getElementsByClassName("skill-error");
    var nameRegExp = /^([a-zA-Z]+)([ \.-][a-zA-Z]+)?$/;
    var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var dobRegExp = /^[\d]{2}[/][\d]{2}[/][\d]{4}$/;
    var yearRegExp = /^([\d]{4})$/;
    if (!nameRegExp.test(fullName)) {
        document.getElementById("full-name-error").innerHTML = 
        "Enter a valid Name";
        isValid = false;
    }
    if (!emailRegExp.test(email)) {
        document.getElementById("email-id-error").innerHTML = 
        "Enter a valid Email";
        isValid = false;
    }
    for (var i = 0; i < genderLength; i++) {
        if (document.myForm.gender[i].checked == true) {
            countGender++;
        }
    }
    if (countGender == 0) {
        document.getElementById("gender-error").innerHTML = 
        "Select Gender";
        isValid = false;
    } else {
        document.getElementById("gender-error").innerHTML = 
        "";
    }
    if (!dobRegExp.test(dob)) {
        document.getElementById("dob-error").innerHTML = 
        "Enter valid Date";
        isValid = false;
    }
    var dob = dob.split("/");
    var birthDay = parseInt(dob[0]);
    var birthMonth = parseInt(dob[1]);
    var birthYear = parseInt(dob[2]);
    if (birthMonth == 0 || birthMonth >12 || birthDay == 0 || birthDay > 31
        || birthYear < 1970) {          
        document.getElementById("dob-error").innerHTML = 
        "Enter valid Date";
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
        document.getElementById("dob-error").innerHTML = 
        "Enter valid Date of Birth";
        isValid = false;
    }
    for (var i = 0; i < quaEducation.length; i++) {
        if (!nameRegExp.test(quaEducation[i].value)) {
            educationError[i].innerHTML = 
            "Enter a valid Education";
            isValid = false;
        }
        if (!nameRegExp.test(quaCourse[i].value)) {
            courseError[i].innerHTML = 
            "Enter a valid Course";
            isValid = false;
        }
        if (!yearRegExp.test(quaYear[i].value)) {
            yearError[i].innerHTML = 
            "Enter a valid Year";
            isValid = false;
        } else {
            year = parseInt(quaYear[i].value);
            if (year < 1970 || year > date.getFullYear()) {
                yearError[i].innerHTML = "Enter a valid Year";
                isValid = false;
            }
        }
    }

    for (var i = 0; i < experienceFrom.length; i++) {
        if (!yearRegExp.test(experienceFrom[i].value)) {
            fromError[i].innerHTML = "Enter a valid Year";
            isValid = false;
        } else {
            year = parseInt(experienceFrom[i].value);
            if (year < 1970 || year > date.getFullYear()) {
                fromError[i].innerHTML = "Enter a valid Year";
                isValid = false;
            }
        }
        if (!yearRegExp.test(experienceTo[i].value)) {
            toError[i].innerHTML = "Enter a valid Year";
            isValid = false;
        } else {
            year = parseInt(experienceTo[i].value);
            if (year < 1970 || year > date.getFullYear()) {
                toError[i].innerHTML = "Enter a valid Year";
                isValid = false;
            }
        }
        if (!nameRegExp.test(experienceOrg[i].value)) {
            orgError[i].innerHTML = 
            "Enter a valid Organization";
            isValid = false;
        }
    }
    for (var i = 0; i < skill.length; i++) {
        if (!nameRegExp.test(skill[i].value)) {
            skillError[i].innerHTML = "Enter a valid Skill";
            isValid = false;
        }
    }
    return isValid;
}
