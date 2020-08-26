const login = async(req, res, next) => {
    console.log(3)
    console.log(req.body)
    res.send({
        success: true,
        data: "login"
    });
}

const logout = async(req, res, next) => {
    console.log(req.body)
    res.send({
        success: true,
        data: "logout"
    });
}

module.exports = {
    login,
    logout
}