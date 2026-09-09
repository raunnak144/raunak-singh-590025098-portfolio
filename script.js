const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent = "Thanks! Your message has been received.";
    contactForm.reset();
});

const downloadDocumentation = document.getElementById("downloadDocumentation");

if (downloadDocumentation) {
    downloadDocumentation.addEventListener("click", function (event) {
        event.preventDefault();

        const documentation = `PERSONAL PORTFOLIO WEBSITE — DOCUMENTATION

1. MY DETAILS

Name: Raunak Singh
Roll Number: 590025098
Batch: 5 Core
Date: 9 September 2026


2. TEMPLATE / STARTING POINT USED

Starting point: Built from scratch with AI assistance.

No ready-made website template or copied portfolio boilerplate was used as the starting point. The website was structured specifically for this assignment using HTML5, CSS3 and JavaScript.


3. AI TOOLS USED

ChatGPT

Used for:
- Planning the portfolio structure and sections.
- Generating and refining the HTML structure.
- Generating CSS for the layout and responsive design.
- Adding simple JavaScript interactions.
- Creating the documentation.
- Updating the portfolio as personal information, internship details, certificate and GitHub projects were provided.
- Checking that the assignment requirements were covered.

No other AI tool was used to generate the website code.


4. PROMPTS USED TO GENERATE THE UI / CODE

Portfolio structure:
"Create a simple, modern and responsive personal portfolio website for a college student using only HTML5, CSS3 and JavaScript. It must contain a header/navigation, hero section with a call-to-action, About Me section with skills, at least three project cards, a Contact section and a footer."

Responsive design:
"Make the portfolio responsive for both desktop and mobile screens. Use a mobile navigation menu and responsive grids without using external frameworks."

JavaScript:
"Add simple beginner-friendly JavaScript for a mobile menu toggle and a contact form submission message. Keep the code easy to understand."

Documentation:
"Create concise documentation for the portfolio explaining the starting point, AI tool used, prompts, development method and GitHub/live links."

Documentation download requirement:
"Add a Download Documentation button at the bottom (footer) of your site. When clicked, it should download a documentation file (PDF/Markdown/.txt) that includes: 1. Your details — name, roll number/batch, date. 2. Template / starting point used (from scratch, a template, or AI boilerplate — with source). 3. AI tools used and what you used each for. 4. The exact prompts you used to generate the UI/code. 5. Method / approach — how you built it step by step. 6. Live link + GitHub repo link."


5. METHOD / APPROACH

1. Identified the assignment requirements and planned the main sections.
2. Created the page structure using semantic HTML5 elements.
3. Added the hero section with my name, profile image and introduction.
4. Added an About section with my skills.
5. Added my actual learning/project work:
   - 100 Days of Code in C — Semester 1
   - Men's Mental Health App — Semester 1
   - DSA 100 Days of Code — Semester 2
6. Added my SRIJAN Social Internship experience.
7. Added the GS3 Certificate of Completion and certificate image.
8. Added contact information, GitHub and LinkedIn.
9. Added CSS for desktop, mobile and responsive layouts.
10. Added JavaScript for the mobile menu and contact-form confirmation.
11. Added a JavaScript-generated documentation download so the browser downloads the file directly.
12. The complete folder can be uploaded to a public GitHub repository and hosted using GitHub Pages.


6. LIVE LINK + GITHUB REPO LINK

Live Website:
To be added after enabling GitHub Pages.

Portfolio Repository:
To be added after creating the public portfolio repository.

GitHub Profile:
https://github.com/raunnak144

LinkedIn:
https://www.linkedin.com/in/raunak-singh-53091a375

Project Repositories:
100 Days of Code in C — Semester 1:
https://github.com/raunnak144/100-days-of-code

Men's Mental Health App — Semester 1:
https://github.com/raunnak144/mental-health.c

DSA 100 Days of Code — Semester 2:
https://github.com/raunnak144/DSA-100-DAYS-OF-CODE


7. INTERNSHIP & CERTIFICATE

SRIJAN Social Internship — Community Research & Sustainable Development

A six-week internship focused on understanding community challenges through the lens of the UN Sustainable Development Goals. I conducted research, surveys and field-based activities across five SDGs, analysed community-level findings, and documented my observations through structured reports.

GS3 Certificate:
Certificate of Completion from the Global Society of Social Soldiers (GS3), confirming completion of research-based projects from June 15, 2026 to July 31, 2026.
`;

        const blob = new Blob([documentation], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "Raunak_Singh_Documentation.txt";
        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(function () {
            URL.revokeObjectURL(url);
        }, 1000);
    });
}
