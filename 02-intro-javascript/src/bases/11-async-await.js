
const getImagen = async () => {

    try {
        const apiKey = 'wQnAcH0iL87ucrNkBbHiF6VGJQSjH3uN';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        // handle
        console.error(error);
    }
}

getImagen();
