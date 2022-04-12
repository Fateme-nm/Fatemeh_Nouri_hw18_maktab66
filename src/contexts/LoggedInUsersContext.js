import { createContext , useState} from "react";

export const LoggedInUsersContext = new createContext()

const LoggedInUsersContextProvider = ({children}) => {
    const [loggedInUsers, setLoggedInUsers] = useState([])
    const handleNewLoggedIn = user => setLoggedInUsers([...loggedInUsers, user])
    return (
        <LoggedInUsersContext.Provider value={handleNewLoggedIn}>
            {children}
        </LoggedInUsersContext.Provider>
    )
}

export default LoggedInUsersContextProvider