

export const getImagen = async() => {

    try {

        const apiKey = 'j3a2SwvYOU0vmSplYDt1TyBOoyBwtm9m';
        const resp   = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontro la imagen';
    }



}




