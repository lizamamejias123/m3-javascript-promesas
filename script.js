const album = async () => {
    const urlAlbum = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const resultado = await fetch(urlAlbum);
        const busqueda = await resultado.json();
        busqueda.forEach(element => {
            if(element.id <= 20){
                console.log(`${element.id} - ${element.title}`);
            }
        });
    } catch (error) {
        console.log(error);
    }
};
const mensajeConsola = async () => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Información enviada");
    }, 3000)
})
const mensajeRecibido = async (mensajeConsola) => {
    const tiempoAlbum = await mensajeConsola();
    console.log(tiempoAlbum);
}
album();
mensajeRecibido(mensajeConsola)