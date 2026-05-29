const studentNameInput = document.getElementById("studentName");
const studentMarkInput = document.getElementById("studentMark");
const submitBtn = document.getElementById("submitBtn");
const resultArea = document.getElementById("resultArea");
const studentList = document.getElementById("studentList");

submitBtn.addEventListener("click", function () {
  // Read and clean the values from the inputs.
  const studentName = studentNameInput.value.trim();
  const markText = studentMarkInput.value;
  const studentMark = parseInt(markText);

  resultArea.classList.remove("success", "error");

  // Check if the student name was entered.
  if (studentName === "") {
    resultArea.textContent = "Please enter the student name.";
    resultArea.classList.add("error");
    return;
  }

  // Check if the mark is valid.
  if (markText === "" || isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
    resultArea.textContent = "Please enter a mark between 0 and 100.";
    resultArea.classList.add("error");
    return;
  }

  let result;
  let grade;

  // Work out the result and grade using the mark.
  if (studentMark >= 80) {
    result = "PASS";
    grade = "Distinction";
  } else if (studentMark >= 65) {
    result = "PASS";
    grade = "Merit";
  } else if (studentMark >= 50) {
    result = "PASS";
    grade = "Pass";
  } else {
    result = "FAIL";
    grade = "Fail";
  }

  resultArea.textContent =
    studentName + " scored " + studentMark + "%. Result: " + result + " - " + grade + ".";
  resultArea.classList.add("success");

  // Add the submitted student to the list.
  const listItem = document.createElement("li");
  listItem.textContent =
    studentName + " - " + studentMark + "% - " + result + " - " + grade;
  studentList.appendChild(listItem);

  // Clear the inputs after submitting.
  studentNameInput.value = "";
  studentMarkInput.value = "";
});
