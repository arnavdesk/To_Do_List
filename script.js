(function () {
    var i = 1;
    var allListElements = {};
    var inputNote = document.getElementById("itemInput");
    var addBtn = document.getElementById("add-btn");
    var listOfItems = document.getElementById("item-list");
    var taskSpan = document.getElementById("task-count");
    var totalTask = 0;
    var clearBtn = document.getElementById("clear");
    var allBtn = document.getElementById("all-show");
    var completeBtn = document.getElementById("complete-show");
    var incompleteBtn = document.getElementById("incomplete-show");
    var comandDiv = document.getElementById("comand");

    var updateTaskLeft = function () {
        taskSpan.innerHTML = totalTask;
        if (totalTask == 0) {
            comandDiv.innerHTML = "Bravo! All Task Complete";
        }
        else {
            comandDiv.innerHTML = "Complete The Following Task";
        }
    }
    updateTaskLeft();


    // var getListElementFunc = function (i, stringNote) {
    //     allListElements[i] = { str: stringNote, state: 0 };
    //     var newListItem = document.createElement("li");
    //     newListItem.setAttribute("id", i);
    //     newListItem.setAttribute("class", "list-item");

    //     var childInputCheckbox = document.createElement("input");
    //     childInputCheckbox.setAttribute("type", "checkbox");
    //     childInputCheckbox.setAttribute("id", "check" + i);
    //     childInputCheckbox.setAttribute("class", "input-check");

    //     childInputCheckbox.onchange = function () {
    //         if (childInputCheckbox.checked) {
    //             newListItem.style.backgroundColor = "gray";
    //             allListElements[i].state = 1;
    //             totalTask--;
    //             updateTaskLeft();
    //         }
    //         else {
    //             newListItem.style.backgroundColor = "whitesmoke";
    //             allListElements[i].state = 0;
    //             totalTask++;
    //             updateTaskLeft();
    //         }
    //     }

    //     newListItem.appendChild(childInputCheckbox);

    //     var labelChild = document.createElement("label");
    //     labelChild.setAttribute("for", "check" + i);
    //     var divLabelChild = document.createElement("div");
    //     divLabelChild.setAttribute("class", "note");
    //     divLabelChild.innerHTML = stringNote;
    //     labelChild.appendChild(divLabelChild);

    //     newListItem.appendChild(labelChild);

    //     var divDelete = document.createElement("div");
    //     divDelete.setAttribute("class", "delete");

    //     divDelete.onclick = function () {
    //         delete allListElements[i];
    //         newListItem.style.opacity = 0;
    //         console.log(newListItem);
    //         setTimeout(function () {
    //             listOfItems.removeChild(newListItem);
    //         }, 400);
    //     }

    //     var delIcon = document.createElement("i");
    //     delIcon.setAttribute("class", "far fa-minus-square");

    //     divDelete.appendChild(delIcon);
    //     newListItem.appendChild(divDelete);

    //     setTimeout(function () {
    //         newListItem.style.opacity = 1;
    //     }, 10);

    //     console.log(allListElements);
    //     totalTask++;
    //     updateTaskLeft();
    //     return newListItem;
    // }

    var renderItems = function (i, stringNote) {
        var newListItem = document.createElement("li");
        newListItem.setAttribute("id", i);
        newListItem.setAttribute("class", "list-item");

        var childInputCheckbox = document.createElement("input");
        childInputCheckbox.setAttribute("type", "checkbox");
        childInputCheckbox.setAttribute("id", "check" + i);
        childInputCheckbox.setAttribute("class", "input-check");

        childInputCheckbox.onchange = function () {
            if (childInputCheckbox.checked) {
                newListItem.style.backgroundColor = "gray";
                divLabelChild.style.textDecoration = "line-through";
                allListElements[i].state = 1;
                totalTask--;
                updateTaskLeft();
            }
            else {
                newListItem.style.backgroundColor = "whitesmoke";
                divLabelChild.style.textDecoration = "none";
                allListElements[i].state = 0;
                totalTask++;
                updateTaskLeft();
            }
        }



        newListItem.appendChild(childInputCheckbox);

        var labelChild = document.createElement("label");
        labelChild.setAttribute("for", "check" + i);
        var divLabelChild = document.createElement("div");
        divLabelChild.setAttribute("class", "note");
        divLabelChild.innerHTML = stringNote;
        labelChild.appendChild(divLabelChild);

        newListItem.appendChild(labelChild);


        if (allListElements[i].state == 1) {
            newListItem.style.backgroundColor = "gray";
            childInputCheckbox.checked = true;
            divLabelChild.style.textDecoration = "line-through";
        }
        else {
            newListItem.style.backgroundColor = "whitesmoke";
            childInputCheckbox.checked = false;
            divLabelChild.style.textDecoration = "none";
        }

        var divDelete = document.createElement("div");
        divDelete.setAttribute("class", "delete");

        divDelete.onclick = function () {
            delete allListElements[i];
            newListItem.style.opacity = 0;
            setTimeout(function () {
                listOfItems.removeChild(newListItem);
            }, 400);
        }

        var delIcon = document.createElement("i");
        delIcon.setAttribute("class", "far fa-minus-square");

        divDelete.appendChild(delIcon);
        newListItem.appendChild(divDelete);

        setTimeout(function () {
            newListItem.style.opacity = 1;
        }, 10);
        updateTaskLeft();
        listOfItems.appendChild(newListItem);
    }

    addBtn.onclick = function () {
        var stringNote = inputNote.value;
        if (stringNote.length == 0) {
            alert("Please add a task");
            return;
        }
        totalTask++;
        allBtn.style.backgroundColor = "black";
        completeBtn.style.backgroundColor = "lightslategray";
        incompleteBtn.style.backgroundColor = "lightslategray";
        console.log(stringNote);
        allListElements[i] = { str: stringNote, state: 0 };
        clearDisplay();
        displayAll();
        inputNote.value = "";
        i++;

    }

    var clearDisplay = function () {
        listOfItems.innerHTML = "";
    }

    var displayAll = function () {
        for (const key in allListElements) {
            renderItems(key, allListElements[key]["str"]);
        }
    }
    var displayCompleted = function () {
        for (const key in allListElements) {
            if (allListElements[key]["state"] == 1)
                renderItems(key, allListElements[key]["str"]);
        }
    }
    var displayInComplete = function () {
        for (const key in allListElements) {
            if (allListElements[key]["state"] == 0)
                renderItems(key, allListElements[key]["str"]);
        }
    }
    var deleteCompleted = function () {
        for (const key in allListElements) {
            if (allListElements[key]["state"] == 1)
                delete allListElements[key];
        }
    }


    allBtn.style.cursor = "pointer";
    completeBtn.style.cursor = "pointer";
    incompleteBtn.style.cursor = "pointer";
    clearBtn.style.cursor = "pointer";

    allBtn.style.backgroundColor = "black";
    completeBtn.style.backgroundColor = "lightslategray";
    incompleteBtn.style.backgroundColor = "lightslategray";

    clearBtn.onclick = function () {
        clearDisplay();
        deleteCompleted();
        displayAll();
    }

    allBtn.onclick = function () {
        allBtn.style.backgroundColor = "black";
        completeBtn.style.backgroundColor = "lightslategray";
        incompleteBtn.style.backgroundColor = "lightslategray";
        clearDisplay();
        displayAll();
    }
    completeBtn.onclick = function () {
        allBtn.style.backgroundColor = "lightslategray";
        completeBtn.style.backgroundColor = "black";
        incompleteBtn.style.backgroundColor = "lightslategray";
        clearDisplay();
        displayCompleted();
    }
    incompleteBtn.onclick = function () {
        allBtn.style.backgroundColor = "lightslategray";
        completeBtn.style.backgroundColor = "lightslategray";
        incompleteBtn.style.backgroundColor = "black";
        clearDisplay();
        displayInComplete();
    }



})();