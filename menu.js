const hamburgerButton = document.getElementById("hamburgerButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownItems = document.querySelectorAll("#dropdownMenu a");

hamburgerButton.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "none" ? "block" : "none";
  // Toggle hamburger icon
  hamburgerButton.innerHTML =
    dropdownMenu.style.display === "none" ? "&#9776;" : "&#10006;";
});

dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Close dropdown menu
    dropdownMenu.style.display = "none";
    // Reset hamburger icon to default
    hamburgerButton.innerHTML = "&#9776;";

    // Mobile functionality
    dropdownItems.forEach((item) => {
      item.classList.remove("active");
    });
    // Add 'active' class to the clicked dropdown item
    item.classList.add("active");
    
});
});

// Desktop functionality
const desktopNavbar = document.getElementById("desktopNavbar");
const desktopNavItems = desktopNavbar.querySelectorAll("li");

desktopNavItems.forEach(item => {
    item.addEventListener("click", () => {
        // Remove 'active' class from all navigation items
        desktopNavItems.forEach(navItem => {
            navItem.classList.remove("active");
        });
        // Add 'active' class to the clicked navigation item
        item.classList.add("active");
    });
});
