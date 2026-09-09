# Personal Portfolio Website — Documentation

## 1. My Details

- **Name:** Raunak Singh
- **Roll Number:** 590025098
- **Batch:** 5 Core
- **Date:** 9 September 2026

## 2. Template / Starting Point Used

**Starting point:** Built from scratch with AI assistance.

No ready-made website template or copied portfolio boilerplate was used as the starting point. The website was structured specifically for this assignment using HTML5, CSS3 and JavaScript.

## 3. AI Tools Used

### ChatGPT
**Used for:**
- Planning the portfolio structure and sections.
- Generating and refining the HTML structure.
- Generating CSS for the layout and responsive design.
- Adding simple JavaScript interactions.
- Creating the documentation file.
- Updating the portfolio as personal information, internship details, certificate and GitHub projects were provided.
- Checking that the assignment requirements were covered.

No other AI tool was used to generate the website code.

## 4. Prompts Used to Generate the UI / Code

The main prompts/instructions used during development were:

### Portfolio structure
> Create a simple, modern and responsive personal portfolio website for a college student using only HTML5, CSS3 and JavaScript. It must contain a header/navigation, hero section with a call-to-action, About Me section with skills, at least three project cards, a Contact section and a footer.

### Responsive design
> Make the portfolio responsive for both desktop and mobile screens. Use a mobile navigation menu and responsive grids without using external frameworks.

### JavaScript
> Add simple beginner-friendly JavaScript for a mobile menu toggle and a contact form submission message. Keep the code easy to understand.

### Documentation
> Create concise documentation for the portfolio explaining the starting point, AI tool used, prompts, development method and GitHub/live links.

### Documentation download requirement
> Add a "Download Documentation" button at the bottom (footer) of your site. When clicked, it should download a documentation file (PDF/Markdown/.txt) that includes: 1. Your details — name, roll number/batch, date. 2. Template / starting point used (from scratch, a template, or AI boilerplate — with source). 3. AI tools used and what you used each for. 4. The exact prompts you used to generate the UI/code. 5. Method / approach — how you built it step by step. 6. Live link + GitHub repo link.

## 5. Method / Approach

1. Identified the assignment requirements and planned the main sections.
2. Created the page structure using semantic HTML5 elements such as `header`, `nav`, `main`, `section`, `article` and `footer`.
3. Added the hero section with my name, profile image and introduction.
4. Added an About section with my skills.
5. Added my actual learning/project work:
   - **100 Days of Code in C — Semester 1**
   - **Men's Mental Health App — Semester 1**
   - **DSA 100 Days of Code — Semester 2**
6. Added my **SRIJAN Social Internship** experience covering community research and sustainable development work across five SDGs.
7. Added the **GS3 Certificate of Completion** and included the certificate image in the repository.
8. Added my contact information, GitHub profile and LinkedIn profile.
9. Added CSS for the desktop layout, cards, buttons, spacing and responsive mobile layout.
10. Added JavaScript for the mobile navigation menu and contact-form confirmation.
11. Added the `documentation.md` file and connected it to the footer with the HTML `download` attribute.
12. Tested the website locally by opening `index.html` in a browser.
13. The complete folder can be uploaded to a public GitHub repository and hosted using GitHub Pages.

## 6. Live Link + GitHub Repo Link

### Live Website
**GitHub Pages live link:** To be added after the portfolio repository is created and GitHub Pages is enabled.

### GitHub Repository
**Portfolio repository:** To be added after the portfolio files are uploaded to the new public repository.

### GitHub Profile
https://github.com/raunnak144

### LinkedIn
https://www.linkedin.com/in/raunak-singh-53091a375

### Project Repositories

- **100 Days of Code in C — Semester 1:**  
  https://github.com/raunnak144/100-days-of-code

- **Men's Mental Health App — Semester 1:**  
  https://github.com/raunnak144/mental-health.c

- **DSA 100 Days of Code — Semester 2:**  
  https://github.com/raunnak144/DSA-100-DAYS-OF-CODE

## 7. Internship & Certificate

### SRIJAN Social Internship
**Community Research & Sustainable Development**

A six-week internship focused on understanding community challenges through the lens of the UN Sustainable Development Goals. I conducted research, surveys and field-based activities across five SDGs, analysed community-level findings, and documented my observations through structured reports.

### GS3 Certificate
The portfolio includes my Certificate of Completion from the Global Society of Social Soldiers (GS3). The certificate confirms completion of research-based projects with GS3 from June 15, 2026 to July 31, 2026.

The certificate image is stored in the project as `gs3-certificate.png`.

## 8. How to Run Locally

Keep all files in the same folder:

- `index.html`
- `style.css`
- `script.js`
- `documentation.md`
- `README.md`
- `gs3-certificate.png`
- `raunak-photo.png`

Then open `index.html` in a web browser.

## 9. Submission Note

Before final submission, create/upload the portfolio repository on GitHub and enable GitHub Pages. Then replace the two "To be added" entries in Section 6 with the actual live website URL and portfolio repository URL.

The footer's **Download Documentation** button is already wired to:

`documentation.md`

and uses:

```html
<a href="documentation.md" download class="download-btn">
    Download Documentation
</a>
```

Because the Markdown file is kept in the same repository as the website, the browser can download it directly.
