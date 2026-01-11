# 🔥 Polymarket Dashboard

En modern dashboard för att visa hetaste bets och trending markets från Polymarket.

![Polymarket Dashboard](https://img.shields.io/badge/Polymarket-Dashboard-blueviolet)

## ✨ Features

- 🔥 **Hetaste bets** - De 5 mest omsatta marknaderna just nu
- 📈 **Trending bets** - De 8 mest intressanta marknaderna
- 💰 **Live-data** - Uppdateras automatiskt var 3:e minut
- 📊 **Sannolikheter** - Ja/Nej odds med färgkodning
- 📱 **Responsiv** - Fungerar perfekt på mobil och desktop
- 🔍 **Debug-läge** - Detaljerad logging av alla API-anrop

## 🚀 Kom igång

### Lokal installation

```bash
# Klona repot
git clone https://github.com/istvanszasz/polymarket.git
cd polymarket

# Installera dependencies
npm install

# Starta servern
npm start
```

Öppna sedan http://localhost:3000 i din webbläsare! 

### Deploy till Vercel

**Via GitHub:**
1. Pusha koden till GitHub
2. Gå till [vercel.com](https://vercel.com)
3. Logga in med GitHub
4. Klicka "Add New" → "Project"
5. Välj `istvanszasz/polymarket`
6. Klicka "Deploy" ✨

**Via CLI:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript, HTML5, CSS3
- **Backend:** Node.js, Express
- **API:** Polymarket Gamma API
- **Deployment:** Vercel

## 📡 API

Dashboarden hämtar data från Polymarket's publika API: 
- Endpoint: `https://gamma-api.polymarket.com/events`
- Via proxy på `/api/events` för att lösa CORS-problem

## 🎨 Features i detalj

### Hot Markets
Visar de 5 mest omsatta marknaderna sorterade efter 24h volym.

### Trending Markets
Visar de 8 mest intressanta marknaderna baserat på en kombination av likviditet (60%) och volym (40%).

### Auto-refresh
Dashboarden uppdaterar automatiskt data var 3:e minut. 

## 📄 Licens

MIT License - fritt att använda och modifiera! 