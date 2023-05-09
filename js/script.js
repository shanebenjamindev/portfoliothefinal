// Get the popup and button elements
var contactFormPopup = document.getElementById("contactFormPopup");
var openFormBtn = document.getElementById("openFormBtn");

// When the user clicks the button, open the popup
openFormBtn.onclick = function () {
  contactFormPopup.style.display = "block";
};

// When the user clicks the close button or outside the popup, close it
var closeBtn = contactFormPopup.querySelector(".close");
window.onclick = function (event) {
  if (event.target == contactFormPopup) {
    contactFormPopup.style.display = "none";
  }
};
closeBtn.onclick = function () {
  contactFormPopup.style.display = "none";
};

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  let isFormValid = true;

  // Check if any input is empty
  for (const [key, value] of formData.entries()) {
    if (!value) {
      isFormValid = false;
      alert(`${key} cannot be empty.`);
      break;
    }
  }

  if (isFormValid) {
    fetch(form.action, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("Message failed to send.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while sending the message.");
      });
    formContainer.style.display = "none";
  }
});

// When the user submits the form, send it via email
var contactForm = document.getElementById("contactForm");
contactForm.onsubmit = function (event) {
  event.preventDefault();
  let isFormValid = true;
  // Send the email using a server-side script or a third-party service
  // Check if any input is empty
  for (const [key, value] of formData.entries()) {
    if (!value) {
      isFormValid = false;
      alert(`${key} cannot be empty.`);
      break;
    }
  }

  if (isFormValid) {
    fetch(form.action, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("Message failed to send.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while sending the message.");
      });
    // Close the popup
    contactFormPopup.style.display = "none";
  }
};

// wow script
new WOW().init();

// fancybox script
Fancybox.bind("[data-fancybox=gallery]", {
  Thumbs: {
    type: "classic",
    opacity: 0,
  },
});

jQuery(document).ready(function () {
  jQuery('.fancybox').fancybox({
    // Fancybox options here
  });
});

$(document).ready(function () {
  // Show or hide the back-to-top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  // Smooth scrolling to top
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
})

$(document).ready(function () {
  // Show or hide the overlay and navbar when the toggler is clicked
  $('.navbar-toggler').click(function () {
    $('.overlay').toggle();
    $('#collapsibleNavbar').collapse('toggle');
  });

  // Hide the overlay when the user clicks on it
  $('.overlay').click(function () {
    $(this).hide();
    $('#collapsibleNavbar').collapse('hide');
  });
});

// Dark Mode
$(document).ready(function () {
  // Add click event listener to the dark mode button
  $('.btn-dark-mode').click(function () {
    // Toggle the class "dark-mode" on the body element
    $('body').toggleClass('dark-mode');
      
    $('.card').toggleClass('bg-dark');
    // Toggle the button text between "Dark Mode" and "Light Mode"
    var buttonText = $(this).text() === 'Dark Mode' ? 'Light Mode' : 'Dark Mode';
    $(this).text(buttonText);
  });
});

