const Merchant = require('../models/merchants.model');


module.exports = {

    async index(req, res) {
        const merchant = await Merchant.find();
        res.json(merchant);
    },

    async create(req, res) {

        const {
            name_responsible,
            name_marketplace,
            code_client,
            number_cnpj,
            address_state,
            address_city,
            address_district,
            address_street,
            address_number
        } = req.body;

        let data = {};

        let merchant = await Merchant.findOne({code_client});
        if(!merchant) {
            data = {
                name_responsible,
                name_marketplace,
                code_client,
                number_cnpj,
                address_state,
                address_city,
                address_district,
                address_street,
                address_number
            };
            merchant = await Merchant.create(data);

            return res.status(200).json(merchant);
        } else {
            return res.status(500).json(merchant);
        }
    },

    async details(req, res) {
        const {_id} = req.params;
        const merchant = await Merchant.findOne({_id});
        res.json(merchant);
    },

    async search(req, res) {
        const {code_client} = req.params;
        const merchant = await Merchant.findOne({code_client});
        res.json(merchant);
    },

    async delete(req, res) {
        const {_id} = req.params;
        const merchant = await Merchant.findByIdAndDelete({_id});
        res.json(merchant);
    },

    async update(req, res) {
        const {
            _id,
            name_responsible,
            name_marketplace,
            code_client,
            number_cnpj,
            address_state,
            address_city,
            address_district,
            address_street,
            address_number
        } = req.body;

        const data = {
            name_responsible,
            name_marketplace,
            code_client,
            number_cnpj,
            address_state,
            address_city,
            address_district,
            address_street,
            address_number
        };

        const merchant = await Merchant.findByIdAndUpdate({_id}, data, {new: true});
        res.json(merchant);
    },
};
