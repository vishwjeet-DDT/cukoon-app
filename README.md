# Cukoon App — Expo React Native Project

Yeh project aapke uploaded demo screens (Onboarding, Home, Locate Pod, AI Assistant,
Resources, About Us) ke layout/theme ko match karta hai. Isse aap GitHub par push karke
free mein APK build kar sakte ho — koi EAS account/paisa nahi chahiye.

## Folder structure
```
cukoon-app/
├─ App.js                     # Bottom tab navigation setup
├─ app.json                   # App name, package id (org.ourikigai.cukoon)
├─ package.json
├─ babel.config.js
├─ src/
│  ├─ theme.js                # Colors (pink theme)
│  ├─ components/Header.js
│  └─ screens/
│     ├─ HomeScreen.js
│     ├─ LocateScreen.js
│     ├─ AssistantScreen.js
│     ├─ SupportScreen.js
│     └─ ProfileScreen.js
└─ .github/workflows/build-apk.yml   # GitHub Actions — auto APK build
```

## Option A — APK banao GitHub Actions se (recommended, no local setup)

1. Ek naya GitHub repo banao (e.g. `cukoon-app`), is folder ka pura content push kar do:
   ```bash
   cd cukoon-app
   git init
   git add .
   git commit -m "Cukoon app initial"
   git branch -M main
   git remote add origin https://github.com/ddtsoftwarepvtltd/cukoon-app.git
   git push -u origin main
   ```
2. GitHub repo khol ke **Actions** tab pe jao — workflow "Build Cukoon APK" automatically
   chalega push par (ya "Run workflow" button se manually trigger karo).
3. Build complete hone ke baad (~5-8 min), us run ke andar **Artifacts** section mein
   `cukoon-debug-apk` milega — download karo, usme `app-debug.apk` hoga.
4. Yeh APK seedha kisi Android phone par install ho jayega (Settings > Install unknown apps
   allow karna hoga, kyunki yeh debug build hai, Play Store se nahi).

> Yeh workflow `expo prebuild` + `gradlew assembleDebug` use karta hai — koi Expo/EAS login
> ya credentials ki zaroorat nahi. 100% free GitHub Actions minutes (public repo) mein build
> ho jata hai.

## Option B — Apne Ubuntu machine par local build

```bash
cd cukoon-app
npm install
npx expo prebuild -p android
cd android
./gradlew assembleDebug
# APK yahan milega: android/app/build/outputs/apk/debug/app-debug.apk
```

Requirements: Node.js 20+, JDK 17, Android SDK (agar local build karna hai). GitHub Actions
route mein yeh sab already configured hai, isliye Option A sabse aasan hai.

## Release APK (Play Store ke liye, signed)

Jab aap production/signed APK ya AAB chahiye (Play Store upload ke liye), tab:

1. Signing keystore generate karo:
   ```bash
   keytool -genkeypair -v -storetype PKCS12 -keystore cukoon-release.keystore \
     -alias cukoon -keyalg RSA -keysize 2048 -validity 10000
   ```
2. `android/gradle.properties` mein keystore path/passwords add karo aur
   `android/app/build.gradle` mein `signingConfigs.release` set karo (standard RN process —
   docs: https://reactnative.dev/docs/signed-apk-android).
3. Workflow mein `assembleDebug` ko `assembleRelease` (APK) ya `bundleRelease` (AAB, Play
   Store ke liye preferred) se replace kar do, aur keystore ko GitHub Secrets ke through
   pass karo (base64 encode karke).

Agar chaho toh main yeh signed-release workflow bhi bana ke de sakta hoon — bas keystore
alias/password decide kar lo.

## Design match

- Colors: Primary pink `#E6338A`, light pink background `#FDE6F0` — same as demo screens.
- Bottom nav: Home, Locate Pod, (center pink circle) AI Assistant, Support, Profile —
  matches screen 2 of your PDF exactly.
- Screens included: Home (banner, quick access grid, impact banner), Locate Pod (map +
  pod card + directions), AI Assistant (chat intro + topics), Resources/Support
  (categories + featured + resource list), About Us (foundation + trustees).
- Onboarding/language-select carousel is in the HTML prototype; add it as a screen in this
  RN app the same way if you want it in the APK too — just say the word and I'll add it.

## Next steps you may want
- Real logo/images instead of emoji placeholders (drop PNGs in `assets/` and swap in).
- Google Maps integration on Locate Pod screen (`react-native-maps`).
- Real chat backend for AI Assistant (OpenAI/Claude API call).
- App icon + splash screen assets (`assets/icon.png`, `assets/splash.png`, referenced in `app.json`).
