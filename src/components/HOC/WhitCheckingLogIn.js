import React, {useContext, useCallback} from 'react';
import { LoggedInUserContext } from '../../contexts/LoggedInUserContext'; 
import Forms from '../Forms/Forms';

const WhitCheckingLogin = Component => {
    return function WhitCheckingLoginComponent({...props}) {
        const {loggedInUser ,setLoggedInUser} = useContext(LoggedInUserContext)
        const handleLogOut = useCallback(() => setLoggedInUser(null))

        return (
            <>
                {loggedInUser === null ? <Forms /> : 
                    <Component 
                        name={loggedInUser.name} 
                        handleLogOut={handleLogOut}
                        {...props}/>}
            </>
        ) 
    }
}

export default WhitCheckingLogin;
