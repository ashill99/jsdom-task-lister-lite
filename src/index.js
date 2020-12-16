document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let newForm = document.querySelector("form#create-task-form")
    newForm.addEventListener("submit", function (evt) {
      evt.preventDefault()
      console.log("form submitted")
      let newTask = document.getElementById("new-task-description")
      let toDoTask = newTask.value 
      console.log(toDoTask)
      let ul = document.querySelector("ul#tasks")
      let li = document.createElement("li")
      li.textContent = toDoTask
      ul.append(li)
      evt.target.reset()
    })
});

