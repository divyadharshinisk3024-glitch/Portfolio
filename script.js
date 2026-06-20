(function () {
  var toggle = document.getElementById("menuToggle");
  var sidebar = document.getElementById("mobileSidebar");
  var overlay = document.getElementById("sidebarOverlay");
  var closeBtn = document.getElementById("sidebarClose");
  var sidebarLinks = sidebar.querySelectorAll("a");

  function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("open");
    toggle.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
    sidebar.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    sidebar.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  toggle.addEventListener("click", function () {
    sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
  });

  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", closeSidebar);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSidebar();
  });
})();
