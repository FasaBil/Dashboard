# MOA Dashboard - TXT Music 🎵

Dashboard musik interaktif untuk fans TXT (TOMORROW X TOGETHER) yang dibangun dengan React.js.

## 🚀 Fitur

- ✅ Navigasi antar halaman (Beranda, Album, Member, Genre)
- ✅ Pencarian lagu berdasarkan judul/album
- ✅ Filter berdasarkan genre dan member
- ✅ Responsive design (Mobile & Desktop)
- ✅ Sidebar navigation yang berfungsi
- ✅ Mobile menu toggle

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm start

# Build untuk production
npm run build
```

Aplikasi akan berjalan di `http://localhost:3000`

## 📁 Struktur Project

```
Dashboard/
├── public/
│   ├── index.html
│   └── [gambar album...]
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Sidebar.css
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── SongCard.jsx
│   │   ├── SongCard.css
│   │   ├── SongGrid.jsx
│   │   ├── SongGrid.css
│   │   ├── FilterSidebar.jsx
│   │   └── FilterSidebar.css
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AlbumPage.jsx
│   │   ├── MemberPage.jsx
│   │   └── GenrePage.jsx
│   ├── data/
│   │   └── songsData.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## 🔧 Teknologi

- **React** 18.2.0
- **React Router DOM** 6.20.0
- **Lucide React** (untuk icons)

## 🌐 Integrasi dengan Express.js Backend

### Cara Integrasi:

#### 1. **Setup Backend Express.js**

Buat folder terpisah untuk backend:

```bash
mkdir backend
cd backend
npm init -y
npm install express cors
```

Buat file `backend/server.js`:

```javascript
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/songs', (req, res) => {
  const songs = [
    { id: 1, title: 'Sugar Rush Ride', album: 'The Name Chapter: TEMPTATION', genre: 'Pop', members: ['Soobin', 'Yeonjun', 'Beomgyu', 'Taehyun', 'Huening Kai'], image: 'album-temptation.png' },
    // ... data lagu lainnya
  ];
  res.json(songs);
});

app.get('/api/songs/:id', (req, res) => {
  // Get single song by ID
  res.json({ id: req.params.id, title: 'Song Title' });
});

// Serve static React build (untuk production)
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

#### 2. **Update React untuk Fetch dari Backend**

Update `src/pages/HomePage.jsx`:

```javascript
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    // Fetch dari backend
    fetch('http://localhost:5000/api/songs')
      .then(res => res.json())
      .then(data => setSongs(data))
      .catch(err => console.error(err));
  }, []);
  
  // ... rest of component
};
```

#### 3. **Setup Proxy untuk Development**

Tambahkan di `package.json` (React):

```json
{
  "proxy": "http://localhost:5000"
}
```

Sekarang bisa fetch tanpa full URL:

```javascript
fetch('/api/songs')  // otomatis ke http://localhost:5000/api/songs
```

#### 4. **Jalankan Both Servers**

```bash
# Terminal 1 - Backend
cd backend
node server.js

# Terminal 2 - Frontend
cd ..
npm start
```

#### 5. **Production Build & Deploy**

```bash
# Build React
npm run build

# Jalankan Express yang serve React build
cd backend
node server.js
```

Semua akan berjalan di port 5000, Express serve React dan API sekaligus.

## 📝 Catatan

- Gambar album akan fallback ke placeholder jika file tidak ditemukan
- Filter sidebar otomatis tersembunyi di mobile, bisa dibuka dengan tombol filter
- Navigation sidebar juga responsive dengan tombol menu

## 🎨 Customization

Untuk mengubah warna tema, edit CSS variables di `src/index.css`:

```css
:root {
  --moa-pink-500: #f43f5e;
  --moa-pink-600: #e11d48;
  /* ... */
}
```

## 📄 License

MIT License - Bebas digunakan untuk keperluan pribadi maupun komersial.

---

Made with ♡ by MOA for MOA
