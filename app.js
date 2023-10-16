const express = require('express');
const path = require('path');

const app = express();
const PORT = 3800;

app.use(express.static(path.join(__dirname,)));

app.get('/', (req,res)=> res.sendFile(path.join(__dirname,'views','home.html')));

app.listen(PORT, () => console.log(`Server running in http://localhost:3800`));