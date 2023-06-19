// Desestructuración
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

/* const {nombre, edad, clave,} = persona; */

/* console.log(nombre);
console.log(edad);
console.log(clave); */

const imprimePersona = ({clave, nombre, edad, rango = 'Capitán'}) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.3535,
            lng: -5.4343,
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = imprimePersona(persona);
console.log(nombreClave, anios);
console.log(lat, lng);