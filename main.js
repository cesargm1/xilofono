// almacenamos los elementos que tengan la clase sonidos en la variable notas 
var notas = $('.sonidos');

$('.tecla').click(function() {
  let num = parseInt(this.id);
  tocar(num);
});