# Gujarat Darshan Pro - Setup Instructions

This is a React + TypeScript + Vite project for temple booking in Gujarat. Follow these steps to make it runnable.

## Prerequisites

You need to install Node.js first. Choose one of the following options:

### Option 1: Install Node.js (Recommended)
1. Download Node.js from https://nodejs.org/
2. Choose the LTS version (Long Term Support)
3. Run the installer and follow the setup wizard
4. Verify installation by opening a new terminal and running:
   ```bash
   node --version
   npm --version
   ```

### Option 2: Install Bun (Alternative)
1. Download Bun from https://bun.sh/
2. Follow the installation instructions for Windows
3. Verify installation by running:
   ```bash
   bun --version
   ```

## Setup Steps

### 1. Install Dependencies

After installing Node.js, open a terminal in the project directory and run:

```bash
# Using npm (comes with Node.js)
npm install

# OR using bun (if you installed Bun)
bun install
```

### 2. Environment Configuration

The project uses Supabase for backend services. I've already configured it to work with placeholder values, but for full functionality, you'll need to:

1. Create a `.env` file in the root directory
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key-here
```

**Note:** The app will work without these environment variables for basic functionality (viewing temples, UI interactions).

### 3. Run the Development Server

```bash
# Using npm
npm run dev

# OR using bun
bun run dev
```

The website will be available at `http://localhost:8080`

### 4. Build for Production

```bash
# Using npm
npm run build

# OR using bun
bun run build
```

## Project Features

- **Multi-language Support**: English, Hindi, and Gujarati
- **Dark/Light Theme**: Toggle between themes
- **Temple Information**: View details of 4 major Gujarat temples
- **Booking System**: Navigate to booking flow (requires Supabase for full functionality)
- **Responsive Design**: Works on desktop and mobile devices

## Available Temples

1. **Somnath Temple** - One of the twelve Jyotirlinga shrines
2. **Dwarkadhish Temple** - Ancient temple dedicated to Lord Krishna
3. **Ambaji Temple** - One of the 51 Shakti Peethas
4. **Pavagadh Temple** - Kalika Mata Temple (UNESCO World Heritage Site)

## Troubleshooting

### If you get "command not found" errors:
- Make sure Node.js is installed and added to your PATH
- Try restarting your terminal after installation
- On Windows, you might need to restart your computer

### If the build fails:
- Make sure all dependencies are installed: `npm install`
- Check that all image assets are present in `src/assets/`
- Verify TypeScript compilation: `npx tsc --noEmit`

### If Supabase features don't work:
- The app will still run for viewing temples
- For booking functionality, you'll need to set up a Supabase project and add the credentials to `.env`

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Main page components
├── data/               # Temple data and configurations
├── assets/             # Images and static assets
├── contexts/           # React contexts for state management
├── hooks/              # Custom React hooks
├── integrations/       # External service integrations (Supabase)
└── lib/                # Utility functions
```

The project is now ready to run! 🚀

