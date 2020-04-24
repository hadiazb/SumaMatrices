

var numeroFilasUno = 2;
var numeroColumnasUno = 2;
var numeroFilasDos = 2;
var numeroColumnasDos = 2;
var matrixUno = construirMatrix(numeroFilasUno, numeroColumnasUno);
var matrixDos = construirMatrix(numeroFilasDos, numeroColumnasDos);

sumaMatrix(matrixUno, matrixDos)

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
