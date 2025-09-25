1️⃣ Personal Website / Portfolio (HTML, CSS, pure JS and Tailwind CSS)

Technical Documentation: Portfolio Website
This document provides a comprehensive overview of your personal portfolio website. The project is structured into three distinct files for optimal organization and maintainability:

index.html: Defines the web page's structure and content.

style.css: Contains custom styles and visual design rules.

script.js: Handles all interactive functionality and dynamic behavior.

This file separation is a standard development practice that promotes a clean, modular, and scalable codebase. It allows for independent updates to the site's structure, styling, or logic without affecting the other components.

index.html
This file serves as the skeleton of the website. It contains all the semantic HTML elements that make up the page's layout and content, from the navigation bar to the footer.

External Dependencies: The file links to several external libraries via CDN (Content Delivery Network) for enhanced functionality and styling:

Tailwind CSS: A utility-first CSS framework for rapid and responsive UI development.

Google Fonts: Used to import the custom fonts Delius and Tektur to give the site a unique typographic style.

Font Awesome: A library of icons used for social media links and the theme toggle button.

Tailwind Configuration: An internal <script> block configures the Tailwind CSS behavior, including enabling dark mode support and defining a custom color palette for consistent branding.

Semantic Structure: The page is organized using standard HTML5 tags (<header>, <main>, <footer>) and is divided into logical sections identified by id attributes (e.g., id="about", id="passions"). These IDs are crucial for the smooth scrolling navigation powered by JavaScript.

style.css
This file contains all the custom CSS rules that define the website's unique visual appearance, overriding or supplementing the default Tailwind classes.

Typography and Backgrounds: It sets the primary fonts for the body and headers and defines the hero section's background image and properties.

Smooth Scrolling: The html selector with scroll-behavior: smooth ensures a fluid animation when navigating between sections.

Profile Image Positioning: A custom class, .object-position-custom, was added to precisely center the profile image within its circular container, resolving the issue of the image being cut off.

script.js
This file is the engine of the website, bringing all the interactive elements to life.

Element Selection: All interactive elements, such as buttons and menu items, are selected at the top of the file for efficient event handling.

Theme Toggle: The code manages the light/dark mode functionality. It checks the user's system preference and local storage to apply the correct theme on page load. Clicking the button toggles the dark class on the <html> element and updates the user's preference in localStorage.

Mobile Menu: A simple event listener is attached to the hamburger icon. When clicked, it toggles the hidden class on the mobile menu, displaying or concealing the navigation links.

Scroll-to-Top Button: This script handles the functionality of the button that appears in the bottom-right corner. It listens for the scroll event and shows or hides the button based on the user's vertical position on the page. The click event listener on the button uses window.scrollTo() to smoothly animate the scroll to the top of the page, which fixes the previous bug.
