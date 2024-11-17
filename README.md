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
