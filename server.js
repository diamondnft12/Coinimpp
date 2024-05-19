// server.js

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Endpoint untuk mengambil data dari API
app.get('/data-api', async (req, res) => {
  try {
    // Ganti URL_API dengan URL sesuai API yang Anda gunakan
    const response = await fetch('URL_API', {
      headers: {
        'X-API-ID': '7e26bb94aa2ce44e6e16aca6ae6d28c7f0157b5ccd7a82f86bbbe8d835effd71',
        'X-API-KEY': '5112486af64b2f97bd3742c4153cee32452549491480cfd164b336720b82a84d'
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
