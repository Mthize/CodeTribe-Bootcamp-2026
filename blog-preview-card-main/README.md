# Frontend Mentor — Blog Preview Card

![Design preview for the Blog preview card coding challenge](./preview.jpg)

This is my solution to the
[Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS).

---

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- View the blog preview card centred on the page
- See hover and focus states for the interactive card title

### Screenshot

![Blog Preview Card — desktop view](./preview.jpg)

### Links

- Solution URL: [github.com/Mthize](https://github.com/Mthize)
- Live Site URL: _(add deployed URL here once live)_

---

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

**Using CSS custom properties for the entire colour palette**

Defining every colour once in `:root` made it trivial to keep the badge,
the title hover state, and the page background all exactly the same yellow
without repeating the `hsl()` value.

```css
:root {
  --yellow: hsl(47, 88%, 63%);
  --white: hsl(0, 0%, 100%);
  --gray-500: hsl(0, 0%, 42%);
  --gray-950: hsl(0, 0%, 7%);
  --fw-medium: 500;
  --fw-bold: 800;
}
```

**Loading a local variable font with `@font-face`**

The project ships with the Figtree variable font. Declaring it once covers
every weight from 100 to 900, so no separate files are needed per weight.

```css
@font-face {
  font-family: "Figtree";
  src: url("./assets/fonts/Figtree-VariableFont_wght.ttf") format("truetype");
  font-weight: 100 900;
  font-style: normal;
}
```

**Creating the hard offset shadow**

The design uses a flat, offset box-shadow — zero blur, 8 px right and down —
rather than a soft drop-shadow. This gives the card its distinctive sticker look.

```css
.card {
  box-shadow: 8px 8px 0 var(--gray-950);
}
```

**Hover and focus state on the title**

Both states are required for keyboard and pointer users alike.

```css
.card__title:hover,
.card__title:focus {
  color: var(--yellow);
}
```

---

## Author

- GitHub — [Thapelo Mthize](https://github.com/Mthize)
- Frontend Mentor — [@Mthize](https://www.frontendmentor.io/profile/Mthize)
