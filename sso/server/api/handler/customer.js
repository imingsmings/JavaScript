const customers = require('../database/customer');

exports.getCustomer = function (req, res) {
    const { userId } = req.body;

    const customer = customers[userId];

    if (!customer) {
        res.json({
            code: 1,
            msg: 'This customer doesn\'t exist'
        });
        return;
    }

    res.json({
        code: 0,
        msg: 'ok',
        data: customers[userId]
    })
}