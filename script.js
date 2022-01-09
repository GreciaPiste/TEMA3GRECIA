var selectedRow = null;
function onFormSubmit(){
event.preventDefault();
var Datos = LeerInfo();
if(selectedRow == null){
    Insertar(Datos);
}else{
Actualizar(Datos);
}   

}

function LeerInfo(){
    var Datos= {};
    Datos["nomEsc"] = document.getElementById("nomEsc").value;
    Datos["direction"] = document.getElementById("direction").value;
    Datos["cp"] = document.getElementById("cp").value;
    Datos["key"] = document.getElementById("key").value;
    return Datos;

}

function Insertar(data){
    var table = document.getElementById('Encabezados').getElementsByTagName('tbody')[0];
    var nuevaFila = table.insertRow(table.length);
    var celda1 = nuevaFila.insertCell(0);
    celda1.innerHTML = data.nomEsc;
    var celda2 = nuevaFila.insertCell(1);
    celda2.innerHTML = data.direction;
    var celda3 = nuevaFila.insertCell(2);
    celda3.innerHTML = data.cp;
    var celda4 = nuevaFila.insertCell(3);
    celda4.innerHTML = data.key;
    var celda5 = nuevaFila.insertCell(4);
    celda5.innerHTML = `<button onClick='Editar(this)' class="modificar"> Editar </button>
     <button onClick='Eliminar(this)'  class="eliminar"> Eliminar </button>`
}

function Editar(td){
   selectedRow = td.parentElement.parentElement;
   document.getElementById('nomEsc').value = selectedRow.cells[0].innerHTML;
   document.getElementById('direction').value = selectedRow.cells[1].innerHTML;
   document.getElementById('cp').value = selectedRow.cells[2].innerHTML;
   document.getElementById('key').value = selectedRow.cells[3].innerHTML;
}

function Actualizar(Datos){
selectedRow.cells[0].innerHTML = Datos.nomEsc;
selectedRow.cells[1].innerHTML = Datos.direction;
selectedRow.cells[2].innerHTML = Datos.cp;
selectedRow.cells[3].innerHTML = Datos.key;

}

function Eliminar(td){
   row = td.parentElement.parentElement;
   document.getElementById('Encabezados').deleteRow(row.rowIndex);
}
