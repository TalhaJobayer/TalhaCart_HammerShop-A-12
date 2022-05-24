import React, { useEffect, useState } from 'react';

const UseGetToken = user =>{
    const [Token, setToken] = useState('');
    useEffect( () =>{
        const email = user?.user?.email;
        const CurrentUser = {email: email};
        if(email){
            fetch(`http://localhost:5000/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(CurrentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.Token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [Token];
};

export default UseGetToken;