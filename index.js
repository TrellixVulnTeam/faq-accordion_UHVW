"use strict";

const accordionHeaders = document.querySelectorAll(".accordion__header");
const cyberBox = document.querySelector(".cyberBox");
let isOpen;

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", () => {
    //////// CLOSE WHEN OTHER HEADER IS SELECTED ///////
    if (isOpen && isOpen !== accordionHeader) {
      isOpen.classList.remove("active");
      isOpen.nextElementSibling.style.maxHeight = "0";
    }

    accordionHeader.classList.toggle("active");
    const accordionBody = accordionHeader.nextElementSibling;

    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      isOpen = accordionHeader;
    } else {
      accordionBody.style.maxHeight = "0";
      accordionBody == null;
    }
  });

  accordionHeader.addEventListener("mouseenter", () =>
    cyberBox.classList.add("active")
  );
  accordionHeader.addEventListener("mouseleave", () =>
    cyberBox.classList.remove("active")
  );
});
