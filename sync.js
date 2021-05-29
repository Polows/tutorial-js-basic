const datos = [{
        id: 1,
        title: 'Iron Man',
        year: 2008
    }, {
        id: 2,
        title: 'Spiderman: Homecoming',
        year: 2017
    },
    {
        id: 3,
        title: 'Avengers: Endgame',
        year: 2019
    }
];

/*
const getDatos = () => {
    return datos;
}

console.log(getDatos());
*/

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error('No existen datos'));
        }
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
}

//getDatos().then((datos) => console.log(datos));
async function fetchingData() {
    try {
        const datosFetched = await getDatos();
        console.log(datosFetched);        
    } catch (error) {
        console.log(error.message);
    }
}

fetchingData();