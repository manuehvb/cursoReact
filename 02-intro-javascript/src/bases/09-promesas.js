import { getHeroeById } from "./bases/08-imp-exp";


/* const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        const heroe = getHeroeById(2);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe');
    }, 2000);
});

promesa.then((data) =>{
    console.log('Then promesa', data);
})
.catch((err) => console.warn(err)); */

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            heroe === undefined ? reject('No se pudo encontrar el heroe') : resolve(heroe);
        }, 2000);
    });
}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);


