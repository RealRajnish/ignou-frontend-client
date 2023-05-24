const userReducer = (state, action) => {
  if (action.type === "USER") {
    return {
      ...state,
      userLoggedIn: true,
    };
  }

  if (action.type === "USER_LOGOUT") {
    return {
      ...state,
      userLoggedIn: false,
      rootUser: { name: "", email: "", phone: "", address: "" },
    };
  }
  if (action.type === "SET_ROOTUSER") {
    return {
      ...state,
      rootUser: action.payload,
    };
  }
  if (action.type === "SET_ORDERS") {
    return {
      ...state,
      orders: action.payload,
    };
  }
  if (action.type === "SET_APPOINTMENTS") {
    return {
      ...state,
      appointments: action.payload,
    };
  }

  return state;
};

export default userReducer;
