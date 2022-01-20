var Users = require('../model/user_model');

module.exports.profile = function (req, res) {
    if (!req.query.q) {
        return res.render('profile');
    } else {
        Users.findOne({
                username: req.query.q
            },
            function (err, user) {
                if (err) {
                    console.log("Couldn't find the user");
                    return res.redirect('/user/profile');
                }
                console.log(user);
                return res.render('foreignProfile', {
                    fuser: user
                })
            }
        )

    }
}

module.exports.signup = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }

    return res.render('sign-up');
}

module.exports.signin = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }

    return res.render('sign-in');
}


module.exports.addUser = function (req, res) {
    if (req.body.pwd == req.body.cpwd) {
        Users.create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.pwd
        }, function (err, user) {
            console.log(req.body);
            if (err) {
                console.log('Error adding user', err);
                return res.redirect('/users/sign-up');
            }
            console.log('New user added: ', user);
            return res.redirect('/users/sign-in');
        })
    } else {
        console.log("Password and Confirm Password fields not matching.");
        return res.redirect('back');
    }
}


module.exports.createSession = function (req, res) {
    return res.redirect('/users/profile');
}

module.exports.signout = function (req, res) {
    //passportjs adds logout function as callback to req method for easy session cookie timeout.
    req.logout();
    return res.redirect('/');
}
