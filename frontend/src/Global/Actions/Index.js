export const SetUser = (name, email) => {
  return {
    type: "SETUSER",
    item: {
      name,
      email,
    },
  };
};
