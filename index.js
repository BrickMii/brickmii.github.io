// Samsung Internet Check
if (navigator.userAgent.match(/samsung/i)) {
    alert("Your browser (Samsung Internet) may not show this website correctly. Please consider using a standards-compliant browser instead.\n\nWe recommend Firefox, Microsoft Edge, or Google Chrome.");
}

// Menu Toggle
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Icon Buttons
youtubeIcon = document.getElementById("youtube_icon");
githubIcon = document.getElementById("github_icon");
websiteIcon = document.getElementById("website_icon")

youtubeIcon.onclick = () => {
    window.location = "https://youtube.com/@RealArslaanYT"
}

githubIcon.onclick = () => {
    window.location = "https://github.com/RealArslaanYT"
}

websiteIcon.onclick = () => {
    window.location = "https://realarslaanyt.github.io/"
}

// Hero Button Scrolling
try {
    heroButtonGuides = document.getElementById("heroButtonGuides");
    guidesHeading = document.getElementById("guidesHeading");
    
    heroButtonGuides.onclick = () => {guidesHeading.scrollIntoView();};
} catch {
     console.log("There was an error running the Hero Button Scrolling script, the user is most likely not on the homepage. Developers, ignore this message and continue.")
}