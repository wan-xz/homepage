    function login(){
        var user = document.getElementById("username").value;
        var psw = document.getElementById("psw").value;
        if (user=="admin"&&psw=="123456") {
            alert("登录成功");
        }else{
            alert("账号或密码输入错误，请重新输入!");
            return false;
        }
    }