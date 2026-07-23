/* ==========================================================================
   Eliza's Web Design - Interactive Application Logic
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    const previewButtons = document.querySelectorAll('.open-preview');
    const modalCloseButtons = document.querySelectorAll('[data-close="true"]');
    const mainContactForm = document.getElementById('mainContactForm');
    const quickDemoForm = document.getElementById('quickDemoForm');
    // 1. Mobile Navigation Menu Toggle
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.className = 'fa-solid fa-xmark';
                } else {
                    icon.className = 'fa-solid fa-bars';
                }
            }
        });
        // Close menu when clicking link
