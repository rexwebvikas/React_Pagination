import axios from 'axios'
import {Add_To_Cart} from '../Constants'

// export const addToCart =(data)=>{
//     console.warn("action",data)

//     return{

//         type: Add_To_Cart,
//         data:data 
//     }
// }
// export const addToCart =()=> dispatch=>{
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>{
//         res.json()
//     }).then((data)=>{
//         console.log(data,"vikassssssssssss")
//     })
// }



// export const addToCart = () => dispatch =>{
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(res=>{
//       dispatch({
//         type: Add_To_Cart,
//         payload: res.data
//       });
//     })
//     .catch(err=>{
//       dispatch({
//         type: Add_To_Cart,
//         payload: {
//           data: false,
//           err,
//         }
//       });
//     })
//   }



export const addToCart = ()=>dispatch =>{

  axios.get ("https://api.instantwebtools.net/v1/passenger")
  .then(res=>{
    dispatch({
      type:Add_To_Cart,
      payload:res.data
    });
  })
  .catch(err=>{
    dispatch({
      type:Add_To_Cart,
      payload:err

    });
  })
  
}