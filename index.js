const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



// Cargar datos desde el archivo JSON
let kardexList = [];
try {
    const path = require('path')
    const data = fs.readFileSync(path.join(__dirname + 'kardexDb.json'), 'utf8');
    kardexList = JSON.parse(data); 
} catch (error) {
    console.error('Error al leer el archivo kardexList.json', error);
}

//Ruta para obtener kardex
app.get('/kardex',(req, res) => {
    res.json(kardexList);
})

// Ruta para obtener un alumno por número de cuenta
app.get('/kardex/:numeroCuenta', (req, res) => {
  const alumno = alumnos.find(a => a.numero_cuenta === req.params.numeroCuenta);
  if (alumno) {
    res.json(alumno);
  } else {
    res.status(404).json({ mensaje: "Alumno no encontrado" });
  }
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
