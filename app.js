const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

// Ruta para servir el archivo PDF
app.get("/rcv/report/22465", (req, res) => {
  const filePath = path.join(__dirname, "files", "22465.pdf");
  
  // Verificar si el archivo existe
  if (fs.existsSync(filePath)) {
    // Establecer el mimetype correcto para PDF
    res.setHeader('Content-Type', 'application/pdf');
    // Servir el archivo
    res.sendFile(filePath);
  } else {
    res.status(404).send('Archivo no encontrado');
  }
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

