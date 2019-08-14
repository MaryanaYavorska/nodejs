const express = require('express');
const router = express.Router();

//Login Page
router.get('/login', (req, res) => res.render('login'));
//Register Page
router.get('/register', (req, res) => res.render('register'));

//Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, password2} = req.body;
    let errors = [];

    //Check required fields
    if(!name || !email || !password ||!password2 ){
        errors.push({ msg: 'Заповніть пусті поля'});
    }

    // Check passwords match
    if (password !== password2){
        errors.push({ msg: 'Паролі не збігаються'});
    }
    //Check password length
    if (password.length < 6){
        errors.push({msg: 'Пароль має мати не менше 6 символів' })
    }
    if(errors.length>0){
        res.render('register', {
            errors, 
            name,
            email,
            password,
            password2
        });
    } else{
        res.send('pass');
    }
});

module.exports = router;