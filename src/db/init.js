const Database = require('./config');

const initDb = {
    async init() {
        const db = await Database();

        await db.exec(`
            CREATE TABLE sales (
                id INTEGER PRIMARY KEY,
                cnpj TEXT,
                name TEXT,
                phone TEXT,
                email TEXT,
                seller TEXT,
                product TEXT,
                product_quantity INT,
                product_price INT,
                created_at DATETIME
            )
        `);

        await db.close();
    }
};

initDb.init();