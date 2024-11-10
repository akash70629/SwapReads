document.addEventListener("DOMContentLoaded", function () {
  const faqContainers = document.querySelectorAll(".faq-container");

  faqContainers.forEach((container) => {
    const icon = container.querySelector(".icon");
    const answers = container.querySelector(".answers");

    container.addEventListener("click", (event) => {
      // Prevent the click event from bubbling up to the document
      event.stopPropagation();

      if (icon.classList.contains("active")) {
        icon.classList.remove("active");
        answers.style.maxHeight = null;
      } else {
        icon.classList.add("active");
        answers.style.maxHeight = answers.scrollHeight + "px";
      }
    });
  });

  // Close all FAQs when clicking outside
  document.addEventListener("click", () => {
    faqContainers.forEach((container) => {
      const icon = container.querySelector(".icon");
      const answers = container.querySelector(".answers");

      if (icon.classList.contains("active")) {
        icon.classList.remove("active");
        answers.style.maxHeight = null;
      }
    });
  });
});