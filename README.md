# Azure Certificate Study App

A frontend-only practice app for Azure certification prep.
Question sets are bundled locally; progress is saved in your browser via
localStorage. No backend, no network calls.

## Run

    npm install
    npm run dev      # start the Vite dev server
    npm run build    # type-check + production build into dist/
    npm run preview  # preview the production build

Open the URL printed by the dev server (default http://localhost:5173).

## Deploy to GitHub Pages

This repo includes a workflow at `.github/workflows/deploy.yml` that builds and
deploys the app to GitHub Pages whenever you push to the `main` branch.

1. Push this project to a GitHub repository.
2. In GitHub, open Settings > Pages.
3. Under Build and deployment, set Source to `GitHub Actions`.
4. Push to `main` (or run the workflow manually from the Actions tab).

The workflow sets `VITE_BASE_PATH` automatically to your repository name so the
built asset URLs work on Pages.

## What is inside

- Certificate selector (Settings) to switch between AI-901 and AZ-204.
- Dashboard - cards due now, status breakdown (new / learning / review / mastered),
  attempt and accuracy bars, quick links.
- Learn - work through new questions.
- Review - an Anki-style spaced-repetition queue; missed cards return sooner.
- Exam - timed, scored, exam-style simulation with a question navigator and
  post-exam answer review. Length and time are configurable.
- Browse - search and filter every question by topic, type, and status.
- Settings - study/exam preferences, light/dark/system theme, and reset actions.

## Question types

Single choice, multiple choice, hotspot "complete the sentence", and Yes/No
statement grids. Each question is graded and shows an explanation.

## Answer keys

Where the source material included an official answer, the question uses it.
Where the source withheld a key (some hotspot items), the answer was supplied
from Azure AI domain knowledge and the card shows an "expert key" badge.

## Data and privacy

Everything lives in your browser. Use Settings > Reset to clear progress
(keeping preferences) or reset everything.

## Structure

    src/
      components/   Layout, QuestionCard, StudySession
      pages/        Dashboard, Learn, Review, Exam, Browse, SettingsPage
      services/     storage (localStorage), scheduler (SRS), grading
      hooks/        useAppData (context + persistence)
      data/         certificates + question banks
      types/        shared TypeScript types
