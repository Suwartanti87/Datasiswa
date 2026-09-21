const express = require('express');
const cors = require('cors');

const app =express();

const siswaRoutes = require('./src/routes/siswaRoute');

app.use(cors());

app.use(express.json());

app.use('/api/siswa', siswaRoutes);

app.get('/', (req, res)=>{
    res.send('Server Jalan gunakan /api/siswa');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server berjalan di port local ${PORT}`);
});