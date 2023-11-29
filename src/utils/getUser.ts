import Cookies from "js-cookie";

export const getUser = () => {
  const userData = Cookies.get("user");
  if (userData) {
    const user = JSON.parse(userData);
    return user;
  } else return undefined;
};
