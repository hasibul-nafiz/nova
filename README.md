# Nova

A kids' learning app built with Expo and React Native (Android). The home screen
lets a child pick a mission buddy — Breeze Buddy (age 5–7), Comet Scout (age
8–10) or Glow Puff (age 11–12) — and no personal information is required.

## Tech stack

- Expo SDK 58, React Native 0.88, React 19, TypeScript (strict)
- Expo Router (file-based routing, `src/app`)
- `expo-image`, `expo-linear-gradient`, Nunito via `@expo-google-fonts/nunito`

## Getting started

Requirements: Node.js, npm, and either an Android emulator or the Expo Go app
on an Android device.

```bash
npm install
npx expo start --android   # opens on a running emulator
```

To use a physical device, run `npx expo start` and scan the QR code with Expo
Go. The home screen is the app's initial route, so it opens on launch.

Other useful commands:

```bash
npx tsc --noEmit    # typecheck
npx expo lint       # lint
npx expo-doctor     # check dependency and config health
```

## Project structure

```
src/
├── app/                 # Routes (Expo Router). index.tsx is the home screen
├── components/
│   ├── ui/              # Generic building blocks: Button, TextField, Pill, GradientBackground
│   ├── brand/           # Logo
│   ├── buddy/           # BuddyCard, BuddyList
│   └── home/            # Screen sections: HomeHeader, IdForm, BuddyPicker
├── data/                # Static data (buddies)
├── hooks/               # useResponsive
├── theme/               # Colour, typography and spacing tokens
└── types/               # Shared types
assets/images/buddies/   # Buddy illustrations
```

Import from `src` with the `@/` alias, e.g. `import { colors } from '@/theme'`.

## Design notes

- **Responsive:** `useResponsive` derives card width, gaps and font sizes from
  the window width, so the layout adapts to phones, foldables and tablets, and
  to rotation. Content is capped at 960dp and scrolls on short screens.
- **Theme tokens:** colours, fonts and spacing live in `src/theme`; avoid
  hard-coded values in components.
- **Components** take data and callbacks through props; state is owned by
  `BuddyPicker`.

## Current status

This is the UI only. Selecting a buddy highlights it and enables the
`Continue` button, but `save` and `Continue` are not wired up yet and nothing is
persisted. The buddy images are placeholders cropped from a design mock-up;
replace the files in `assets/images/buddies/` with the originals.
