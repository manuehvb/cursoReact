
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const  [, , p3] = personajes;

console.log(p3);

const devuelveArray = () => {
    return ['ABC', 123];
}

const [letras, numeros] = devuelveArray();
console.log(letras, numeros);


const deses = (valor) => {
    return [valor, () => { console.log('Hola mundo'); } ];
}

const [nombre, setNombre]  = deses('Goku');

console.log(nombre);
setNombre();