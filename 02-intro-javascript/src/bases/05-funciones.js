
/* const saludar = function (nombre){
    return `Hola ${nombre}`;
} */

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola`;



console.log(saludar2('Manu'));
console.log(saludar3('Manu'));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'pkeador',
});

const user = getUser();
console.log(user);

function getUsuarioActivo (nombre){
    return {
        uid : 'ABC124',
        username: nombre
    }
};

const UsuarioActivo = getUsuarioActivo('Peter');
console.log(UsuarioActivo);

const getUsuarioActivo2 = (nombre) => ({
        uid : 'ABC124',
        username: nombre
    });

const usuarioActivo2 = getUsuarioActivo2('Peter2');
console.log(usuarioActivo2);
