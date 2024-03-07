$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //  Typing Text Animation  //

  var typed = new Typed(".typing", {
    strings: [
      "Frontend Developer",
      "Software Developer",
      "Electric Vehicle Enthusiast",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Frontend Developer",
      "Software Developer",
      "Electric Vehicle Enthusiast",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //  Owl Carousel  //

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  $(".navbar .menu li a").click(function () {
    // Remove "active" class from all navbar li items
    $(".navbar .menu li a").removeClass("active");

    // Add "active" class to the clicked navbar li item
    $(this).addClass("active");

    // Smooth scroll on Menu Items click
    $("html").css("scrollBehavior", "smooth");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about");

  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        aboutSection.classList.add("animated");
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(aboutSection);
});

// JavaScript for adding 'animated' class when the section is visible
document.addEventListener("DOMContentLoaded", function () {
  var worksSection = document.querySelector(".works");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          worksSection.classList.add("animated");
        }
      });
    },
    { threshold: 0.5 }
  ); // Adding threshold: 0.5
  observer.observe(worksSection);
});

document.addEventListener("DOMContentLoaded", function () {
  var skillsSection = document.querySelector("#skills");
  var bars = document.querySelectorAll(".bars");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        skillsSection.classList.add("skills-in-view");
        animateBars();
      } else {
        skillsSection.classList.remove("skills-in-view");
      }
    });
  });

  observer.observe(skillsSection);

  function animateBars() {
    bars.forEach(function (bar) {
      var percentage = bar.querySelector(".info span:last-child").textContent;
      bar.style.opacity = 1;
      bar.style.transform = "translateY(0)";
      bar.querySelector(".line").style.width = percentage;
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var projectsSection = document.querySelector(".projects");
  var cards = document.querySelectorAll(".card");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
          projectsSection.classList.add("projects-in-view");
          animateTitle();
          animateCard(index);
        } else {
          projectsSection.classList.remove("projects-in-view");
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(projectsSection);

  function animateTitle() {
    projectsSection.querySelector(".title").style.animation =
      "popup 1s forwards";
  }

  function animateCard(index) {
    var delay = index * 100; // Adjust the delay based on your preference
    setTimeout(function () {
      cards[index].style.animation = "scaleUp 0.5s forwards";
    }, delay);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var resumeSection = document.querySelector("#resume");
  var elementsToAnimate = document.querySelectorAll(
    "#resume .title, #resume .edu-exp, #resume .heading-text, #resume .education-list, #resume .experience-list"
  );

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          resumeSection.classList.add("resume-in-view");
          animateElements();
        } else {
          resumeSection.classList.remove("resume-in-view");
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(resumeSection);

  function animateElements() {
    elementsToAnimate.forEach(function (element, index) {
      var delay = index * 100; // Adjust the delay based on your preference
      setTimeout(function () {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
      }, delay);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var contactSection = document.querySelector("#contact");
  var title = document.querySelector("#contact .title");
  var leftColumn = document.querySelector("#contact .column.left");
  var rightColumn = document.querySelector("#contact .column.right");
  var buttonArea = document.querySelector("#contact .button-area");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          contactSection.classList.add("contact-in-view");
          animateColumns();
        } else {
          contactSection.classList.remove("contact-in-view");
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(contactSection);

  function animateColumns() {
    title.style.opacity = 1;
    title.style.transform = "translateY(0)";

    setTimeout(function () {
      leftColumn.style.opacity = 1;
      leftColumn.style.transform = "translateY(0)";
    }, 500); // 1 second delay

    setTimeout(function () {
      rightColumn.style.opacity = 1;
      rightColumn.style.transform = "translateY(0)";
    }, 1000); // 2 seconds delay

    setTimeout(function () {
      buttonArea.style.opacity = 1;
      buttonArea.style.transform = "translateY(0)";
    }, 1500); // 3 seconds delay
  }
});

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Name: ${fullName.value} <br> Email: ${email.value}<br>Phone Number: ${phone.value}<br>Subject: ${subject.value}<br>Message: ${mess.value} `;
  Email.send({
    SecureToken: "3aa07471-752e-4a6a-b1dd-fa6054ff0893",
    To: "sainathsmart1234@gmail.com",
    From: "sainathsmart1234@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex =
    /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2, 3})?$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerHTML = "Enter a Valid Email";
    } else {
      errorTxtEmail.innerHTML = "Email can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !mess.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});
