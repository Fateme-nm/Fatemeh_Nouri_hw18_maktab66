import React, {useContext, useCallback} from 'react';
import { LoggedInUsersContext } from '../../contexts/LoggedInUsersContext'; 
import Forms from '../Forms/Forms';

const WhitCheckingLogin = Component => {
    return function WhitCheckingLoginComponent({...props}) {
        const {loggedInUsers ,setLoggedInUsers} = useContext(LoggedInUsersContext)
        const handleLogOut = useCallback(() => setLoggedInUsers(null))

        return (
            <>
                {loggedInUsers === null ? <Forms /> : 
                    <Component 
                        name={loggedInUsers.name} 
                        handleLogOut={handleLogOut}
                        {...props}/>}
            </>
        ) 
    }
}

export default WhitCheckingLogin;
