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

/**
 * const openFormBtn = document.getElementById("openForm");
      const formContainer = document.getElementById("formContainer");
      const closeBtn = document.getElementById("closeBtn");
      const thankbtn = document.getElementById("thanks");

      closeBtn.addEventListener("click", () => {
        thankbtn.style.display = "none";
        formContainer.style.display = "none" ? "block" : "none";
      });

      openFormBtn.addEventListener("click", () => {
        formContainer.style.display =
          formContainer.style.display === "none" ? "block" : "none";
        thankbtn.style.display =
          thankbtn.style.display === "none" ? "block" : "none";
      });

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
 */