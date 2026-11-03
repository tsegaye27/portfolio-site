# Tsegaye Talegngeta

Portfolio of Tsegaye Talegngeta, backend (Go) and full-stack developer in Addis Ababa.
Live at [tsegaye.dev](https://tsegaye.dev).

The site is a filing cabinet: folder tabs for Experience, Projects, About and Contact, tied to a small isometric studio built in pure CSS 3D. Click a room and the character walks there; drag the furniture around. Chatty, the chat button in the corner, answers questions about my work.

## Stack

- Next.js 16 (app router), React 19, TypeScript, Tailwind CSS v4
- Chatty: a RAG route (`src/app/api/chatty/route.ts`) on the Gemini API. It embeds `knowledge/*.md` plus the site content, retrieves the closest chunks for each question and answers with Flash-Lite. If Gemini is unavailable it falls back to scripted answers.

## Run it

```sh
npm install
cp .env.example .env   # add GEMINI_API_KEY from Google AI Studio
npm run dev
```

Without a key, Chatty still works with its scripted answers.

- `npm test` runs the unit tests (Node's built-in runner).
- Site content lives in `src/lib/content.ts`.
- To teach Chatty something new, add a Markdown file to `knowledge/`.

## Contact

ttalegn29@gmail.com · [LinkedIn](https://linkedin.com/in/tsegaye-talegngeta27) · [GitHub](https://github.com/tsegaye27)
