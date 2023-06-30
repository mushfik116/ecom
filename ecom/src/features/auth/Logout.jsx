import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectloggedInUser, signOutAsync } from "./authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectloggedInUser);
  useEffect(() => {
    dispatch(signOutAsync(user.id));
  }, []);

  return (
    <div className="flex align-center justify-center">
      Logged Out successfully
    </div>
  );
};

export default Logout;
