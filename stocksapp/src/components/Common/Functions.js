const bcrypt = require("bcryptjs");
const saltRounds = 10;
export function hashPassword(pass) {
  return bcrypt
    .genSalt(saltRounds)
    .then((salt) => bcrypt.hash(pass, salt).then((hash) => hash))
    .catch((err) => console.log(err));
}
