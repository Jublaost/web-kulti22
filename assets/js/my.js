window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("header-img").classList.add("logo-small");
  } else {
    document.getElementById("header-img").classList.remove("logo-small");
  }
}

var successMessage = document.getElementById("success-message");
var errorMessage = document.getElementById("error-message");
var recaptchaMessage = document.getElementById("recaptcha-message");

var contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.onsubmit = function (event) {
    event.preventDefault(); // Don't let the browser submit the form.
    var payload = {};

    // Build JSON key-value pairs using the form fields.
    contactForm.querySelectorAll("input, textarea").forEach(field => {
      payload[field.name] = field.value;
    });
    if (payload["g-recaptcha-response"].length == 0) {
      recaptchaMessage.style.display = "block";
    } else {
      // Post the payload to the contact endpoint.
      fetch("https://kulti22.azurewebsites.net/api/WebFormKontakt", {
        method: 'post',
        body: JSON.stringify(payload)
      }).then(resp => {
        if (!resp.ok) {
          console.error(resp);
          return;
        }
        // Display success message.
        recaptchaMessage.style.display = "none";
        successMessage.style.display = "block";
        contactForm.style.display = "none";
      });
    }
  }
}

var newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
  newsletterForm.onsubmit = function (event) {
    event.preventDefault(); // Don't let the browser submit the form.
    var payload = {};

    // Build JSON key-value pairs using the form fields.
    newsletterForm.querySelectorAll("input, textarea").forEach(field => {
      payload[field.name] = field.value;
    });

    // Post the payload to the contact endpoint.
    fetch("https://kulti22.azurewebsites.net/api/AddToNewsletter", {
      method: 'post',
      body: JSON.stringify(payload)
    }).then(resp => {
      if (!resp.ok) {
        errorMessage.style.display = "block";
        newsletterForm.style.display = "none";
        return;
      }
      // Display success message.
      successMessage.style.display = "block";
      newsletterForm.style.display = "none";
    });
  }
}


var registerHelfendeForm = document.getElementById("helfende-form");
if (registerHelfendeForm) {
  registerHelfendeForm.onsubmit = function (event) {
    event.preventDefault(); // Don't let the browser submit the form.

    document.getElementById("submit-button").disabled = true; // disable submit button

    var payload = {};

    registerHelfendeForm.querySelectorAll(".form-check-input").forEach(field => {
      if (field.checked) {
        if (payload[field.name]) {
          payload[field.name] += ";" + field.value;
        } else {
          payload[field.name] = field.value;
        }
      }
    })

    // Build JSON key-value pairs using the form fields.
    registerHelfendeForm.querySelectorAll(".form-control").forEach(field => {
      payload[field.name] = field.value;
    });

    // Post the payload to the contact endpoint.
    fetch("https://kulti22.azurewebsites.net/api/WebFormHelfende", {
      method: 'post',
      body: JSON.stringify(payload)
    }).then(resp => {
      if (!resp.ok) {
        errorMessage.style.display = "block";
        registerHelfendeForm.style.display = "none";
        console.error(resp);
        return;
      }
      // Display success message.
      successMessage.style.display = "block";
      registerHelfendeForm.style.display = "none";
    });
  }
}



var competitionForm = document.getElementById("competition-form");
if (competitionForm) {
  competitionForm.onsubmit = function (event) {
    event.preventDefault(); // Don't let the browser submit the form.
    var payload = {};

    // Build JSON key-value pairs using the form fields.
    competitionForm.querySelectorAll("input, textarea").forEach(field => {
      payload[field.name] = field.value;
    });

    if (payload["g-recaptcha-response"].length == 0) {
      recaptchaMessage.style.display = "block";
    } else {
      // Post the payload to the contact endpoint.
      fetch("https://kulti22.azurewebsites.net/api/WebFormBandCompetition", {
        method: 'post',
        body: JSON.stringify(payload)
      }).then(resp => {
        if (!resp.ok) {
          errorMessage.style.display = "block";
          competitionForm.style.display = "none";
          console.error(resp);
          return;
        }
        // Display success message.
        successMessage.style.display = "block";
        competitionForm.style.display = "none";
      });
    }
  }
}

var competitionFormVote = document.getElementById("competition-form-vote");
if (competitionFormVote) {
  competitionFormVote.onsubmit = function (event) {
    event.preventDefault(); // Don't let the browser submit the form.
    var payload = {};

    // Build JSON key-value pairs using the form fields.
    competitionFormVote.querySelectorAll("input, select, textarea").forEach(field => {
      payload[field.name] = field.value;
    });

    if (payload["g-recaptcha-response"].length == 0) {
      recaptchaMessage.style.display = "block";
    } else {
      // Post the payload to the contact endpoint.
      fetch("https://kulti22.azurewebsites.net/api/WebFormBandCompetitionVote", {
        method: 'post',
        body: JSON.stringify(payload)
      }).then(resp => {
        if (!resp.ok) {
          errorMessage.style.display = "block";
          competitionFormVote.style.display = "none";
          console.error(resp);
          return;
        }
        // Display success message.
        successMessage.style.display = "block";
        competitionFormVote.style.display = "none";
      });
    }
  }
}

var acc = document.getElementsByClassName("accordion");
var i;
if (acc) {
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

function onLicenseCheck(show) {
  if (show) {
    document.getElementById("driver-license-category-div").classList.remove("hide");
  } else {
    document.getElementById("driver-license-category-div").classList.add("hide");
  }
}
