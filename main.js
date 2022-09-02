"use strict";

const el = document.getElementById("navbar-toggle");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
const navbarLinks = document.querySelectorAll(".navbar-link");

const handleToggle = () => {
	navbar.classList.toggle("active");
	overlay.classList.toggle("active");
};

Object.values(navbarLinks).map((link) => {
	link.addEventListener("click", () => handleToggle());
});
el.addEventListener("click", () => handleToggle());
overlay.addEventListener("click", () => handleToggle());

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
	window.scrollY > 400 ? header.classList.add("active") : header.classList.remove("active");
});
