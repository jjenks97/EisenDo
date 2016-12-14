/*jslint browser: true*/
/*global $, jQuery, alert*/

document.getElementById("add").onclick = function () {
    var toDoTask = document.getElementById("toDo").value;
    var listItem = document.createElement('li');
    listItem.innerHTML = toDoTask;
    document.getElementById("sortable1").appendChild(listItem);
    listItem.setAttribute("class", "ui-state-default");
};


$(function () {
    $("#sortable1, #sortable2").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
});