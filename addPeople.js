let valueForAddPeople = document.getElementById("valueForAddPeople");
let btnaddPeople = document.getElementById("btnAddPeople"); // for adding the People name

let addpeople = [];
btnaddPeople.addEventListener("click", () => {
  if ( valueForAddPeople.value == '') return;
  addpeople.push(valueForAddPeople.value);
  // console.log(addpeople);
  let people = localStorage.getItem("Peoples");
  if (people == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(people);
  }
  notesObj.push(valueForAddPeople.value);
  localStorage.setItem("Peoples", JSON.stringify(notesObj));
  valueForAddPeople.value = "";
  showPeoples();
});