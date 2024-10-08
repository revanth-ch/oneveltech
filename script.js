// Slideshow functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// Next/previous controls
function plusSlides(n) {
  showSlidesManual(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidesManual(slideIndex = n);
}


// Attendance percentage calculator
const first = document.getElementById('man');
const second = document.getElementById('enter');
const attended = document.getElementById('enter_2');
const submit = document.getElementById('submit');
const resultsTable = document.getElementById('results').getElementsByTagName('tbody')[0];
const resultsTableElement = document.getElementById('results');

// Initialize input fields
second.style.display = 'none';
attended.style.display = 'none';
submit.style.display = 'none';

// Show input fields on button click
first.addEventListener('click', () => {
  // first.style.display = 'none';
  second.style.display = 'inline';
  attended.style.display = 'inline';
  submit.style.display = 'inline';
});

// Calculate attendance percentage on submit
submit.addEventListener('click', () => {
  const number_1 = parseInt(second.value);
  const number_2 = parseInt(attended.value);

  if (!number_1 || !number_2) {
    alert('Please enter valid numbers');
    return;
  }

  const total_hours = [];
  const attended_hours = [];

  for (let i = 60; i <= 100; i += 5) {
    total_hours.push(`${i}%`);
    const percent = number_1 * (i / 100);
    const final = (percent - number_2).toFixed(2);
    attended_hours.push(final);

    const newRow = resultsTable.insertRow();
    newRow.insertCell(0).innerHTML = `${i}%`;
    newRow.insertCell(1).innerHTML = `${final} hours`;
  }

  // Make the table visible after submit
  resultsTableElement.style.visibility = 'visible';
});

function goToLink(url) {
  window.location.href = url;
}

const unit = document.getElementById('unit');
const mid = document.getElementById('mid');
const test_1 = document.getElementById('marks1');
const test_2 = document.getElementById('marks2');
const test_3 = document.getElementById('marks3');
const submit_2 = document.getElementById('submit-2');
const result = document.getElementById('result');
const att = document.getElementById('att');
const ass = document.getElementById('ass');

let average = 0;
let isMidTest = false;

// Initially hide the inputs and submit button
test_1.style.display = 'none';
test_2.style.display = 'none';
test_3.style.display = 'none';
submit_2.style.display = 'none';
att.style.display = 'none';
ass.style.display = 'none';
unit.style.display = 'none';
mid.style.display = 'none';

// Show inputs for Unit Test/Mid Test when "Marks" button is clicked
document.getElementById('marks').addEventListener('click', function(){
  unit.style.display = 'block';
  mid.style.display = 'block';
});

// Show inputs for Unit Test when "Unit" button is clicked
unit.addEventListener('click', function () {
  test_1.style.display = 'block';
  test_2.style.display = 'block';
  test_3.style.display = 'block';
  submit_2.style.display = 'block';
  isMidTest = false;
});

// Show inputs for Mid Test when "Mid" button is clicked
mid.addEventListener('click', function () {
  test_1.style.display = 'block';
  test_2.style.display = 'block';
  test_3.style.display = 'none';
  att.style.display = 'none';
  ass.style.display = 'none';
  submit_2.style.display = 'block';
  isMidTest = true;
});

// Calculate average marks when the submit button is clicked
submit_2.addEventListener('click', function () {
  const marks1 = parseInt(test_1.value);
  const marks2 = parseInt(test_2.value);
  let marks3 = 0;

  if (!isMidTest) {
    marks3 = parseInt(test_3.value);
  }

  if (!isNaN(marks1) && !isNaN(marks2) && (!isMidTest || !isNaN(marks3))) {
    const total = marks1 + marks2 + (isMidTest ? 0 : marks3);
    average = (total / (isMidTest ? 2 : 3)).toFixed(2);
    result.textContent = `Average Marks: ${average}`;

    if (isMidTest) {
      submit_2.style.display = 'none';
    } else {
      att.style.display = 'block';
      ass.style.display = 'block';
      submit_2.textContent = "Calculate Total Marks";
    }
  } else {
    result.textContent = "Please enter valid marks for all tests!";
  }
});

// Calculate final total marks including attendance and assignment for Unit Test
submit_2.addEventListener('click', function () {
  if (!isMidTest) {
    const attMarks = parseInt(att.value);
    const assMarks = parseInt(ass.value);

    if (!isNaN(attMarks) && !isNaN(assMarks)) {
      const complete = parseFloat(average) + attMarks + assMarks;
      result.textContent += `, Total Marks: ${complete.toFixed(2)}`;
    } else {
      result.textContent += ", Please enter valid attendance and assignment marks!";
    }
  }
});
// Calculate average marks when the submit button is clicked
submit_2.addEventListener('click', function () {
  // ...
  result.innerHTML = `
    <span class="average-mark">Average Marks: ${average}</span>
    <br>
    <span class="total-mark" id="total-mark"></span>
  `;
  // ...
});

// Calculate final total marks including attendance and assignment for Unit Test
submit_2.addEventListener('click', function () {
  if (!isMidTest) {
    // ...
    document.getElementById('total-mark').textContent = `Total Marks: ${complete.toFixed(2)}`;
    // ...
  }
});

// Calculate average marks and total marks when the submit button is clicked
submit_2.addEventListener('click', function () {
  const marks1 = parseInt(test_1.value);
  const marks2 = parseInt(test_2.value);
  let marks3 = 0;

  if (!isMidTest) {
    marks3 = parseInt(test_3.value);
  }

  if (!isNaN(marks1) && !isNaN(marks2) && (!isMidTest || !isNaN(marks3))) {
    const total = marks1 + marks2 + (isMidTest ? 0 : marks3);
    average = (total / (isMidTest ? 2 : 3)).toFixed(2);

    if (isMidTest) {
      submit_2.style.display = 'none';
      result.innerHTML = `
        <span class="average-mark">Average Marks: ${average}</span>
      `;
    } else {
      att.style.display = 'block';
      ass.style.display = 'block';
      submit_2.textContent = "Calculate Total Marks";

      // Calculate total marks after attendance and assignment input
      const attMarks = parseInt(att.value);
      const assMarks = parseInt(ass.value);

      if (!isNaN(attMarks) && !isNaN(assMarks)) {
        const complete = parseFloat(average) + attMarks + assMarks;
        result.innerHTML = `
          <span class="average-mark">Average Marks: ${average}</span>
          <br>
          <span class="total-mark">Total Marks: ${complete.toFixed(2)}</span>
        `;
      } else {
        result.innerHTML = `
          <span class="average-mark">Average Marks: ${average}</span>
          <br>
          <span style="color: red;">Please enter valid attendance and assignment marks!</span>
        `;
      }
    }
  } else {
    result.textContent = "Please enter valid marks for all tests!";
  }
});



// Function to add rows for GPA calculation based on number of subjects
function addSubjectRowsGPA() {
  const numSubjectsInput = document.getElementById('numSubjectsGPA').value;
  const numSubjects = parseInt(numSubjectsInput);

  // Check if the input is a valid number greater than 0
  if (isNaN(numSubjects) || numSubjects <= 0) {
      alert('Please enter a valid number of subjects.');
      return;
  }

  const subjectTable = document.querySelector('#subjectTableGPA');
  subjectTable.innerHTML = ''; // Clear any existing rows

  // Create table headings
  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>Subject</th>
      <th>Credits</th>
      <th>Grade</th>
    </tr>
  `;
  subjectTable.appendChild(thead);

  // Create table body
  const tbody = document.createElement('tbody');
  subjectTable.appendChild(tbody);

  // Loop through and create rows
  for (let i = 0; i < numSubjects; i++) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>Subject ${i + 1}</td>
        <td><input type="number" value="3" min="0" class="credit"></td>
        <td>
          <select class="grade">
            <option value="10">S</option>
            <option value="9">A</option>
            <option value="8">B</option>
            <option value="7">C</option>
            <option value="6">D</option>
            <option value="5">E</option>
            <option value="4">F</option>
          </select>
        </td>
      `;
      tbody.appendChild(row);
  }
  subjectTable.style.visibility = 'visible';
}

// Function to add rows for CGPA calculation based on number of semesters
function addSemesterRows() {
  const numSemestersInput = document.getElementById('numSemesters').value;
  const numSemesters = parseInt(numSemestersInput);

  // Check if the input is valid
  if (isNaN(numSemesters) || numSemesters <= 0) {
      alert('Please enter a valid number of semesters.');
      return;
  }

  const semesterTable = document.querySelector('#semesterTable');
  semesterTable.innerHTML = ''; // Clear any existing rows

  // Create table headings
  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>Semester</th>
      <th>Total Credits</th>
      <th>GPA</th>
    </tr>
  `;
  semesterTable.appendChild(thead);

  // Create table body
  const tbody = document.createElement('tbody');
  semesterTable.appendChild(tbody);

  // Loop through and create rows
  for (let i = 0; i < numSemesters; i++) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>Semester ${i + 1}</td>
        <td><input type="number" class="totalCredits" min="0"></td>
        <td><input type="number" class="gpa" min="0" max="10" step="0.01"></td>
      `;
      tbody.appendChild(row);
  }
  semesterTable.style.visibility = 'visible';
}


// Function to show the GPA/CGPA options when GPA button is clicked
function showGPAOptions() {
  document.getElementById('gpaOptions').style.display = 'block';
}

// Function to show GPA section
function showGPASection() {
  document.getElementById('gpaSection').style.display = 'block';
  document.getElementById('cgpaSection').style.display = 'none';
}

// Function to show CGPA section
function showCGPASection() {
  document.getElementById('cgpaSection').style.display = 'block';
  document.getElementById('gpaSection').style.display = 'none';
}


// Function to calculate GPA
function calculateGPA() {
  const credits = document.querySelectorAll('#subjectTableGPA .credit');
  const grades = document.querySelectorAll('#subjectTableGPA .grade');
  let totalCredits = 0;
  let totalPoints = 0;

  for (let i = 0; i < credits.length; i++) {
      const credit = parseFloat(credits[i].value);
      const grade = parseFloat(grades[i].value);
      totalCredits += credit;
      totalPoints += credit * grade;
  }

  const gpaOutOf10 = totalPoints / totalCredits;
  document.getElementById('resultGPA').textContent = 'Your GPA out of 10: ' + gpaOutOf10.toFixed(2);
}

// Function to reset GPA form
function resetGPAForm() {
  document.getElementById('numSubjectsGPA').value = '';
  document.querySelector('#subjectTableGPA').innerHTML = ''; 
  document.getElementById('resultGPA').textContent = 'Your GPA out of 10: ';
}


// Function to calculate CGPA
function calculateCGPA() {
  const semesters = document.querySelectorAll('#semesterTable tbody tr');
  let totalCredits = 0;
  let totalPoints = 0;

  for (let i = 0; i < semesters.length; i++) {
    const credits = parseFloat(semesters[i].querySelector('.totalCredits').value);
    const gpa = parseFloat(semesters[i].querySelector('.gpa').value);

    if (!isNaN(credits) && !isNaN(gpa)) {
      totalCredits += credits;
      totalPoints += credits * gpa;
    }
  }

  if (totalCredits === 0) {
    alert('Please enter valid credits and GPA for at least one semester.');
    return;
  }

  const cgpaOutOf10 = totalPoints / totalCredits;
  document.getElementById('resultCGPA').textContent = 'Your CGPA out of 10: ' + cgpaOutOf10.toFixed(2);
}
// Function to reset CGPA form
function resetCGPAForm() {
  document.getElementById('numSemesters').value = '';
  document.querySelector('#semesterTable').innerHTML = ''; 
  document.getElementById('resultCGPA').textContent = 'Your CGPA out of 10: ';
}




