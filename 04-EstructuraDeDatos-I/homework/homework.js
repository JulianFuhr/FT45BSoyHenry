'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if(n < 0) return false;
  if(n < 2) return 1;

  let auxiliar = n

  while(n !== 1 && n !== 0){
    auxiliar *= ( n - 1)
    n--
  }
  return auxiliar
}

function nFibonacci(n) {
  if (n < 0) return false
  if (n < 2) return n

  let auxiliar = [];
  
  auxiliar [0] = 0;
  auxiliar [1] = 1;

  console.log(auxiliar);

  for(let i = 2; i <= n; i++){
    auxiliar[i] = auxiliar[i - 1] + auxiliar[i - 2]
  }
  console.log(auxiliar);
  
  return auxiliar.pop()
}
console.log(nFibonacci(6))

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.Queue = []
}
Queue.prototype.enqueue = function(value){
  this.Queue.push(value)
}
Queue.prototype.dequeue = function(){
  return this.Queue.shift()
}
Queue.prototype.size = function() {
  return this.enqueue.length;
} 

const fila = new Queue()

console.log(fila.dequeue());
console.log(fila.enqueue(3));
console.log(fila.Queue);
console.log(fila.size());



/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
