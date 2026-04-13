const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// API route
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from Backend 🚀" });
});

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});