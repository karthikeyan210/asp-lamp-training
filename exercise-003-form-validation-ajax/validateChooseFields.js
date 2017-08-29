/**
 * To Validate the radio buttons and check boxes are checked
 *
 * @return void
 */
function validateCheckFields() {
    var choiceFields = document.getElementsByClassName("choice-field");
    var choiceFieldName = [];
    var checked = false;
    for (let choiceField of choiceFields) {
        console.log(choiceField);
        console.log(choiceField.getAttribute("name"));
        choiceFieldName.push(choiceField.getAttribute("name"));
    }
    console.log(choiceFieldName);
    var choiceFieldNames = new Set(choiceFieldName);
    var fieldNames = [];
    for (let value of choiceFieldNames) {
        fieldNames.push(value);
    }
    console.log(fieldNames);
    for (let fieldName of fieldNames) {
        var fields = document.getElementsByName(fieldName);
        for (let field of fields) {
            if (field.checked) {
                checked = true;
                break;
            }
        }
        if (!checked) {
            document.getElementById(fieldName+"-error").innerHTML = "Must Select";
        } else {
            document.getElementById(fieldName+"-error").innerHTML = "";
        }
    }
}
setTimeout(function() { validateCheckFields() }, 3000);
