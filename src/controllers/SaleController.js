const Sale = require("../model/Sale");

module.exports = {
    async search(req, res){
        return res.render('sales', { sales: await Sale.get(req.query.search) });
    },
    new(req, res){
        res.render('new-sale');
    },
    async insert(req, res){
        await Sale.create({
            created_at: req.body.created_at,
            cnpj: req.body.cnpj,
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            seller: req.body.seller,
            product: req.body.product,
            product_quantity: req.body.product_quantity,
            product_price: req.body.product_price
        });

        return res.redirect('new-sale');
    }
}