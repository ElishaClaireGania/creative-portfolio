// Page Loading Screen
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    let pageName = "Home";

    if (path.includes("about")) pageName = "About";
    else if (path.includes("projects") || path.includes("works"))
      pageName = "Works";
    else if (path.includes("contact")) pageName = "Contact";

    const pageNameElement = document.getElementById("loadingPageName");
    if (pageNameElement) {
      pageNameElement.textContent = pageName;
    }

    setTimeout(function () {
      const loadingScreen = document.getElementById("page-loading");
      if (loadingScreen) {
        loadingScreen.classList.add("hidden");

        setTimeout(function () {
          loadingScreen.style.display = "none";
        }, 600);
      }
    }, 3000);
  });
})();
