
const logoutButton = new LogoutButton();
logoutButton.action = function () {
ApiConnector.logout( (data) => {
    if (data.success === true) {
        location.reload();
    } 
});
};

ApiConnector.current( (data) => {
  if (data.success === true) {
    ProfileWidget.showProfile(data.data);
    };
  });

const ratesBoard = new RatesBoard();
const rates = function () {
  ApiConnector.getStocks((data) => {
    if (data.success === true) {
      ratesBoard.clearTable();
      ratesBoard.fillTable(data.data);
  };
});
};
rates();

const moneyManager = new MoneyManager();
moneyManager.addMoneyCallback = function (data) {
  ApiConnector.addMoney(data, (response) => {
  if ((response.success === true)) {
    ProfileWidget.showProfile(response.data);
    moneyManager.setMessage(response.success, "баланс пополнен");
  }
  else {
    moneyManager.setMessage(response.success, response.error);
  };
});
};

moneyManager.conversionMoneyCallback = function (data) {
  ApiConnector.convertMoney (data, (response) => {
    if ((response.success === true)) {
      ProfileWidget.showProfile(response.data);
      moneyManager.setMessage(response.success, "операция выполнена");
    }
    else {
      moneyManager.setMessage(response.success, response.error);
    };
  });
};

moneyManager.sendMoneyCallback = function (data) {
  ApiConnector.transferMoney (data, (response) => {
    if ((response.success === true)) {
      ProfileWidget.showProfile(response.data);
      moneyManager.setMessage(response.success, "перевод выполнен успешно");
    }
    else {
      moneyManager.setMessage(response.success, response.error);
    };
  });
};

const favoritesWidget = new FavoritesWidget ();
  ApiConnector.getFavorites ((response) => {
  if ((response.success === true)) {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(response.data);
    moneyManager.updateUsersList(response.data);
  };
});

favoritesWidget.addUserCallback = function (data) {
  ApiConnector.addUserToFavorites (data, (response) => {
    if ((response.success === true)) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(response.data);
      moneyManager.updateUsersList(response.data);
      moneyManager.setMessage(response.success, "пользователь добавлен в избранное");
    }
    else {
      moneyManager.setMessage(response.success, response.error);
    };
  });
};

favoritesWidget.removeUserCallback = function (data) {
  ApiConnector.removeUserFromFavorites (data, (response) => {
    if ((response.success === true)) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(response.data);
      moneyManager.updateUsersList(response.data);
      moneyManager.setMessage(response.success, "пользователь удалён из избранного");
    }
    else {
      moneyManager.setMessage(response.success, response.error);
    };
  });
};