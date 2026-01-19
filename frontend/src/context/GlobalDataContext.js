import { createContext, useContext, useState } from "react";

const GlobalDataContext = createContext();

export const GlobalDataProvider = ({ children }) => {
  const [userForm, setUserForm] = useState();
  const [errorService, setErrorService] = useState();
  const [user, setUser] = useState();
  const [signupForm, setSignupForm] = useState();
  const [pageAccueil, setPageAccueil] = useState();




  return (
    <GlobalDataContext.Provider
      value={{
          userForm,
          errorService,
        user,
          setUser,
          pageAccueil,
          setPageAccueil,
        setUserForm,
          setErrorService,
          signupForm,
          setSignupForm,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(GlobalDataContext);
