document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.querySelector("form");
  const myInput = document.querySelector("input");
  const myDiv = document.querySelector(".container");
  const myOl = document.createElement("ol");

  // Add focus to input
  myInput.focus();

  // Add submit event to form
  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const myInputValue = myInput.value;

    // Create a new <li> element for each task
    const myLi = document.createElement("li");
    myLi.textContent = myInputValue;
    myLi.style.textAlign = "left";
    myLi.style.marginTop = "10px";

    // Add click event to li so as to click to remove it
    myLi.addEventListener("click", function (e) {
      e.target.remove();
    });

    myOl.appendChild(myLi);
    myDiv.appendChild(myOl);
    document.body.append(myDiv);
    console.log(myInputValue);

    // Clear the input field after adding the task
    myInput.value = "";
    // Add focus to input after deleting item
    myInput.focus();
  });
});
