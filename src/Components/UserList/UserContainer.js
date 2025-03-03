import React, { useEffect, useState } from 'react'
import UserList from './UserList';

export default function UserContainer() {

    //Container/ Presentation Design Pattern

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const getUsers = async () =>{
        setIsLoading(true);
        try{
            const response = await fetch("https://reqres.in/api/users?page=1")
            const json = await response.json();

            if(!json.data) return

            setUsers(json.data);
        }
        catch(error){
            setError(true);
        }finally{
            setIsLoading(false);
        }

    }

useEffect(()=>{
    getUsers();
},[])
  return (
    <div><UserList users={users} loading={isLoading} error={error} /></div>
  )
}
