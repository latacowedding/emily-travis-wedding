// forest-lock.js
(function () {
  const UNLOCK_KEY = "forestUnlocked";
  const isUnlocked = sessionStorage.getItem(UNLOCK_KEY) === "true";

  // Pages that REQUIRE the forest to be unlocked
  const protectedPages = ["landing.html", "simple.html"];

  const currentPage = window.location.pathname.split("/").pop();

  if (protectedPages.includes(currentPage) && !isUnlocked) {
    window.location.href = "rsvp.html";
  }
})();
