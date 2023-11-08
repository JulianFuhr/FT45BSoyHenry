'use strict';

function BinarioADecimal(num) {
   if (typeof num !== 'string' || !/^[01]+$/.test(num)) {
      Error("El valor no es binario");
   }
   return parseInt(num, 2);
}
console.log(BinarioADecimal('1100'));

function DecimalABinario(num) {
   if(typeof num !== 'number' || isNaN(num ||num<0)){
      Error("El valor de ser decimal no negativo");
   
   }
   return num.toString(2);
}

console.log(DecimalABinario(8));



module.exports = {
   BinarioADecimal,
   DecimalABinario,
};






