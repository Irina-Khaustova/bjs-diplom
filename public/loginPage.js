'use strict';

const userForm = new UserForm();
 userForm.loginFormCallback = function (data) {
    ApiConnector.login(data, (response) => {
        console.log(response);
        if (response.success === true) {
            location.reload();
        }
        else {alert("произошла ошибка")}; 
    });
};

 userForm.registerFormCallback = function (data) {
    ApiConnector.register(data, (response) => {
        console.log(response);
        if (response.success === true) {
            location.reload();
        }
        else {alert("произошла ошибка")}; 
    });
}
