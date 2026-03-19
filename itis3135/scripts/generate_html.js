document.getElementById("generate-html-btn").addEventListener("click", function () {
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

  let nameHeading = firstName;
  if (middleName) nameHeading += ` ${middleName}`;
  if (nickname) nameHeading += ` "${nickname}"`;
  nameHeading += ` ${lastName} ${divider} ${mascotAdj} ${mascotAnimal}`;

  const courses = document.querySelectorAll(".course");
  let coursesHTML = "";
  courses.forEach((course) => {
    const inputs = course.querySelectorAll("input");
    if (inputs[0].value) {
      coursesHTML += `\n    <li>${inputs[0].value} ${inputs[1].value} - ${inputs[2].value}: ${inputs[3].value}</li>`;
    }
  });

  let linksHTML = "";
  for (let i = 1; i <= 5; i++) {
    const name = document.querySelector(`[name="link_name_${i}"]`).value;
    const url = document.querySelector(`[name="link_url_${i}"]`).value;
    if (name && url) linksHTML += `\n    <li><a href="${url}">${name}</a></li>`;
  }

  const htmlOutput = `&lt;h3&gt;${nameHeading}&lt;/h3&gt;
&lt;p&gt;${ackStatement}&lt;br&gt;&lt;strong&gt;— ${firstName.charAt(0)}${lastName.charAt(0)}, ${ackDate}&lt;/strong&gt;&lt;/p&gt;
&lt;figure&gt;
    &lt;img src="images/bat.jpg" alt="Photo of ${firstName}" width="300"&gt;
    &lt;figcaption&gt;${picCaption}&lt;/figcaption&gt;
&lt;/figure&gt;
&lt;p&gt;${personalStatement}&lt;/p&gt;
&lt;ul&gt;
    &lt;li&gt;&lt;strong&gt;Personal Background:&lt;/strong&gt; ${personalBg}&lt;/li&gt;
    &lt;li&gt;&lt;strong&gt;Professional Background:&lt;/strong&gt; ${professionalBg}&lt;/li&gt;
    &lt;li&gt;&lt;strong&gt;Academic Background:&lt;/strong&gt; ${academicBg}&lt;/li&gt;
    &lt;li&gt;&lt;strong&gt;Background in Subject:&lt;/strong&gt; ${subjectBg}&lt;/li&gt;
    &lt;li&gt;&lt;strong&gt;Primary Work Computer:&lt;/strong&gt; ${primaryComputer}&lt;/li&gt;
    &lt;li&gt;&lt;strong&gt;Backup Work Computer:&lt;/strong&gt; ${backupComputer}&lt;/li&gt;
    ${funFact ? `&lt;li&gt;&lt;strong&gt;Fun Fact:&lt;/strong&gt; ${funFact}&lt;/li&gt;` : ""}
    ${additionalInfo ? `&lt;li&gt;&lt;strong&gt;Additional Information:&lt;/strong&gt; ${additionalInfo}&lt;/li&gt;` : ""}
&lt;/ul&gt;
&lt;ol&gt;${coursesHTML}
&lt;/ol&gt;
&lt;blockquote&gt;"${quote}" — ${quoteAuthor}&lt;/blockquote&gt;
&lt;ul&gt;${linksHTML}
&lt;/ul&gt;`;

  document.querySelector("main").innerHTML = `
    <h2>Introduction HTML</h2>
    <section>
      <pre><code>${htmlOutput}</code></pre>
    </section>
    <p><a href="intro_form.html">Reset — Fill out again</a></p>
  `;
});
