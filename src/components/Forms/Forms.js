import React, {useState} from 'react';
import Login from "../Login/Login";
import Register from "../Register/Register";
import LoggedInUsersContextProvider from '../../contexts/LoggedInUsersContext';
import './Forms.css'

const Forms = () => {
    const [login, setLogin] = useState(true)

    return (
        <div className='Forms'>
            <div className='Forms-btns'>
                <button 
                    className={`F-btn ${login ? 'activeBtn' : ''}`}
                    onClick={() => setLogin(!login)}>ورود
                </button>
                <button 
                    className={`F-btn ${login ? '' : 'activeBtn'}`}
                    onClick={() => setLogin(!login)}>ثبت نام
                </button>
            </div>
            {!login ? <Register /> : 
            (<LoggedInUsersContextProvider>
                <Login />
            </LoggedInUsersContextProvider>)}
        </div>
    );
}

export default Forms;
