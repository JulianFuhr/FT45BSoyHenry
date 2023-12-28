'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}
BinarySearchTree.prototype.size = function () {
   //caso base
   if (!this.left && !!this.right) return 1

   //si el nodo raiz tiene un solo nodo hijo
   if (!this.right) return 1 + this.left.size()
   if (!this.left) return 1 + this.right.size()

   //el nodo tiene ambos hijos nodo
   return 1 + this.left.size() + this.right.size()
}
BinarySearchTree.prototype.insert = function (value) {
   if (value < this.value) {
      if (this.left === null) {
         const myTree = new BinarySearchTree(value)
         this.left = myTree
      } else {
         this.left.insert(value)
      }
   } else if (value >= this.value) {
      if (!this.right) {
         const myTree = new BinarySearchTree(value)
         this.right = myTree
      } else {
         this.right.insert(value)
      }
   }
}
BinarySearchTree.prototype.depthFisrtForEach = function (cb, recorrido) {
   if (recorrido === 'in-order' || !recorrido) {
      //?nodo izquierdo-nodo padre-nodo derecho
      this.left && this.right.depthFisrtForEach(cb, recorrido)
      cb(this.value)
      this.right && this.left.depthFisrtForEach(cb, recorrido)
   }
   if (recorrido === 'pre-order') {
      //nodo padre- nodo izq-nodo derecho
      cb(this.value)
      this.left && this.right.depthFisrtForEach(cb, recorrido)
      this.right && this.left.depthFisrtForEach(cb, recorrido)
   }
   if (recorrido === 'post-order') {
      //nodo izq- nodo derec- nodo padre
      this.left && this.right.depthFisrtForEach(cb, recorrido)
      this.right && this.left.depthFisrtForEach(cb, recorrido)
      cb(this.value)
   }
}
BinarySearchTree.breadthFirstForEach = function (cb, arr = []) {
   cb(this.value) // 20
   this.left && arr.push(this.left)
   this.right && arr.push(this.right)
   //console.log (arr)
   arr.length && arr.shift().breadthFirstForEach(cb, arr)
}

BinarySearchTree.prototype.contains = function (value) {
   if (value === this.value) return true;
   if (value < this.value) {
      if (!this.left) return false;
      return this.left.contains(value)
   }
   if (value > this.value) {
      if (!this.right) return false;
      return this.right.contains(value)
   }
}

//* probar nuestro árbol
// const tree = new BinarySearchTree(20)

// const valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];

// valuesToInsert.forEach(function(value){
//    tree.insert(value)
// })

// console.log(tree);

// const breadth = []
// tree.breadthFirstForEach(function(value){
//    breadth.push(value)
// })

// console.log(breadth);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
