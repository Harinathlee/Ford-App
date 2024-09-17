import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./slice";
import { useGetUserDetailsQuery, useTransactMutation } from "./api";
function Login() {
  const dispatch = useDispatch();
  const loginStatus =
    useSelector((state) => state.user.isAuthenticated) || false;

  const [
    postTransaction,
    {
      isLoading: txLoading,
      isError: txErrored,
      isSuccess: txProcessed,
      data: txDetails,
      error: txError,
    },
  ] = useTransactMutation();

  const handleLogin = () => {
    dispatch(login());
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleTransaction = () => {
    postTransaction({
      amount: 100,
      mode: "credit card",
    });
  };
  const {
    data,
    isSuccess: userDetailFetchSuccess,
    isError: userDetailFetchFailed,
  } = useGetUserDetailsQuery("parameterTobeSent", {
    skip: !loginStatus,
  });
  if (userDetailFetchSuccess) {
    console.log(data);
  }

  if (userDetailFetchFailed) {
    console.log(isError);
  }

  return (
    <div role="login">
      {userDetailFetchSuccess && `userDetails ${data.id}`}
      Login Status {loginStatus ? "Yes" : "No"}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleTransaction}>Post Transaction</button>
    </div>
  );
}

export default Login;
