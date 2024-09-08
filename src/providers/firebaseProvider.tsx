import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "firebaseconfig";

export const UserContext = createContext({
  user: null,
  validatingUser: false,
});

const UserProvider = (props) => {
  const [user, setUser] = useState<User | null>(null);
  const [validatingUser, setValidatingUser] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setValidatingUser(false);
    });

    return () => unSubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        validatingUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
