# How We Added Login to This App (Clerk)

Plain-English notes on what we did to let people sign up and log in. No coding knowledge needed to read this.

## What is Clerk?

Clerk is a ready-made "login system." Instead of building sign-up, login, and
password handling ourselves, we plug in Clerk and it handles all of that for us.

## The steps we took

1. **Installed Clerk's helper tool.**
   A small command-line program (the "Clerk CLI") that does the setup work for us.

2. **Signed in to Clerk.**
   A browser window opened and we logged in with a Clerk account so the tool
   knew who we were and which project to connect.

3. **Let the tool set everything up.**
   With one command, Clerk added the login pieces to our app automatically:
   - A **sign-in page** (where people log in)
   - A **sign-up page** (where new people create an account)
   - A **security guard** for the app that checks who is logged in
   - A **wrapper** around the app so every page knows about the logged-in user
   - A settings file with the app's Clerk connection details

4. **Added Clerk's extra guides.**
   We also pulled in a set of reference guides ("skills") so future work on
   Clerk features is easier.

## What this means for you

- New visitors can **create an account**.
- Returning visitors can **log in**.
- Once logged in, the app knows who they are.

## What's left to do

- **Start the app and try it** — sign up as the first test user to confirm
  login and sign-up both work.
- **Add the visible login/sign-up buttons** to the app's header if they aren't
  showing yet, so people can find them easily.
- **Match the look** of the login boxes to the rest of the app's style.

## Who to ask

This app uses [Clerk](https://clerk.com). Their dashboard
(https://dashboard.clerk.com) is where you manage users and settings.
