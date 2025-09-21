# LabelLift Music Dashboard 🎵

This is a mini music distribution dashboard built as a frontend assessment. The project is a Next.js application that allows users to view, upload, and see details for music tracks, all powered by a mock API.

---

## Features Completed ✅

- [cite_start]**Mock Authentication**: A simple, client-side login page to grant access to the dashboard. [cite: 10]
- [cite_start]**Dashboard Track List**: Displays a list of all music tracks in a clean, responsive table format. [cite: 11]
- [cite_start]**Dynamic Track Details**: Clicking a track takes the user to a unique page (`/track/[id]`) showing its specific details, fetched dynamically from the API. [cite: 15]
- [cite_start]**Track Upload Form**: A dedicated page (`/upload`) with a form to add a new track to the list. [cite: 13, 14]
- [cite_start]**Mock API Backend**: All data is served from a custom backend built with Next.js API Routes. [cite: 12, 21]
- [cite_start]**Responsive Design**: The entire application is mobile, tablet, and desktop friendly. [cite: 23, 61]
- [cite_start]**Session Persistence**: The user's login session is persisted using `localStorage` for a better user experience. [cite: 16]

---

## Tech Stack 🛠️

- [cite_start]**Framework**: Next.js 14 (App Router) [cite: 18]
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- [cite_start]**State Management**: React Hooks (`useState`, `useEffect`) [cite: 19, 22]
- [cite_start]**Routing**: Next.js File-based Routing (including Dynamic Routes) [cite: 20]
- **Linting**: ESLint

---

## Getting Started 🚀

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (version 18.x or later) and npm installed on your machine.

### Installation & Setup

1. Clone the repository:
   ```sh
   git clone [https://github.com/srishti-03/labellift-dashboard.git](https://github.com/srishti-03/labellift-dashboard.git)
   
2. Navigate to the project directory:
   cd your-repo-name
   
3. Install NPM packages:
   npm install

4. Run the development server:
   npm run dev

   Open http://localhost:3000 with your browser to see the result.
