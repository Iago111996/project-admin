const User = require('../models/users.model');


module.exports = {

    async index(req, res) {
        const user = await User.find();
        res.json(user);
    },

    async create(req, res) {

        const {
           name_user,
           email_user,
           type_user,
           password_user
        } = req.body;

        let data = {};

        let user = await User.findOne({email_user});
        if(!user) {
            data = {
                name_user,
                email_user,
                type_user,
                password_user
            };
            user = await User.create(data);

            return res.status(200).json(user);
        } else {
            return res.status(500).json(user);
        }
    },

    async details(req, res) {
        const {_id} = req.params;
        const user = await User.findOne({_id});
        res.json(user);
    },

    async delete(req, res) {
        const {_id} = req.params;
        const user = await User.findByIdAndDelete({_id});
        res.json(user);
    },

    async update(req, res) {
        const {
            _id,
            name_user,
            email_user,
            type_user,
            password_user
        } = req.body;

        const data = {
            name_user,
            email_user,
            type_user,
            password_user
        };

        const user = await User.findByIdAndUpdate({_id}, data, {new: true});
        res.json(user);
    },

    async login(req, res) {
        const { email, password} = req.body;

        User.findOne({email_user: email, type_user: 1}, function(err, user) {

            if(err) {
                console.log(err);
                res.status(200).json({erro: "Erro no servidor. Por favor, tente novamente!"})
            } else if(!user){
                res.status(200).json({status:2, erro: "Email ou senha não conferem."})
            } else {
                const payload = { email }
                const token = jwt.sign()
            }
        });

    },
};
