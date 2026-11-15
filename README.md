# Photo Gallery

A responsive, single-column photo gallery built for the Exactspace Technologies ReactJS assignment. Photos are loaded from Lorem Picsum as you scroll, and each card has its own like counter.

## Features

- Picsum API integration with page-by-page loading
- Infinite scrolling powered by `IntersectionObserver`
- Individual, independent like counts
- Loading, empty, and retryable error states
- Lazy-loaded images and responsive styling

## Technology

React 18, Vite, JavaScript (ES modules), CSS, Fetch API, and Font Awesome.

## Project structure

```text
public/
src/
├── assets/
├── components/
│   ├── ErrorMessage/
│   ├── Loader/
│   ├── Navbar/
│   ├── PhotoCard/
│   └── PhotoGallery/
├── hooks/useInfiniteScroll.js
├── services/photoService.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
index.html
package.json
```

## Requirements

Node.js 18 or later and npm.

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`; to preview it locally, run `npm run preview`.

## API

The app requests `https://picsum.photos/v2/list?page={page}&limit=30`. The page number advances only after a successful non-empty response; an empty response ends the stream. Failed requests keep the current page available for retry.

## Screenshots

Add a screenshot of the running app here before publishing, for example:

```md
![Photo Gallery screenshot](./screenshots/gallery.png)
```
