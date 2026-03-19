// Stops form from refreshing the page after submission
const formElement = document.getElementById("form");
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Clear button
document.getElementById("clear-btn").addEventListener("click", function () {
  Array.from(document.querySelectorAll("form input, form textarea")).forEach((input) => {
    input.value = "";
  });
});

// Add Course and Delete buttons
document.getElementById("add-course").addEventListener("click", function () {
  const container = document.getElementById("courses-container");
  const div = document.createElement("div");
  div.classList.add("course");
  div.innerHTML = `
    <input type="text" name="course_dept" placeholder="Department">
    <input type="text" name="course_num" placeholder="Number">
    <input type="text" name="course_name" placeholder="Course Name">
    <input type="text" name="course_reason" placeholder="Reason for taking">
    <button type="button" onclick="this.parentElement.remove()">Delete</button>
  `;
  container.appendChild(div);
});

formElement.addEventListener("submit", function () {
  // Gathering all form values
  const firstName = document.getElementById("first-name").value;
  const middleName = document.getElementById("middle-name").value;
  const nickname = document.getElementById("nickname").value;
  const lastName = document.getElementById("last-name").value;
  const mascotAdj = document.getElementById("mascot-adj").value;
  const mascotAnimal = document.getElementById("mascot-animal").value;
  const divider = document.getElementById("divider").value;
  const picCaption = document.getElementById("pic-caption").value;
  const ackStatement = document.getElementById("ack-statement").value;
  const ackDate = document.getElementById("ack-date").value;
  const personalStatement = document.getElementById("personal-statement").value;
  const personalBg = document.getElementById("personal-bg").value;
  const professionalBg = document.getElementById("professional-bg").value;
  const academicBg = document.getElementById("academic-bg").value;
  const subjectBg = document.getElementById("subject-bg").value;
  const primaryComputer = document.getElementById("primary-computer").value;
  const backupComputer = document.getElementById("backup-computer").value;
  const funFact = document.getElementById("fun-fact").value;
  const additionalInfo = document.getElementById("additional-info").value;
  const quote = document.getElementById("quote").value;
  const quoteAuthor = document.getElementById("quote-author").value;

  // Handling image
  const pictureInput = document.getElementById("picture");
  let imgSrc = "../images/bat.jpg";
  if (pictureInput.files && pictureInput.files[0]) {
    imgSrc = URL.createObjectURL(pictureInput.files[0]);
  }

  // Building name heading
  let nameHeading = firstName;
  if (middleName) nameHeading += ` ${middleName}`;
  if (nickname) nameHeading += ` "${nickname}"`;
  nameHeading += ` ${lastName} ${divider} ${mascotAdj} ${mascotAnimal}`;

  // Collecting courses
  const courses = document.querySelectorAll(".course");
  let coursesHTML = "";
  courses.forEach((course) => {
    const inputs = course.querySelectorAll("input");
    if (inputs[0].value) {
      coursesHTML += `<li>${inputs[0].value} ${inputs[1].value} - ${inputs[2].value}: ${inputs[3].value}</li>`;
    }
  });

  // Collecting links
  let linksHTML = "";
  for (let i = 1; i <= 5; i++) {
    const name = document.querySelector(`[name="link_name_${i}"]`).value;
    const url = document.querySelector(`[name="link_url_${i}"]`).value;
    if (name && url) linksHTML += `<li><a href="${url}" target="_blank">${name}</a></li>`;
  }

  // Building the results
  const result = `
    <h3>${nameHeading}</h3>
    <p>${ackStatement}<br><strong>— ${firstName.charAt(0)}${lastName.charAt(0)}, ${ackDate}</strong></p>
    <figure>
      <img src="${imgSrc}" alt="Photo of ${firstName}" width="300">
      <figcaption>${picCaption}</figcaption>
    </figure>
    <p>${personalStatement}</p>
    <h3>Background Information</h3>
    <ul>
      <li><strong>Personal Background:</strong> ${personalBg}</li>
      <li><strong>Professional Background:</strong> ${professionalBg}</li>
      <li><strong>Academic Background:</strong> ${academicBg}</li>
      <li><strong>Background in Subject:</strong> ${subjectBg}</li>
      <li><strong>Primary Work Computer:</strong> ${primaryComputer}</li>
      <li><strong>Backup Work Computer:</strong> ${backupComputer}</li>
      ${funFact ? `<li><strong>Fun Fact:</strong> ${funFact}</li>` : ""}
      ${additionalInfo ? `<li><strong>Additional Information:</strong> ${additionalInfo}</li>` : ""}
    </ul>
    <h3>Current Courses</h3>
    <ol>${coursesHTML}</ol>
    <blockquote>"${quote}" — ${quoteAuthor}</blockquote>
    <h3>Links</h3>
    <ul>${linksHTML}</ul>
    <p><a href="intro_form.html">Reset — Fill out again</a></p>
  `;

  // Replacing the form with results
  document.querySelector("main").innerHTML = "<h2>Introduction Form</h2>" + result;
});
