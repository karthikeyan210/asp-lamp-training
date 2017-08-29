/**
 * To confirm all the fields are filled
 *
 * @return boolean
 */
function confirmSubmit()
{
    var count = 0;
    var countData = 0;
    var isValid = true;
    var errMsgs = document.getElementsByClassName("error");
    var inputs = document.getElementsByTagName("input");
    var dataRequired = [];
    for (let input of inputs) {
        if (input.getAttribute("data-required") == "true") {
            dataRequired.push(input);
        }
    }
    console.log(dataRequired);
    for (let data of dataRequired) {
        console.log(data.value);
        if (data.value != "") {
            countData++;
        }
    }
    console.log(countData);
    if (dataRequired.length == countData) {
        isValid = true;
        document.getElementById("submit-error").innerHTML = "";
    } else {
        isValid = false;
        document.getElementById("submit-error").innerHTML = "Fill all the fields";
    }
    if (isValid) {
        console.log(errMsgs.length);
        for (let errMsg of errMsgs) {
            console.log(errMsg.innerHTML);
            if (errMsg.innerHTML == "") {
                count++;
            }
        }
        console.log(count);
        if (errMsgs.length == count) {
            isValid = true;
        } else {
            isValid = false;
        }
    }
    return isValid;
}