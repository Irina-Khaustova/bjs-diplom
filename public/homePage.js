
const logoutButton = new LogoutButton();
logoutButton.action = function () {
ApiConnector.logout( (data) => {
    console.log(data);
    if (data.success === true) {
        location.reload();
    }
    else {alert("произошла ошибка")}; 
});
};

ApiConnector.current( (data) => {
  if (data.success === true) {
    ProfileWidget.showProfile(data.data);
    console.log(data.data);
    };
  });

const ratesBoard = new RatesBoard();
const rates = function () {
  ApiConnector.getStocks((data) => {
    if (data.success === true) {
      ratesBoard.clearTable();
      ratesBoard.fillTable(data.data);
      console.log(data.data);
  };
});
};
rates();

   