enum Role {
  user = "user",
  admin = "Admin",
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Role;
};

const user1: LoginDetails = {
  name: "kailash",
  email: "kailash@gmail.com",
  password: "paw",
  role: Role.admin,
};

const user2: LoginDetails = {
  name: "Rao",
  email: "kailash22@gmail.com",
  password: "paw44",
  role: Role.user,
};

const isAdmin = (user: LoginDetails) => {
  const { name, role } = user;
  return role === Role.admin ? `${name} is allowed` : `${name} is not allowed`;
};

console.log(isAdmin(user2)); // Output: kailash is allowed
