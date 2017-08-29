/**
 * To clone the previous field in the form
 *
 * @param string id     Id of the div where the clone fields are placed
 * @param string spanId Id of the romove button
 *
 * @return void
 */
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
/**
 * To remove the fields
 *
 * @param string id     Id of the div where the clone fields are placed
 * @param string spanId Id of the romove button
 * @return void
 */
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