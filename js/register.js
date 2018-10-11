var register = (function () {

    return {
        init: function (ele) {
            this.$ele = document.querySelector(ele);
            this.$loginBtn = this.$ele['login-btn'];
            this.$usernameInp = this.$ele['username'];
            this.$passwordInp = this.$ele['password'];
            this.event();
        },
        event: function () {
            var _this = this;
            this.$loginBtn.onclick = function () {
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function (data) {
                        data = JSON.parse(data);
                        _this.register(data);
                    }
                }
                sendAjax('http://localhost:192/kaola/php/register.php', params);
            },
                this.$usernameInp.addEventListener('change', function () {
                    var params = {
                        method: 'post',
                        data: {
                            username: _this.$usernameInp.value
                        },
                        success: function (data) {
                            data = JSON.parse(data);
                            _this.checkUsername(data);
                        }
                    }
                    sendAjax('http://localhost:192/kaola/php/check.php', params);
                }, false)

        },
        checkUsername: function (data) {
            if (data.code == 200) {
                this.$usernameInp.className = 'inp success';
                this.$loginBtn.disabled = '';
            } else {
                alert(data.msg);
                this.$usernameInp.className = 'inp error';
                this.$loginBtn.disabled = 'true';
            }
        },
        register: function (data) {
            if (data.code == 200) {
                alert("恭喜注册成功");
            } else {
                alert("注册失败");
            }
        }
    }
}())