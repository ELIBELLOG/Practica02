//JavaScript

$(document).ready(function(e){	
var nombre;
var diaC;
var mesC;
var anioC;
var fecha;
var falta;
var dias;
$('#bDatos').click(
	function(){
		nombre=$('#txtNombre').val();	
		alert(nombre);
	})
	
$('#bFecha').click(
	function(){
		fecha=new Date();
		diaC=$('#txtDia').val();	
		mesC=$('#txtMes').val();	
		anioC=$('#txtYear').val();	
		//alert(fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear());
		fechaA=new Date(fecha.getFullYear()+'/'+(fecha.getMonth()+1)+'/'+fecha.getDate());		
//		alert(diaC + "  "+ fecha);
		fechaP=new Date(fecha.getFullYear()+'/'+mesC+'/'+diaC);		
		if(fechaP<=fechaA){
			fechaP=new Date((fecha.getFullYear()+1)+'/'+mesC+'/'+diaC);			
			}
		dias=Math.ceil((fechaP-fechaA)/1000/60/60/24);
		alert("Dias: "+dias);
		
		
		/*alert("Fecha actual: "+fechaA);
		alert("Fecha p: "+fechaP);
		alert("Faltan: "+falta);
*/$('#Quien').text("Hola: " +  nombre);
$('#Falta').text("Fatltan  "+ dias +"  dia");


	})
	
	
	
});//ready
