
const persona = {
    nombre: 'Manuel',
    apellido: 'Vidal',
    edad: 24,
    direccion: {
        ciudad: 'New York',
        zip: 453453453,
        lat: 14.323,
        lnd: 34.55656
    },
};


//console.table(persona);
console.log(persona);

const persona2 = { ...persona };
persona2.nombre = 'Peter';
console.log(persona2);
console.log(persona);