function createChore(idList) {
  var myList = document.getElementById(idList);

  var newItem1 = document.createElement("li");
  newItem1.textContent = "New Item 1";

  newItem1.appendChild(addEditButton(idList));
  newItem1.appendChild(addDeleteButton(idList, newItem1));

  myList.appendChild(newItem1);
}

function deleteChore(elementList, idList) {
  var parentLi = elementList.parentNode;
  var myList = document.getElementById(idList);
  myList.removeChild(parentLi);
}

function editChore(button, idList) {
  var parentLi = button.parentNode;

  var inputField = document.createElement("input");
  inputField.type = "text";
  inputField.value = "";

  // Replace the text content with the input field
  parentLi.innerHTML = "";
  parentLi.appendChild(inputField);

  // Focus on the input field
  inputField.focus();

  // Add an event listener to handle finishing the edit
  inputField.addEventListener("blur", function () {
    // When the input field loses focus, set the text content back
    parentLi.textContent = inputField.value;
    parentLi.appendChild(addEditButton(idList));
    parentLi.appendChild(addDeleteButton(idList, parentLi));
  });
}

function addDeleteButton(idList, parentElement) {
  var deleteButton = document.createElement("button");
  deleteButton.parentNode = parentElement;

  deleteButton.addEventListener("click", function () {
    deleteChore(deleteButton, idList);
  });

  var iconSpan = document.createElement("span");
  iconSpan.className = "material-symbols-outlined";
  iconSpan.textContent = "delete";

  deleteButton.appendChild(iconSpan);

  return deleteButton;
}

function addEditButton(idList) {
  var deleteButton = document.createElement("button");

  deleteButton.addEventListener("click", function () {
    editChore(deleteButton, idList);
  });

  var iconSpan = document.createElement("span");
  iconSpan.className = "material-symbols-outlined";
  iconSpan.textContent = "edit";

  deleteButton.appendChild(iconSpan);

  return deleteButton;
}
