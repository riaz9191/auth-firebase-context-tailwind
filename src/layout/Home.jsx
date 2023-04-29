import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            home { user && <span>{user.displayName}</span>}
        </div>
    );
};

export default Home;