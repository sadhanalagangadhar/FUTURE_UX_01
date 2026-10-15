// Small progressive-enhancement interactions for the NeatNest concept.
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
}
const quoteForm = document.querySelector("#quoteRequest");
if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!quoteForm.reportValidity()) return;
    const success = document.querySelector("#formSuccess");
    if (success) {
      success.hidden = false;
      success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    quoteForm.reset();
  });
}
