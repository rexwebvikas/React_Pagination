
import axios from 'axios'
import {Add_To_Cart, DELETE_ITEM,EDIT_ITEM,SEARCH_BAR} from '../Constants'

export const addToCart = (index)=>dispatch =>{

  axios.get (`https://api.instantwebtools.net/v1/passenger?page=${index}&size=5`)
  .then(res=>{
    console.log(res,"ressssssssssssssssssssssssss")
    dispatch({
      type:Add_To_Cart,
      payload:res.data,
    

    });
    
  })
  .catch(err=>{
    dispatch({
      type:Add_To_Cart,
      payload:err

    });
  })

  
}
export const Delete =(index)=>dispatch=>{

  return dispatch({
    type: DELETE_ITEM , 
    payload: index
  })
    
  
}
export const Edit = (id)=>dispatch=>{

     return dispatch({

      type:EDIT_ITEM,
      payload:id

     })

}

export const search_bar= (key)=>{


  return({
    type:SEARCH_BAR,
    payload:key
  })
}