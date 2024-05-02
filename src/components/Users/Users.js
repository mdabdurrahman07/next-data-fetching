"use client"
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [user , Setuser] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data) => Setuser(data))
    }, [])
    return (
        <div>
             <h1 className="text-4xl text-center text-lime-500 my-4">Total User {user?.length}</h1>
             {
                user?.map(data => (
                    <div key={data?.id} className="w-full">
       
                    <div className="card w-[70%] mx-auto bg-gray-500 shadow-xl my-3">
                      <div className="card-body">
                        <h2 className="card-title">{data?.name}</h2>
                        <p>{data?.email}</p>
                        <p>{data?.phone}</p>
                        <p>{data?.website}</p>
                       
                      </div>
                    </div>
                  </div>
                ))
             }
        </div>
    );
};

export default Users;