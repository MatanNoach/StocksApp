"use strict";

module.exports = function (User) {
  User.getStocks = function (userId, cb) {
    User.app.models.User.findOne({ where: { id: userId } }, (err, user) => {
      // if no error and the user has been found
      if (!err && user) {
        cb(null, user.stocks);
      } else if (err) {
        // else, check if there's an error (because if there is, then user always null)
        cb(err);
      } else {
        // else, check if the user is null but no error
        cb("No user found!");
      }
    });
  };
  User.remoteMethod("getStocks", {
    accepts: { arg: "id", type: "string", required: true },
    returns: { arg: "stocks", type: ["stock"] },
    http: { verb: "get", path: "/:id/stocks" },
  });
  User.signUp = function (email, password, cb) {
    User.app.models.User.findOne({ where: { email: email } }, (err, res) => {
      if (res) {
        cb("This email already exists");
      } else if (err) {
        cb(err);
      } else {
        User.app.models.User.create(
          { email: email, password: password },
          (err2, res2) => {
            if (err2) {
              cb(err2);
            } else {
              User.app.models.User.login(
                { email: email, password: password },
                (err3, res3) => {
                  if (err3) {
                    cb(err3);
                  } else {
                    cb(null, res3);
                  }
                }
              );
            }
          }
        );
      }
    });
  };
  User.remoteMethod("signUp", {
    accepts: [
      { arg: "email", type: "string", required: true },
      { arg: "password", type: "string", required: true },
    ],
    returns: { arg: "data", type: Object },
    http: { verb: "post", path: "/signUp" },
  });
  // adds a stock to a user's stocks array
  User.addStock = function (userId, symbol, name, cb) {
    User.app.models.User.update(
      { id: userId },
      { $addToSet: { stocks: { symbol: symbol, name: name } } },
      { upsert: true },
      (err, res) => {
        if (err) {
          cb(err);
        } else {
          cb(null, res);
        }
      }
    );
  };
  User.remoteMethod("addStock", {
    accepts: [
      { arg: "id", type: "string", required: true },
      { arg: "symbol", type: "string", required: true },
      { arg: "name", type: "string", required: true },
    ],
    returns: { arg: "user", type: "user" },
    http: { verb: "post", path: "/:id/stocks/" },
  });
};
