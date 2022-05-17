const Database = require('../db/config');
const initDb = require('../db/init');

module.exports = {
    async get(searchValue) {
        const db = await Database();
        let sales;

        if(searchValue !== ''){
            sales = await db.all(`SELECT * FROM sales WHERE name = "${searchValue}"
                                                         OR cnpj = "${searchValue}"
                                                         OR seller = "${searchValue}"`);
                                                                                                 
            if(Object.keys(sales).length === 0){
                sales = 'Vendas não encontradas. Por favor, verifique a busca.'
            }
            return sales;
        } else {
            sales = await db.all(`SELECT * FROM sales`)

            return sales.map((sale) => ({
                id: sale.id,
                cnpj: sale.cnpj,
                name: sale.name,
                phone: sale.phone,
                email: sale.email,
                seller: sale.seller,
                product: sale.product,
                product_quantity: sale.product_quantity,
                product_price: sale.product_price,
                created_at: sale.created_at
            }));
        }

        await db.close();
        
    },
    async create(newSale){
        for (const key in newSale){
            if(newSale.hasOwnProperty(key)){
                if (newSale[key] == ''){
                    if(key == 'product_price' ||
                       key == 'product_quantity'){
                        newSale[key] = 0;
                    }else{
                        newSale[key] = ' ';
                    }
                }
            }
        };

        const db = await Database();

        await db.run(`
            INSERT INTO sales (
                created_at,
                cnpj,
                name,
                phone,
                email,
                seller,
                product,
                product_quantity,
                product_price
            ) VALUES (
                "${newSale.created_at}",
                "${newSale.cnpj}",
                "${newSale.name}",
                "${newSale.phone}",
                "${newSale.email}",
                "${newSale.seller}",
                "${newSale.product}",
                "${newSale.product_quantity}",
                "${newSale.product_price}"
            )
        `)

        await db.close();
    }
};
