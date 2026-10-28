# Little Maths

A buildless, responsive maths website for Grades 1–5.

- Homepage: Home page and Grade navigation, with a dropdown linking all five grades.
- Each grade has its own URL with Content, Exercises, and Feedback sections.
- Each grade contains four short lessons and five original multiple-choice questions.
- Exercises have optional hints, answer checking, explanations, and a final score.
- Progress and reflections are stored locally in the visitor's browser.
- Reflections are not transmitted to teachers or stored on a server.
- All questions are original, not reproduced from Cambridge books. No official Cambridge affiliation is claimed.

Regenerate HTML after editing build-pages.mjs:

    node build-pages.mjs

Preview:

    python3 -m http.server 4173 --directory dist --bind 127.0.0.1

No dependency installation or application build is required.

## Downloaded website package — 28 October 2026

This folder includes all website code, illustrations, and question data.

- dist/index.html: homepage
- dist/grade-1/ through dist/grade-5/: the five grade pages
- dist/assets/styles.css: layout, colours, and responsive styling
- dist/assets/app.js: navigation, exercises, scoring, and local progress
- dist/assets/data.js: all lessons, questions, answers, hints, and explanations
- dist/assets/hero.svg and favicon.svg: original illustrations
- build-pages.mjs: optional HTML page generator, requiring Node.js

To run the website:

1. Open Terminal in this folder.
2. Run: python3 -m http.server 4173 --directory dist --bind 127.0.0.1
3. Visit http://localhost:4173 in your browser.
4. Press Control+C in Terminal to stop the server.

Use a local web server because the website uses root-relative links. Opening
index.html directly as a file will not load every asset or grade route correctly.

To host the website elsewhere, upload the contents of dist as the site's root.
No installation or build is needed. Fonts have system fallbacks when offline.
Browser-saved learner progress and reflections are not included in this package.
