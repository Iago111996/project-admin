const Request = require('../models/requests.model');


module.exports = {

    async index(req, res) {
        const request = await Request.find();
        res.json(request);
    },

    async create(req, res) {

        const {
            code_request,
            form_pay,
            type_invoice,
            state_request
        } = req.body;

        let data = {};

        let request = await Request.findOne({code_request});
        if(!request) {
            data = {
                code_request,
                form_pay,
                type_invoice,
                state_request
            };
            request = await Request.create(data);

            return res.status(200).json(request);
        } else {
            return res.status(500).json(request);
        }
    },

    async details(req, res) {
        const {_id} = req.params;
        const request = await Request.findOne({_id});
        res.json(request);
    },

    async delete(req, res) {
        const {_id} = req.params;
        const request = await Request.findByIdAndDelete({_id});
        res.json(request);
    },

    async update(req, res) {
        const {
            _id,
            code_request,
            form_pay,
            type_invoice,
            state_request
        } = req.body;

        const data = {
            code_request,
            form_pay,
            type_invoice,
            state_request
        };

        const request = await Request.findByIdAndUpdate({_id}, data, {new: true});
        res.json(request);
    },
};
