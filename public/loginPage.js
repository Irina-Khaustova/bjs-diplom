'use strict';
const userForm = new UserForm();
userForm.loginFormCallback = function (data, callback) {
    ApiConnector.login(data, callback);
};
