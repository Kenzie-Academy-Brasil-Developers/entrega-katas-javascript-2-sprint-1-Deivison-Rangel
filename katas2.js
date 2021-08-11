// comece a criar a sua função add na linha abaixo -----------------------------------------------

function add(dd1, dd2) {
    let resultado = dd1 + dd2
    return resultado
}
// descomente a linha seguinte para testar sua função

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo---------------------------------------------

function multiply(mult, multi){
    let resultado = 0
    for (let i = 0; i < mult; i++) {
       resultado = resultado + multi    
    }
    return resultado
}
            
// descomente a linha seguinte para testar sua função

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

// comece a criar a sua função power na linha abaixo ------------------------------------------------

function power(pow1, pow2) {
    let resultado = pow1
    for (let i = 1; i < pow2; i++) {
        resultado = multiply(resultado,pow1)
        
    }
    return resultado 

}
// descomente a linha seguinte para testar sua função

 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(unico) {
    let resultado = unico ;
    for(let i = 1; i < unico; i++) {
        resultado = multiply(resultado, i)
    }
        return resultado;
}
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');



  // BONUS (aviso: o grau de dificuldade é bem maior !!!)
 
  let fibonacci = [0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584]
  let i = 0
  
  while (i < fibonacci) {
    console.log (fibonacci.length[7]) 
    i++
    }
    
      // fibocinacci[7] === 13 no console rsrsr
      
    
  



// descomente a linha seguinte para testar sua função
//console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
