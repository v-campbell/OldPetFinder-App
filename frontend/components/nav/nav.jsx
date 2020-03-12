import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout, openModal }) => {

    const nav = () => (

        <div className='nav'>

            {!currentUser ? 
            (  <>
                <Link className='nav-left-logo' to='/'>
                        〄
                </Link>
                <nav className='nav-right-logged-out'>
                    <button className='nav-buttons' onClick={() => openModal('LOG IN')}>LOGIN</button>
                    |
                    <button className='nav-buttons' onClick={() => openModal('SIGN UP')}>SIGNUP</button>
                </nav>
                </>
            ) : (
                <>
                <div className='nav-left'>
                    <Link className='nav-left-logo' to='/'>
                                〄
                    </Link>
                    <h1 className='nav-left welcome'>Welcome in, </h1>
                    <h1 className='nav-left welcome-2'>{currentUser.username}.</h1>
                </div>
                <nav className='nav-right-loggedin'>
                    <Link to='/' className='nav-icons'>
                        {/* <i className="fas fa-home fa-3x"></i> */}
                        <img src={window.homeURL} width='30px' height='30px'/>
                    </Link>
                    
                    <Link to='/pets' className='nav-icons'>
                        {/* <i className="fas fa-dog fa-3x"></i> */}
                        <img src={window.smugURL} width='40px' height='30px'/>
                    </Link>

                    <div className='nav-user'>
                        <Link to='/' className='nav-icons'>
                            {/* <i className="fas fa-user-circle fa-3x" width='10px' height='10px'></i> */}
                            <img src={window.userURL} width='30px' height='30px'/>
                        </Link>
                        {/* <br/>
                        <Link to='/' className='nav-name'>
                            {currentUser.firstName}
                        </Link> */}
                    </div>
                    <div className='nav-button-loggedin nav-icons' onClick={logout}>LOG OUT</div>
                </nav>
                </>


            )}
        </div>

    );

    return (
        <div>
            {nav()}
        </div>
    );
}

export default Nav;