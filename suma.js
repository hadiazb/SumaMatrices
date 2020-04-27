window.onload = cargarEventos;
var renglones
var columnas

function cargarEventos() {
    document.getElementById('boton').addEventListener('click', crearTabla, false);
    document.getElementById('boton').addEventListener('click', limpiar, false);
    document.getElementById('resolver').addEventListener('click', subirDatos, false);
}

function limpiar() {
    document.getElementById('renglones').innerHTML = "";
    document.getElementById('columnas').innerHTML = "";
}

function crearTabla() {
    x = parseInt(document.getElementById('renglones').value);
    y = parseInt(document.getElementById('columnas').value);
    renglones = x;
    columnas = y;
    var tblBodyUno = document.getElementById('miTablaUno').getElementsByTagName('tbody')[0];
    var tblBodyDos = document.getElementById('miTablaDos').getElementsByTagName('tbody')[0];

    var idUno = 0;
    var idDos = 0;

    for (let i = 0; i < renglones; i++) {
        var renglonUno = document.createElement('tr');
        var renglonDos = document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            var celdaUno = document.createElement('td');
            var celdaDos = document.createElement('td');
            idUno++;
            idDos++;
            var oInputUno;
            var oInputDos;
            
            oInputUno = document.createElement('input');
            oInputUno.type = 'text';
            oInputUno.id = `celdaUno_[${i}][${j}]`;
            oInputUno.className = 'numero';

            oInputDos = document.createElement('input');
            oInputDos.type = 'text';
            oInputDos.id = `celdaDos_[${i}][${j}]`;
            oInputDos.className = 'numero';
            
            celdaUno.appendChild(oInputUno);            
            renglonUno.appendChild(celdaUno);

            celdaDos.appendChild(oInputDos);
            renglonDos.appendChild(celdaDos);
        }
        tblBodyUno.appendChild(renglonUno);
        tblBodyDos.appendChild(renglonDos);
    }    
    
    // return console.log(x), console.log(y);
}



function subirDatos() { 
    var matrixUno = new Array(renglones);
    var matrixDos = new Array(renglones);
    for (let i = 0; i < renglones; i++) {
        matrixUno[i] = new Array(renglones);
        matrixDos[i] = new Array(renglones);
        for (let j = 0; j < columnas; j++) {
            matrixUno[i][j] = document.getElementById(`celdaUno_[${i}][${j}]`).value;
            matrixDos[i][j] = document.getElementById(`celdaDos_[${i}][${j}]`).value;
        }
    }
    
    var tblBodySuma = document.getElementById('resultado').getElementsByTagName('tbody')[0];
    var idSuma = 0;

    for (let i = 0; i < renglones; i++) {
        var renglonSuma = document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            var celdaSuma = document.createElement('td');
            idSuma++;
            
            celdaSuma.id = `celdaSuma_[${i}][${j}]`;
            celdaSuma.className = 'numero';

            renglonSuma.appendChild(celdaSuma);
        }
        tblBodySuma.appendChild(renglonSuma);
    }

    var matrixSuma = new Array(renglones);
    for (let i = 0; i < renglones; i++) {
        matrixSuma[i] = new Array(renglones);
        for (let j = 0; j < columnas; j++) {
            matrixSuma[i][j] = parseInt(matrixUno[i][j]) + parseInt(matrixDos[i][j]);
        }
    }
    for (let i = 0; i < renglones; i++) {
        for (let j = 0; j < columnas; j++) {
            document.getElementById(`celdaSuma_[${i}][${j}]`).innerHTML =  matrixSuma[i][j];             
        }
    }
    return console.table(matrixSuma)
}

