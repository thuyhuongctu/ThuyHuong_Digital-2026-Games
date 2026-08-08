# 🎮 ThuyHuong Digital 2026 — Games

**Vietnamese History Game Portal** ("Cổng Trò Chơi Sử Việt") — a collection of
web games by ThuyHuong Digital 2026. Every game is pure HTML5 (canvas 2D) with
**zero installation required**: open `index.html` in any browser, or play
online via GitHub Pages. Works on both desktop (keyboard) and mobile (touch).

The portal homepage arranges the games on a **historical timeline** (Vân Đồn
1149 → Bắc Hải Đảo 1780), styled with a Lý–Trần dynasty ceramic color palette
shared across the whole ecosystem. The portal is also a **PWA**: on mobile, an
**📲 Install to Home Screen** button appears — once installed, it runs
full-screen like a native app and **works offline** (service worker `sw.js` +
`manifest.webmanifest` + icon set in `icons/`).

## Games

| Game | Genre | Play |
|---|---|---|
| 🏴‍☠️ [**Bắc Hải Đảo** — Pirates of the Gulf of Tonkin](bac-hai-dao/) | Adventure / trading / naval combat | [`bac-hai-dao/index.html`](bac-hai-dao/index.html) |
| 🏮 [**Vân Đồn** — The First Trading Port](van-don/) | City building / port management | [`van-don/index.html`](van-don/index.html) |

### 🏴‍☠️ Bắc Hải Đảo — Pirates of the Gulf of Tonkin

A pirate adventure inspired by classic pirate-island games, but set
in an authentically Vietnamese world: the Gulf of Tonkin, 1780. Sail a
**bat-wing junk** among the limestone karsts of Hạ Long Bay, trade fish sauce,
silk, agarwood and pearls across six historic ports (Vân Đồn, Cát Bà, Cô Tô…),
sink **Tàu Ô** pirate ships, survive storms, meet the **Sacred Dragon of
Hạ Long**, and defeat the pirate lord **Hắc Giao** to be crowned *King of the
Northern Isles* 👑. Features four playable captains with distinct perks,
generative pentatonic background music, and full touch controls.

Detailed guide (in Vietnamese): [`bac-hai-dao/README.md`](bac-hai-dao/README.md)

### 🏮 Vân Đồn — The First Trading Port

A port-building game grounded in real history: in 1149, King Lý Anh Tông
issued a royal edict establishing Vân Đồn — Đại Việt's first international
trading port. Build piers to welcome merchant ships from **Song China, Japan,
Java and Siam**, open Chu Đậu pottery kilns, silk workshops and pearl rafts;
weather storms, repel Tàu Ô raiders, and raise the port from a small hamlet
to 👑 *the First Trading Port of Đại Việt*. Includes tiered building upgrades,
royal tribute quests, an in-game history codex, an achievements board, and a
separate challenge mode recreating the historic **Battle of Vân Đồn (1288)**,
where Trần Khánh Dư ambushed the Yuan grain fleet.

Detailed guide (in Vietnamese): [`van-don/README.md`](van-don/README.md)

## Play online (GitHub Pages)

The portal is published at:

**https://thuyhuongctu.github.io/ThuyHuong_Digital-2026-Games/**

Every push to `main` is deployed automatically within a couple of minutes.

## Technology

- Pure HTML5 + vanilla JavaScript (canvas 2D) — each game is a single
  self-contained `index.html`, no dependencies, no build step, runs offline
- Background music generated in real time with WebAudio on the Vietnamese
  **pentatonic scale** (đàn tranh-style plucked strings, đàn bầu-style pitch
  bends) — no external audio files
- Progressive Web App: installable, offline-capable, with app shortcuts
  jumping straight into each game

## Author & Contact

Created and maintained by **Do Thuy Huong** (Đỗ Thùy Hương) — ThuyHuong Digital.

📧 [thuyhuongctu@gmail.com](mailto:thuyhuongctu@gmail.com)

---
© 2026 Do Thuy Huong (ThuyHuong Digital) — personal project.
New games will be added throughout 2026.
