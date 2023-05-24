import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/userReducer";
import { API_13, API_4, API_5, API_6 } from "../api/Api";

const UserContext = createContext();

const initialState = {
  userLoggedIn: false,
  rootUser: { name: "", email: "", phone: "", address: "" },
  orders: [],
  appointments: [],
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setLoggedIn = () => {
    dispatch({ type: "USER" });
  };

  const setLogOut = async () => {
    try {
      const resp = await axios.get(API_4, { withCredentials: true });
      console.log(resp);
      dispatch({ type: "USER_LOGOUT" });
    } catch (error) {
      console.log(error);
    }
  };

  const checkLoggedInStatus = async () => {
    try {
      const resp = await axios.get(API_5, {
        withCredentials: true,
      });
      // console.log(resp);
      const { name, email, phone, address } = resp.data;
      dispatch({
        type: "SET_ROOTUSER",
        payload: { name, email, phone, address },
      });
      setLoggedIn();
    } catch (error) {
      console.log(error);
    }
  };
  // For settig user orders
  const setUserOrder = async (id) => {
    try {
      const resp = await axios.get(`${API_6}${id}`);
      dispatch({
        type: "SET_ORDERS",
        payload: resp.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  // for setting user appointments
  const setUserAppointments = async (id) => {
    try {
      const resp = await axios.get(`${API_13}${id}`);
      dispatch({
        type: "SET_APPOINTMENTS",
        payload: resp.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        setLoggedIn,
        setLogOut,
        checkLoggedInStatus,
        setUserOrder,
        setUserAppointments,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { useUserContext, UserContext, UserProvider };
