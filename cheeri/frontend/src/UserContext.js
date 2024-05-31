import React, { createContext, useState, useEffect, Children } from 'react';

//creating a context 
export const UserContext = createContext();

// creating a provider component 
export const UserProvider = ({ childrem }) => {
    const [user, setUser] = useState(null); 

    //Load the user data from localstorage or a persistence layer 
    useEffect(() => {
        const storedUser = localStorage.getItem('user'); 
        if (storedUser) {
            setUser(JSON.parse(storedUser)); 
        }
    }, []); 

    //save users dat to local storage when the user state changes 
    useEffect(() => {
        if(user) {
            localStorage.setItem('user', JSON.stringify(user)); 
        } else {
            localStorage.removeItem('user'); 
        }
    }, [user]); 

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {Children}
        </UserContext.Provider>
    );
}; 
