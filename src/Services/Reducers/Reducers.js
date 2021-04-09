
import {Add_To_Cart, DELETE_ITEM, EDIT_ITEM,SEARCH_BAR} from '../Constants'

const initialState ={
    cardData:[],
    totalPages:""
   
}

export default function cardItems(state = initialState,action){
 
    switch(action.type){
        case Add_To_Cart:{
            console.log("actions",action);
            
            return{
                ...state,
                cardData: action.payload,
                totalPages: action.payload.totalPages
            }
        }
        case DELETE_ITEM:{
            console.log(state,"lllllllllllllllllllllllllllllll")
            const del =state.cardData.data.filter((val)=>{return !(val._id.includes(action.payload))})

            return{
                ...state,
                cardData: {
                    data: del
                }
            }
        }

        case EDIT_ITEM:{

            const del1 = state.cardData.data.filter((val)=>{return(val._id == action.payload.id)})
            console.log(del1, "heloooooooooooooooooooooooooooooo")
             del1[0].name = action.payload.name;
             del1[0].trips = action.payload.trips;
             del1[0].airline.country = action.payload.country;
             del1[0].airline.logo = action.payload.logo;
             del1[0].airline.head_quaters = action.payload.head_quaters;
             
            

            return({
                ...state,
            })
                
              
        
    }
    case SEARCH_BAR:{

        console.log(state,"serrcg_bar")
    }
        default:
            return {
                ...state,
            }
    }

}