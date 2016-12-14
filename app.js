/*jslint browser: true*/
/*global $, jQuery, alert*/

$(function () {

    $('#add').on("click", function () {
        var toDoTask = document.getElementById("toDo").value;
        var listItem = document.createElement('li');
        var button = document.createElement("button");
        button.innerHTML = "&#x2713";
        listItem.innerHTML = toDoTask;
        document.getElementById("sortable1").appendChild(listItem);
        listItem.setAttribute("class", "ui-state-default");
        listItem.setAttribute("id", "listTask");
        listItem.appendChild(button);
        button.setAttribute("id", "completeTaskButton");
        button.setAttribute("class", "completeTaskButton");
    });
    $('#completeTaskButton').on("click", function () {
        $(this).parent().remove();
    });
});

    

$(function () {
    $("#sortable1, #sortable2, #sortable3, #sortable4, #sortable5").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
});