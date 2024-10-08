function validateLoginData(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }
    next();
}


router.post('/login', validateLoginData, authController.login);