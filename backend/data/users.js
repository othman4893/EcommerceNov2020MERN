import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Othy bou",
    email: "othy@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Chandler Bing",
    email: "chandler@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
