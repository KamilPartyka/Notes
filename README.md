# Notes App

A modern fullstack sticky notes experience with Appwrite backend power.

## 🚀 What it is

A sleek note-taking playground built with:

- **React 19** for the frontend
- **Vite** for fast development and build
- **Appwrite** for backend, auth, and  database storage

## ✨ Key features

- **Production database**: All notes are stored in a live Appwrite database.
- **Draggable notes**: Move notes freely across the screen using drag and drop.
- **Autosave**: Note content and position are saved automatically as you edit.
- **Color picker**: Customize the color of each note instantly.

## 🧩 Why it’s cool

This app is made for people who want a polished, interactive note board with persistent storage and instant updates. It’s ideal for:

- quick brainstorming sessions
- visual planning
- maintaining notes across devices

## 🛠️ Setup

### Prerequisites

- Node.js `v24.15.0`
- npm `v11.12.1`

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Appwrite

Set up an Appwrite project and create the following:

- a database
- a notes collection
- a document structure for note content, position, and color

Then add your Appwrite endpoint and project ID to your environment or config.

### 3. Run locally

```bash
npm run dev
```

Open the app at:

```bash
http://localhost:5173
```

## 📦 Available scripts

- `npm run dev` — start the development server
- `npm run build` — build the app for production
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint
