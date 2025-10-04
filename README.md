# HacktoMatch Frontend

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
[**Aditya Verma**](https://github.com/AdityaVerma-1708) and [**Kritika Taank**](https://github.com/kritikataank)