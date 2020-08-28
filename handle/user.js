const login = async (req, res, next) => {
    var result = req.body
    console.log(result)
    console.log("success")
    if (req.body.password.length <= 6) {
        res.send({
            success: true,
            code:100,
            data:null,
            msg: "密码必须大于6位数"
        });
    } else {
        res.send({
            success: true,
            code:100,
            msg:"提交成功", 
            data: {username:"admin"}
        });
    }

}

const logout = async (req, res, next) => {
    console.log(req.body)
    res.send({
        success: true,
        data: "logout"
    });
}
const updatedPassword = async (req, res, next) => {
    console.log('and this mathces too');
    res.end();
}

module.exports = {
    login,
    logout,
    updatedPassword
}