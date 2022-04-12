import { createContext , useState} from "react";

export const LoggedInUsersContext = new createContext()

const LoggedInUsersContextProvider = ({children}) => {
    const [loggedInUsers, setLoggedInUsers] = useState(null)
    
    return (
        <LoggedInUsersContext.Provider value={{loggedInUsers ,setLoggedInUsers}}>
            {children}
        </LoggedInUsersContext.Provider>
    )
}

export default LoggedInUsersContextProvider