// src/middlewares/validateRequest.js

module.exports = (req, res, next) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        return res.status(400).json ({ error: 'All fields are mandatory'})
    }

    //possíveis valida~ções adicionais (e.g, formato do email, força da senha)
    next();
}