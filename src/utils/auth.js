export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };
  
  export const getAccessToken = () => {
    return localStorage.getItem("access");
  };
  
  export const isAuthenticated = () => {
    return !!getAccessToken();
  };