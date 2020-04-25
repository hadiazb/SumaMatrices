window.onload = cargarEventos;


function cargarEventos() {
    document.getElementById('boton').addEventListener('click', CreaTabla, false);
    
}

function CreaTabla(renglones, columnas) {
    var renglones = document.getElementById('renglones').value;
    renglones = parseInt(renglones);
    var columnas = document.getElementById('columnas').value;
    columnas = parseInt(columnas)
    var tblBodyUno = document.getElementById('miTablaUno').getElementsByTagName('tbody')[0];
    var idUno = 0;

    var tblBodyDos = document.getElementById('miTablaDos').getElementsByTagName('tbody')[0];
    var idDos = 0;

    var tblBodySuma = document.getElementById('resultado').getElementsByTagName('tbody')[0];
    var idSuma = 0;

    for (let i = 0; i < renglones; i++) {
        var renglonUno = document.createElement('tr');
        var renglonDos = document.createElement('tr');
        var renglonSuma = document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            var celdaUno = document.createElement('td');
            var celdaDos = document.createElement('td');
            var celdaSuma = document.createElement('td');
            idUno++;
            idDos++;
            idSuma++;
            var oInputUno;
            var oInputDos;
            var oInputSuma;
            
            oInputUno = document.createElement('input');
            oInputUno.type = 'text';
            oInputUno.value = j;
            oInputUno.id = `celdaUno_[${i}][${j}]`;
            oInputUno.className = 'numero';

            oInputDos = document.createElement('input');
            oInputDos.type = 'text';
            oInputDos.value = i;
            oInputDos.id = `celdaDos_[${i}][${j}]`;
            oInputDos.className = 'numero';

            oInputSuma = document.createElement('input');
            // oInputSuma.type = 'text';
            // oInputSuma.value = i;
            oInputSuma.id = `celdaSuma_[${i}][${j}]`;
            oInputSuma.className = 'numero';
            
            celdaUno.appendChild(oInputUno);            
            renglonUno.appendChild(celdaUno);

            celdaDos.appendChild(oInputDos);
            renglonDos.appendChild(celdaDos);

            celdaSuma.appendChild(oInputSuma);
            renglonSuma.appendChild(celdaSuma);
        }
        tblBodyUno.appendChild(renglonUno);
        tblBodyDos.appendChild(renglonDos);
        tblBodySuma.appendChild(renglonSuma);
    }
    construirMatrix(renglones, columnas);
   
}


function construirMatrix(renglones, columnas) {
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
    sumaMatrix(matrixUno, matrixDos);
}


function sumaMatrix(x, y) {
    var columnasUno = x[0].length;
    var filasUno = x.length;
    var matrixSuma = new Array(x);
    var matrixSuma = new Array(filasUno); 
    for (let i = 0; i < filasUno; i++) {
        matrixSuma[i] = new Array(filasUno);
        for (let j = 0; j < columnasUno; j++) {
            matrixSuma[i][j] = parseInt(x[i][j]) + parseInt(y[i][j]);
        }
    }
    for (let i = 0; i < filasUno; i++) {
        for (let j = 0; j < columnasUno; j++) {
            document.getElementById(`celdaSuma_[${i}][${j}]`).innerHTML =  matrixSuma[i][j];             
        }
    }
    // return console.table(matrixSuma)
 
}
