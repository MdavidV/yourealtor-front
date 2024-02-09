const { MongoClient } = require('mongodb');
const fs = require('fs').promises;

const MONGODB_URI = 'mongodb+srv://dbTech:Ozzy63$23@yourealtor-try.h5ah1xy.mongodb.net/?retryWrites=true&w=majority';

async function loadData() {
    let client; 

    try {
        console.log('Leyendo archivo JSON...');
        const data = await fs.readFile('server/cards.json', 'utf-8');
        const cards = JSON.parse(data);

        console.log('Conectando a MongoDB...');
        client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        

        console.log('Insertando datos en MongoDB...');
        const database = client.db('imagenes_muestra');
        const collection = database.collection('muestra_de_imagenes_cards');

        await collection.deleteMany();

        const formattedCards = cards.map(card => ({
            title: card.title,
            sale: card.sale,
            isNew: card.isNew,
            rooms: card.rooms,
            baths: card.baths,
            mts: card.mts,
            price: card.price,
            location: card.location,
            images: card.images.map(imageUrl => ({ url: imageUrl }))
        }));

        await collection.insertMany(formattedCards);

        console.log('Datos guardados en MongoDB correctamente');

    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log('Cerrando conexión a MongoDB...');
        if (client) {
            await client.close();
        }
    }
}

loadData();



