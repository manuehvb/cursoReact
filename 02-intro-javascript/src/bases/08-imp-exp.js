import heroes from '../data/heroes';

//console.log(owners);

export const getHeroeById = (id) => heroes.find(({id: idHer}) => idHer === id);

//console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => heroes.filter(({owner: ownerHer}) => ownerHer === owner);

//console.log(getHeroesByOwner('DC'));