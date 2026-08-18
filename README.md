<div align="center">

# 🎮 ThuyHuong Digital 2026 — Games

### Cổng Trò Chơi Sử Việt · *Vietnamese History Game Portal*

**Every game is a page of Đại Việt's history** — sail the Gulf of Tonkin as a
pirate captain, or raise Vân Đồn from a fishing hamlet into the kingdom's
first international trading port.

[![Release](https://img.shields.io/github/v/release/thuyhuongctu/ThuyHuong_Digital-2026-Games?label=release&color=b8860b)](https://github.com/thuyhuongctu/ThuyHuong_Digital-2026-Games/releases)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21850564.svg)](https://doi.org/10.5281/zenodo.21850564)
[![PWA](https://img.shields.io/badge/PWA-installable%20%C2%B7%20offline-5a3&logo=pwa)](https://thuyhuongctu.github.io/ThuyHuong_Digital-2026-Games/)
[![Made with three.js](https://img.shields.io/badge/3D-three.js-049EF4?logo=threedotjs&logoColor=white)](bac-hai-dao-3d/)

**[▶️ Play now — thuyhuongctu.github.io/ThuyHuong_Digital-2026-Games](https://thuyhuongctu.github.io/ThuyHuong_Digital-2026-Games/)**

*No installation, no account, no ads — runs in any browser, works offline once loaded.*

</div>

---

## Table of contents

- [Overview](#overview)
- [The games](#the-games)
- [Features](#features)
- [Getting started](#getting-started)
- [Publishing to app stores](#publishing-to-app-stores)
- [Technology](#technology)
- [Project structure](#project-structure)
- [How to cite](#how-to-cite)
- [Author & contact](#author--contact)

## Overview

**ThuyHuong Digital 2026 — Games** is a collection of history-themed HTML5
games set in authentically Vietnamese worlds, arranged on the portal
homepage as a **historical timeline** (Vân Đồn 1149 → Bắc Hải Đảo 1780) and
styled with a shared Lý–Trần dynasty ceramic color palette.

Each game is a single self-contained `index.html` — pure HTML5 and vanilla
JavaScript with no dependencies and no build step. The portal is a
**Progressive Web App**: installed to a phone's home screen, it runs
full-screen like a native app and works completely offline.

## The games

| | Game | Year | Genre | Play |
|---|---|---|---|---|
| 🏮 | **Vân Đồn** — The First Trading Port | 1149 | City building / port management | [Play](https://thuyhuongctu.github.io/ThuyHuong_Digital-2026-Games/van-don/) · [Guide](van-don/README.md) |
| 🏴‍☠️ | **Bắc Hải Đảo** — Pirates of the Gulf of Tonkin | 1780 | Adventure / trading / naval combat | [Play](https://thuyhuongctu.github.io/ThuyHuong_Digital-2026-Games/bac-hai-dao/) · [Guide](bac-hai-dao/README.md) |
| 🌊 | **Bắc Hải Đảo 3D** — full 3D edition | 1780 | Same world, three.js graphics | [Play](https://thuyhuongctu.github.io/ThuyHuong_Digital-2026-Games/bac-hai-dao-3d/) · [Guide](bac-hai-dao-3d/README.md) |

### 🏮 Vân Đồn — The First Trading Port

Grounded in real history: in 1149, King Lý Anh Tông issued a royal edict
establishing Vân Đồn — Đại Việt's first international trading port. Build
piers to welcome merchant ships from **Song China, Japan, Java and Siam**;
open Chu Đậu pottery kilns, silk workshops and pearl rafts; weather storms,
repel Tàu Ô raiders, and raise the port from a small hamlet to 👑 *the First
Trading Port of Đại Việt*. Includes tiered building upgrades, royal tribute
quests, an in-game history codex, an achievements board, and a challenge
mode recreating the historic **Battle of Vân Đồn (1288)**, where Trần Khánh
Dư ambushed the Yuan grain fleet.

### 🏴‍☠️ Bắc Hải Đảo — Pirates of the Gulf of Tonkin

A pirate adventure inspired by classic pirate-island games, set in the Gulf
of Tonkin, 1780. Sail a **bat-wing junk** among the limestone karsts of Hạ
Long Bay, trade fish sauce, silk, agarwood and pearls across six historic
ports (Vân Đồn, Cát Bà, Cô Tô…), sink **Tàu Ô** pirate ships, survive
storms, meet the **Sacred Dragon of Hạ Long**, and defeat the pirate lord
**Hắc Giao** to be crowned *King of the Northern Isles* 👑. Four playable
captains with distinct perks, generative pentatonic background music, and
full touch controls.

### 🌊 Bắc Hải Đảo 3D

The same pirate world rebuilt in **full 3D** with three.js (vendored in
`lib/three.min.js`, so the site still works offline): a chase camera behind
your junk, rolling waves, towering limestone karsts, 3D ports and enemy
ships, storm weather with rain, and the golden Dragon winding through the
air. All gameplay systems from the 2D version are intact — captains,
trading, combat, upgrades, music. The 2D version remains available side by
side.

## Features

- 🎮 **Three complete games** sharing one visual identity and world
- 📲 **Installable PWA** — *Install to Home Screen* button on mobile;
  runs full-screen and offline (service worker + web manifest + icon set)
- 🎵 **Generative music** — background scores composed in real time with
  WebAudio on the Vietnamese **pentatonic scale** (đàn tranh-style plucked
  strings, đàn bầu-style pitch bends); no audio files shipped
- 🖱️ **Desktop and mobile controls** — keyboard on desktop, full touch
  controls on phones and tablets
- 💾 **Local save games** — progress is stored on-device only; the project
  collects no data whatsoever ([privacy policy](privacy.html))
- 🏛️ **History inside the games** — real events, ports, trade goods and
  figures from Vietnamese history, with an in-game codex

## Getting started

**Play online** (recommended):
open **[the portal](https://thuyhuongctu.github.io/ThuyHuong_Digital-2026-Games/)**
in any modern browser. On a phone, tap **📲 Install to Home Screen** to get
the full-screen offline app.

**Run locally** — no build step required:

```bash
git clone https://github.com/thuyhuongctu/ThuyHuong_Digital-2026-Games.git
cd ThuyHuong_Digital-2026-Games
# open index.html directly, or serve the folder:
python3 -m http.server 8000   # then visit http://localhost:8000
```

> Serving over HTTP (rather than opening the file directly) is required for
> the service worker and PWA install prompt; the games themselves run
> either way.

**iOS**: open the portal in Safari → *Share → Add to Home Screen*.

## Publishing to app stores

The PWA can be wrapped and submitted to **Google Play (CH Play)** as a
Trusted Web Activity, with no changes to the game code. The complete
step-by-step guide (in Vietnamese) — PWABuilder, signing keys,
`assetlinks.json`, store listing, privacy policy and App Store notes — is
in **[`HUONG-DAN-PHAT-HANH.md`](HUONG-DAN-PHAT-HANH.md)**.

## Technology

| Layer | Choice |
|---|---|
| Games (2D) | HTML5 canvas 2D + vanilla JavaScript, one self-contained file per game |
| Game (3D) | [three.js](https://threejs.org/) r147, vendored locally for offline play |
| Audio | WebAudio API — real-time generative pentatonic music |
| App platform | Progressive Web App: web manifest, service worker (cache-first), app shortcuts |
| Distribution | GitHub Pages (web) · TWA wrap for Google Play · Safari home-screen install for iOS |
| Archival | Every GitHub release is archived on [Zenodo](https://doi.org/10.5281/zenodo.21850564) with a DOI |

There are **no dependencies, no frameworks and no build tools** — the
repository is the deployable site.

## Project structure

```
.
├── index.html               # Portal homepage (historical timeline)
├── van-don/                 # 🏮 Vân Đồn — port building (1149)
├── bac-hai-dao/             # 🏴‍☠️ Bắc Hải Đảo — pirate adventure, 2D (1780)
├── bac-hai-dao-3d/          # 🌊 Bắc Hải Đảo 3D — three.js edition
├── lib/three.min.js         # Vendored three.js r147
├── icons/                   # PWA icon set (192 / 512 / maskable)
├── manifest.webmanifest     # Web app manifest (+ per-game shortcuts)
├── sw.js                    # Service worker — offline cache
├── privacy.html             # Privacy policy (VI/EN) for store listings
├── HUONG-DAN-PHAT-HANH.md   # Release guide: CH Play / iOS / web / DOI
├── CITATION.cff             # Citation metadata (GitHub "Cite this repository")
└── .zenodo.json             # Archival metadata Zenodo reads on each release
```

## How to cite

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21850564.svg)](https://doi.org/10.5281/zenodo.21850564)

Author: **Do Thuy Huong** (Đỗ Thùy Hương), Vinh Long University of
Technology Education (VLUTE). Citation metadata lives in
[`CITATION.cff`](CITATION.cff) and [`.zenodo.json`](.zenodo.json) — GitHub's
**"Cite this repository"** button exports APA and BibTeX. Suggested
citation:

> Do, T. H. (2026). *ThuyHuong Digital 2026 — Games: Cổng Trò Chơi Sử Việt
> (Vietnamese History Game Portal)* [Computer software]. Zenodo.
> https://doi.org/10.5281/zenodo.21850564

The DOI above is the **concept DOI**: it represents all versions and always
resolves to the latest release. Every release is also archived on Zenodo
with its own version DOI:

| Version | DOI |
|---|---|
| v.1.2 (latest) | [10.5281/zenodo.21899097](https://doi.org/10.5281/zenodo.21899097) |
| v.1.1 | [10.5281/zenodo.21898774](https://doi.org/10.5281/zenodo.21898774) |
| v.1.0 | [10.5281/zenodo.21850565](https://doi.org/10.5281/zenodo.21850565) |

## Author & contact

Created and maintained by **Do Thuy Huong** (Đỗ Thùy Hương) — ThuyHuong
Digital, Vinh Long University of Technology Education (VLUTE).

📧 [thuyhuongctu@gmail.com](mailto:thuyhuongctu@gmail.com)

---

<div align="center">

© 2026 Do Thuy Huong (ThuyHuong Digital) — personal project.
New games will be added throughout 2026.

**⭐ If these games helped you teach or learn Vietnamese history, a star is appreciated!**

</div>
