window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("header-img").classList.add("logo-small");
  } else {
    document.getElementById("header-img").classList.remove("logo-small");
  }
}

let recaptchaMessage = document.getElementById("recaptcha-message");
let successMessage = document.getElementById("success-message");
let retryMessage = document.getElementById("retry-message");
let errorMessage = document.getElementById("error-message");

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

let glform = document.getElementById("gl-form");
if (glform) {
  glform.onsubmit = (event) => {
    // prevent multibple actions
    glform.getElementsByTagName("button")[0].disabled = true;

    event.preventDefault(); // Don't let the browser submit the form.
    var payload = {};

    // Build JSON key-value pairs using the form fields.
    glform.querySelectorAll("#name").forEach(field => {
      payload["name"] = field.value;
    });

    glform.querySelectorAll("#email").forEach(field => {
      payload["id"] = field.value;
    });

    glform.querySelectorAll("select").forEach(field => {
      payload["field"] = field.value;
    });

    grecaptcha.ready(() => {
      grecaptcha.execute('6Lfxl0UhAAAAALta4E67FQteHjIhflSmQtU9uLRU', { action: 'submit' }).then((token) => {
        payload['g-recaptcha-response'] = token;
        fetch("https://kulti22.azurewebsites.net/api/JoinGame", {
          method: 'post',
          body: JSON.stringify(payload)
        }).then(resp => {
          if (!resp.ok) {
            console.error(resp);
            if (resp.status == 400) {
              retryMessage.style.display = "block";
              glform.style.display = "none";
            } else {
              errorMessage.style.display = "block";
              glform.style.display = "none";
            }
            return;
          }
          // Display success message.
          successMessage.style.display = "block";
          glform.style.display = "none";
        });
      });
    });
  }
}

let spikeform = document.getElementById("spikeball-form");
if (spikeform) {
  spikeform.onsubmit = (event) => {
    // prevent multibple actions
    spikeform.getElementsByTagName("button")[0].disabled = true;

    event.preventDefault(); // Don't let the browser submit the form.
    var payload = {};

    // Build JSON key-value pairs using the form fields.
    spikeform.querySelectorAll("input").forEach(field => {
      payload[field.name] = field.value;
    });

    spikeform.querySelectorAll("#email").forEach(field => {
      payload["id"] = field.value;
    });

    grecaptcha.ready(() => {
      grecaptcha.execute('6Lfxl0UhAAAAALta4E67FQteHjIhflSmQtU9uLRU', { action: 'submit' }).then((token) => {
        payload['g-recaptcha-response'] = token;
        fetch("https://kulti22.azurewebsites.net/api/JoinSpikeBall", {
          method: 'post',
          body: JSON.stringify(payload)
        }).then(resp => {
          if (!resp.ok) {
            console.error(resp);
            if (resp.status == 400) {
              retryMessage.style.display = "block";
              spikeform.style.display = "none";
            } else {
              errorMessage.style.display = "block";
              spikeform.style.display = "none";
            }
            return;
          }
          // Display success message.
          successMessage.style.display = "block";
          spikeform.style.display = "none";
        });
      });
    });
  }
}