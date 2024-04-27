"use strict";
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "Admin";
})(Role || (Role = {}));
const user1 = {
    name: "kailash",
    email: "kailash@gmail.com",
    password: "paw",
    role: Role.admin,
};
const user2 = {
    name: "Rao",
    email: "kailash22@gmail.com",
    password: "paw44",
    role: Role.user,
};
const isAdmin = (user) => {
    const { name, role } = user;
    return role === Role.admin ? `${name} is allowed` : `${name} is not allowed`;
};
console.log(isAdmin(user2)); // Output: kailash is allowed
