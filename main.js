"use strict";

const el = document.getElementById("navbar-toggle");
const navbar = document.getElementById("navbar");

const handleToggle = () => {
	navbar.classList.toggle("active");
};

el.addEventListener("click", () => handleToggle());
