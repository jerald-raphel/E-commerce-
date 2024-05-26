// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function ProtectedPage({children}) {
// const navigate = useNavigate()
// const [user,setUser]=useState(null)
//   const getUser = async ()=>{
//     try {
//       const response = await fetch()
//       if (response.success){
//           getUser(response.data)
//       }else{
//         // throw new Error(response.message);
//         console.log("error")
//       }
      
//     } catch (error) {
//       // message.error(error.message)
//       console.log("error")
//       localStorage.removeItem('token')
//       navigate ('/login')
//     }
//   }

//   useEffect(()=>{
//     getUser();
//   },[])
//   return (
//     <div>
//       <h1>
//       welcome{user?.name}
//       </h1>
//       {children}
//     </div>
//   )
// }

// export default ProtectedPage
