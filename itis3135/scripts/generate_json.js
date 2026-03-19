document.getElementById("generate-json-btn").addEventListener("click", function () {
  const courses = [];
  document.querySelectorAll(".course").forEach((course) => {
    const inputs = course.querySelectorAll("input");
    if (inputs[0].value) {
      courses.push({
      subject: inputs[0].value,
      number: inputs[1].value,
      section: inputs[2].value,
      title: inputs[3].value
    });

    }
  });

  const links = [];
  for (let i = 1; i <= 5; i++) {
    const name = document.querySelector(`[name="link_name_${i}"]`).value;
    const url = document.querySelector(`[name="link_url_${i}"]`).value;
    if (name && url) links.push({ name, url });
  }

    const data = {
    name: {
      first: document.getElementById("first-name").value,
      middle: document.getElementById("middle-name").value,
      nickname: document.getElementById("nickname").value,
      last: document.getElementById("last-name").value
    },
    mascot: {
      adjective: document.getElementById("mascot-adj").value,
      animal: document.getElementById("mascot-animal").value
    },
    divider: document.getElementById("divider").value,
    picture: {
      caption: document.getElementById("pic-caption").value
    },
    acknowledgement: {
      statement: document.getElementById("ack-statement").value,
      date: document.getElementById("ack-date").value
    },
    personalStatement: document.getElementById("personal-statement").value,
    background: {
      personal: document.getElementById("personal-bg").value,
      professional: document.getElementById("professional-bg").value,
      academic: document.getElementById("academic-bg").value,
      subject: document.getElementById("subject-bg").value
    },
    computers: {
      primary: document.getElementById("primary-computer").value,
      backup: document.getElementById("backup-computer").value
    },
    funFact: document.getElementById("fun-fact").value,
    additionalInfo: document.getElementById("additional-info").value,
    quote: {
      text: document.getElementById("quote").value,
      author: document.getElementById("quote-author").value
    },
    courses: courses,
    links: links
  };

  document.querySelector("main").innerHTML = `
    <h2>Introduction JSON</h2>
    <section>
      <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
    </section>
    <p><a href="intro_form.html">Reset — Fill out again</a></p>
  `;
});
