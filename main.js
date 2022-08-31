"use strict";

const el = document.getElementById("navbar-toggle");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");

const handleToggle = () => {
	navbar.classList.toggle("active");
	overlay.classList.toggle("active");
};

el.addEventListener("click", () => handleToggle());
