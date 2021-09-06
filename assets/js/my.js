window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("header-img").classList.add("logo-small");
  } else {
    document.getElementById("header-img").classList.remove("logo-small");
  }
}

var successMessage = document.getElementById("success-message");


var contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.onsubmit = function(event) {
    event.preventDefault(); // Don't let the browser submit the form.
    var payload = {};

    // Build JSON key-value pairs using the form fields.
    contactForm.querySelectorAll("input, textarea").forEach(field => {
        payload[field.name] = field.value;
    });

    // Post the payload to the contact endpoint.
    fetch("https://kulti22.azurewebsites.net/api/SendMailToInfo", {
        method: 'post',
        body: JSON.stringify(payload)
    }).then(resp => {
        if (!resp.ok) {
            console.error(resp);
            return;
        }
        // Display success message.
        successMessage.style.display = "block";
        contactForm.style.display = "none";
    });
  }
}

var newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
  newsletterForm.onsubmit = function(event) {
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
            console.error(resp);
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
  registerHelfendeForm.onsubmit = function(event) {
    event.preventDefault(); // Don't let the browser submit the form.
    var payload = {};

    // Build JSON key-value pairs using the form fields.
    registerHelfendeForm.querySelectorAll("input, textarea").forEach(field => {
        payload[field.name] = field.value;
    });

    // Post the payload to the contact endpoint.
    fetch("https://kulti22.azurewebsites.net/api/RegisterHelfende", {
        method: 'post',
        body: JSON.stringify(payload)
    }).then(resp => {
        if (!resp.ok) {
            console.error(resp);
            return;
        }
        // Display success message.
        successMessage.style.display = "block";
        registerHelfendeForm.style.display = "none";
    });
  }
}
