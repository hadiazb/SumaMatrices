

var numeroFilasUno = 2;
var numeroColumnasUno = 2;
var numeroFilasDos = 2;
var numeroColumnasDos = 2;
var matrixUno = construirMatrix(numeroFilasUno, numeroColumnasUno);
var matrixDos = construirMatrix(numeroFilasDos, numeroColumnasDos);

// sumaMatrix(matrixUno, matrixDos)
fnCreaTabla(5, 5);


function fnCreaTabla(renglones, columnas) {
    var tblBodyUno = document.getElementById('miTablaUno').getElementsByTagName('tbody')[0];
    var idUno = 0;

    var tblBodyDos = document.getElementById('miTablaDos').getElementsByTagName('tbody')[0];
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

            oInputDos = document.createElement('input');
            oInputDos.type = 'text';
            oInputDos.id = `celdaDos_[${i}][${j}]`;
            
            celdaUno.appendChild(oInputUno);
            renglonUno.appendChild(celdaUno);

            celdaDos.appendChild(oInputDos);
            renglonDos.appendChild(celdaDos);
        }
        tblBodyUno.appendChild(renglonUno);
        tblBodyDos.appendChild(renglonDos);
    }

    // return console.log(tblBodyUno);
}





function construirMatrix(x, y) {
    var x;
    var y;
    var cont = 0;
    var matrix = new Array(x);
    
    for (let i = 0; i < x; i++) {
        matrix[i] = new Array(x);
        for (let j = 0; j < y; j++) {
            matrix[i][j] = cont;
            cont++;
        }
        
    }

    return matrix;
}

function sumaMatrix(x, y) {
    var columnasUno = x[0].length;
    var filasUno = x.length;
    var columnasDos = y[0].length;
    var filasDos = y.length;
    var cont = 0;
    
    if ((columnasUno == columnasDos)&&(filasUno == filasDos)) {

        var matrixSuma = new Array(x);
        var matrixSuma = new Array(filasUno); 
        for (let i = 0; i < filasUno; i++) {
            matrixSuma[i] = new Array(filasUno);
            for (let j = 0; j < columnasUno; j++) {
                matrixSuma[i][j] = x[i][j] + y[i][j];
                cont++;
            }
        }
        return console.table(matrixSuma)
        
    } else {
        return console.log('Las matrices ingresadas no se pueden sumas porque no son del mismo tamaño');
        
    }
}
