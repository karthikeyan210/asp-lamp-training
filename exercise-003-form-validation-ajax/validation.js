/**
 * To validate each field
 *
 * @param object inputValue
 * 
 * @return void
 */
function validate(inputValue)
{
    console.log(inputValue);
    var dataRequired = inputValue.getAttribute("data-required");
    var fieldType = inputValue.getAttribute("field-type");
    var param = "dataRequired="+dataRequired+"&fieldType="+fieldType+"&inputValue="+inputValue.value;            
    console.log(param);
    var httpRequest;
    if (window.XMLHttpRequest) { 
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(inputValue.nextElementSibling);
            inputValue.nextElementSibling.innerHTML = this.responseText;
            console.log(this.responseText);
        }
    }
    httpRequest.open("POST",'validate.php');
    httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpRequest.send(param);
}