"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css';
import useSWR  from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashbord = () => {
  const session = useSession();
  const router = useRouter()
  
  useEffect(() => {
    

    if(session.status === "unauthenticated"){
      router?.push("/dashboard/login")
    }

  }, [session.status]);
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  
  // useEffect(() => {
    //   const getData = async () => {
      //     setIsLoading(true)
      //       const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-store"});
      
      //       if(!res.ok){
        //         setErr(true);
  //       }

  //       const data = await res.json();
      
  //       setData(data);
  //       setIsLoading(false);
  //     };
      
  //     getData()    
  // }, []);
  
  console.log(session);
  

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  

  if(session.status === "loading"){
    return <p>Loading...</p>
  }

 

  if(session.status === "authenticated"){
    return (
      <div className={styles.container}>
        Dashbord
      </div>
    )

  }
}

export default Dashbord