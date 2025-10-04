# HacktoMatch

## 🚀 What is HacktoMatch?

HacktoMatch is your personal open-source matchmaker for Hacktoberfest! 🎉

Powered by AI and leveraging the Digital Ocean Gradient AI platform, HacktoMatch analyzes your GitHub profile—skills, languages, stars, and activity—and matches you with the best Hacktoberfest repositories to contribute to. No more endless searching or uncertainty—just instant, personalized recommendations to help you make an impact in the open-source world.

### ✨ Why is HacktoMatch Useful?

- 🔍 **Personalized Recommendations:** Get matched with repositories that fit your skills and experience, so your contributions matter.
- ⏱️ **Saves Time:** Skip the manual search—HacktoMatch finds the best projects for you in seconds.
- 🆕 **Beginner-Friendly:** New to open source? Get suggestions for beginner-friendly repos to kickstart your journey.
- 📋 **Transparent Matching:** Every recommendation includes the repo name, main language, direct GitHub link, and a short reason why it’s perfect for you.
- 🗂️ **Up-to-Date Knowledge Base:** The agent uses a live database of all Hacktoberfest-tagged repositories, so you always get current and relevant suggestions.
- 🤖 **Powered by Digital Ocean Gradient AI:** The agent is built and hosted using Digital Ocean's Gradient AI platform, ensuring robust, scalable, and intelligent matchmaking.

Whether you’re a seasoned developer or a first-time contributor, HacktoMatch helps you maximize your Hacktoberfest experience by connecting you with projects where your skills will shine! 🌟

> **Note:** The agent implementation and workflow details are documented in [AGENT.md](./AGENT.md).

This is the frontend for the HacktoMatch project, built with React and Vite.

## Features
- Simple UI to input a GitHub username.
- Calls a remote agent API to process the username and returns the result.
- Uses a bearer token for authentication, stored in a `.env` file.
- Displays the API response in a formatted way.

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- pnpm (or npm/yarn)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/KrishnenduDG/HacktoMatch.git
   cd HacktoMatch/frontend
   ```
2. Install dependencies:
   ```sh
   pnpm install
   # or
   npm install
   ```
3. Create a `.env` file in the `frontend` directory with the following content:
   ```sh
   VITE_AGENT_ACCESS_KEY=your_token_here
   VITE_AGENT_ENDPOINT=https://cqrjegghbiq2fth4scnwjbtf.agents.do-ai.run
   ```
   Replace `your_token_here` with your actual agent access key.

### Running the App
To start the development server:
```sh
pnpm dev
# or
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

## Usage
- Enter a GitHub username in the form.
- Submit to call the agent API.
- The API response will be shown below the form.

## Build
To build for production:
```sh
pnpm build
# or
npm run build
```

## Lint
To lint the code:
```sh
pnpm lint
# or
npm run lint
```

## Tech Stack
- React 19
- Vite
- TypeScript
- pnpm (or npm/yarn)

## Environment Variables
- `VITE_AGENT_ACCESS_KEY`: Bearer token for API authentication.
- `VITE_AGENT_ENDPOINT`: API endpoint URL.

## License
MIT

## Contributors
- [Aditya Verma](https://github.com/AdityaVerma-1708)
- [Kritika Taank](https://github.com/kritikataank)
- [Krishnendu Dasgupta](https://github.com/KrishnenduDG)
