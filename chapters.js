// Chapter text overlay. Loaded after chapter.js and merged over it per
// chapter id, so anything filled in here wins; chapters still holding a
// <<PASTE ...>> placeholder are skipped and the chapter.js version shows.
//
// This file is committed to a PUBLIC repo — whatever is pasted below is
// published. Keep copyrighted reader text out of it.
window.ENGLISH_CHAPTERS = [
  {
    id: "ultapur",
    title: "Day for Night in Ultapur",
    author: "Jayanth Kodkani",
    type: "Story",
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
    paragraphs: [
      "<<PASTE PARAGRAPH 1 OF CHAPTER 2 HERE>>",
      "<<PASTE PARAGRAPH 2 ...>>"
    ]
  }
];
