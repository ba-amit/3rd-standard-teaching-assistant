// Reading text for the reading view. Loaded by index.html and cached by the
// service worker, so it ships with the app.
//
// Paste each chapter's paragraphs (or verses) here. A local chapters.js, if
// present, overrides a chapter with the same id — and any chapter still
// holding a <<PASTE ...>> placeholder is skipped, never shown to the kid.
//
// A paragraph is either a plain string, or an object with infographics:
//   { text: "...", side: "🦅" }                       picture beside the text
//   { text: "...", figure: { img: "pics/nest.png", alt: "nest" },
//     caption: "The nest in the school wall" }         figure under the text
// `side` / `figure` / `pic` take an emoji string or { img, alt }.
// A chapter can also carry a picture strip: art: [{ pic: "🦅", label: "..." }]
window.ENGLISH_CHAPTERS = [
  {
    id: "ultapur",
    title: "Day for Night in Ultapur",
    author: "Jayanth Kodkani",
    type: "Story",
    art: [
      { pic: "👑", label: "Badshah Batata" },
      { pic: "🌇", label: "wake at sunset" },
      { pic: "🌞", label: "sleep at sunrise" },
      { pic: "🌑", label: "solar eclipse" },
      { pic: "🦉", label: "owls hooted" }
    ],
    paragraphs: [
      "<<PASTE PARAGRAPH 1 OF CHAPTER 1 HERE>>",
      "<<PASTE PARAGRAPH 2 ...>>"
    ]
  },
  {
    id: "windhover",
    title: "Safe Again",
    author: "Alan Brown",
    type: "Story",
    art: [
      { pic: "🦅", label: "windhover (kestrel)" },
      { pic: "🏫", label: "hole in the school wall" },
      { pic: "🐭", label: "mice for the chicks" },
      { pic: "🙋", label: "the girl who fed the birds" },
      { pic: "🪺", label: "safe again" }
    ],
    paragraphs: [
      "<<PASTE PARAGRAPH 1 OF CHAPTER 2 HERE>>",
      "<<PASTE PARAGRAPH 2 ...>>"
    ]
  }
];
