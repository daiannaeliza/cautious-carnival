//calculo de la venta de productos
class calculo{
    venta(){
        
        let costo= document.getElementById("costo").value;
        let descuento=document.getElementById("descuento").value;
        let iva=document.getElementById("iva").checked;

        let $resp=document.getElementById("resp")
        let total=0,subtotal=0, valorIva=0
        const IVA=0.15
        costo =parseFloat(costo)
        descuento=parseFloat(descuento)/100
        descuento =(descuento*costo)
        descuento= parseFloat(descuento.toFixed(2))
        subtotal=costo-descuento
        if(iva==true){
        valorIva= subtotal*IVA
        valorIva= parseFloat(valorIva.toFixed.toFixed(2))
    
    }
        total =(subtotal+valorIva)
        
        $resp.textContent=`costo: ${costo}\nDescuento: ${descuento}\nSubtotal:${subtotal}\nIva: ${valorIva}\ntotal: $(total)`
        console.log($resp)

    }
}
let cal= new calculo()
cal.venta()
