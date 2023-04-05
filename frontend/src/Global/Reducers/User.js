let user = { name: null, email: null };

const controlUser = (state, action) => {
  switch (action.type) {
    case "SETUSER":
      user.email = action.item.email;
      user.name = action.item.name;
      return user;
    default:
      return user;
  }
};
export default controlUser;
