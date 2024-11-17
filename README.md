//Parte pricipal para calcular productos
<!DOCTYPE html>
<html lang = "es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/page.css">
        <title>Ventas</title>
    </head>
    <body>
        <section class="contenedor">
            <h1>Ventas de productos</h1>
            <form action="../index.html">
                <div class="grupo">
                    <label for="Costo">Costo</label>
                    <input type="text" id="Costo" placeholder="Ingrese costo de venta"/>
                </div>
                <div class="grupo">
                    <label for="Descuento">Descuento(%)</label>
                    <input type="text" id="Descuento" value="" placeholder="Porcentaje de descuento"/>
                </div>
                <div class="grupo">
                    <label>Iva(15%)</label>
                    <input type="checkbox" name="iva" id="iva" checked> 
                </div>
                <div class="grupo">
                    <button type="button" onclick="cal.venta()">Calcular</button>
                    <button type="reset">Limpiar</button>
                    <button type="submit">Regresar</button>
                    </div>
                    <textarea id="resp" rows="10">Respuesta aqui...</textarea>
            </form>
        </section>
        <script src="../js/calculos.js"></script>
    </body>
</html>
//Implementar la parte visual de la pagina para calcular productos
body{
    background-color: #ade1ff;
    color: rgb(4, 2, 59);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 32px;
} 
.contenedor{
    display:flex;
    align-items:center;
    flex-direction:column;
}

h1{
    color: rgb(2, 2, 89);
    font-size: 50px;
}
.grupo{
    display:flex;
    justify-content:flex-start;
    gap: 20px;
    height: 30px;
    margin-bottom:15px;
}
.grupo label, button{
    width: 100;
    font-size: 20px;
    font-weight: bold;
}
.grupo button{
    border-radius: 10px;
    margin: 2px;
    color: rgb(76, 0, 255);
    height: 35px;
    background-image: linear-gradient(to right);
    cursor: pointer;
    transition: .5s ease-in-out;
}
.grupo input{
    display: block;
    border-radius: 7px;
    font-size: 25px;
}
#iva{
    display: block;
    margin-left: -20px;
    width: 40px
}
textarea{
    margin-top: 20px;
    width: 100%;
    border-radius: 15px;
    padding: 10px;
    font-size: 30px;
    color: dodgerblue;
    font-weight: bold;
}
