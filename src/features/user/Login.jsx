import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./slice";
import { useGetUserDetailsQuery, useTransactMutation } from "./api";
import './userStyles.scss';
function Login() {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.user.isAuthenticated) || false;

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
    console.log(userDetailFetchFailed);
  }

  return (
    <div role="login" className="flex flex-col justify-center items-center">
      {userDetailFetchSuccess && `userDetails ${data.id}`}
       <p><span className="font-bold">Login Status : </span>{loginStatus ? "Yes" : "No"}</p>
      <div className="m-2">
      <button className="btn btn-login" onClick={handleLogin}>Login</button>
      <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
      <button className="btn btn-post" onClick={handleTransaction}>Post Transaction</button>
    </div>
    </div>
  );
}

export default Login;