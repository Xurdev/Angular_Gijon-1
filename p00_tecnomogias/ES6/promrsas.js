function hacerAlgoPromesa (){ 
    return new Promise (function (resolve, reject) { 
        console.log ( 'hacer algo que ocupa un tiempo...'); 
        setTimeout (resolve(
            "Pepe"
        ), 1000); 
    }) 
} 

hacerAlgoPromesa().then(
    (response) => {console.log(`Todo bien ${response}`)}, // en caso de acierto
    () => {} // en caso de error
)