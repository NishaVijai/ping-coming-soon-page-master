# Frontend Mentor – Ping Coming Soon Page

This is my solution to the **Ping Coming Soon Page** challenge on Frontend Mentor.  
The goal of this challenge is to build a responsive landing page with form validation and accessible UI behavior.

👉 **Challenge link:**  
https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da

---

## Table of contents

- [Overview](#overview)
  - [Preview](#preview)
  - [Screenshot](#screenshot)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI collaboration](#ai-collaboration)
- [Author](#author)

---

## Overview

### Preview

https://nishavijai.github.io/ping-coming-soon-page-master/

---

### Screenshot

![Ping coming soon page screenshot](./screenshot.jpg)

---

### The challenge

Users should be able to:

- View the optimal layout depending on their device’s screen size
- See hover and focus states for all interactive elements
- Submit their email address using the form
- Receive an error message when:
  - The input field is empty  
    **Message:** “Whoops! It looks like you forgot to add your email”
  - The email format is invalid  
    **Message:** “Please provide a valid email address”
- See the error styling removed as soon as they start typing again

---

## My process

### Built with

- Semantic HTML5
- CSS custom properties (variables)
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript (ES modules)
- Responsive form validation

---

### What I learned

During this project, I practiced and reinforced:

- Writing **mobile-first, responsive CSS**
- Using **CSS Grid** to control layout on larger screens
- Handling **form validation** with JavaScript
- Dynamically creating and removing error messages
- Clearing validation errors as soon as the user starts typing
- Improving accessibility with:
  - Screen-reader-only labels
  - Focus and hover states
  - Clear visual error feedback

Example of dynamic error handling:

```js
formInput.addEventListener("input", () => {
  clearErrorMessage();
});
