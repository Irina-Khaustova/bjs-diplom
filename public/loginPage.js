'use strict';
const userForm = new UserForm();
userForm.loginFormCallback = function (data) {
    console.log(data);
    ApiConnector.login(data, callback);
};
