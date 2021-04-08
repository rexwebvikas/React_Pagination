import React, {useState, useEffect} from 'react';
import {addToCart, Delete,Edit} from '../Services/Actions/Actions'
import { useSelector, useDispatch} from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
// import Paper from '@material-ui/core/Paper';
// import { TablePagination } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
 import ShowTable from './ShowTable';

const Home =()=>{

    
    const dispatch = useDispatch()
    const  FirstName = useSelector(state=> state.cardItems.cardData.data)
    const page=useSelector(state=>state.cardItems.totalPages)
  const [data,setData]=useState([]);
  const [editTable, setEditTable] = useState(false)
  const [filter, setFilter] = useState();
  const [edit,setEdit] = useState({
    name:"",
    trips:"",
    country:"",
    logo:"",
    head_quaters:"",
    id:""
    
    
  })



  // const handleperpage=(i,j)=>{
  //   dispatch(addToCart(j))

  // }
  
  console.log("Page ",page)
  console.log("Data",data);
    useEffect(()=>{
        dispatch(addToCart())
        addToCart();
      
    }, [])
    useEffect(()=>{
      if(FirstName)
      {
        setData(FirstName);
      }
      else{
        setData([])
      }
    },[FirstName])

          




    return(
        <>


    { editTable ? null: <div>
    <div>
    <input type="text" placeholder="Search.." name="search"/>
    </div>
        <div className="cart-warpper">
    
            <div className ="img-wrapper item">
        
             </div>
        </div>
        <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            {/* <TableCell>NUMBER</TableCell> */}
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">TRIPS</TableCell>
            <TableCell align="right">__V</TableCell>
            <TableCell align="right">__ID</TableCell>
            <TableCell align="right">AIRLINE_COUNTRY</TableCell>
            <TableCell align="right">AIRLINE_ESTABLISHED</TableCell>
            <TableCell align="right">AIRLINE_HEAD_QUATERS</TableCell>
            <TableCell align="right">AIRLINE_ID</TableCell>
             <TableCell align="right">AIRLINE_LOGO</TableCell> 
            <TableCell align="right">AIRLINE_NAME</TableCell>
            <TableCell align="right">AIRLINE_SLOGAN</TableCell>
            <TableCell align="right">AIRLINE_WEBSITE</TableCell>
            <TableCell align ="right">DELETE_ITEM</TableCell>
            <TableCell align ="right">EDIT_ITEM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
     
        {data.map((i,j)=>{
          return (<TableRow>
          {/* <TableCell key></TableCell> */}
              {/* <TableCell>{j}</TableCell> */}
              <TableCell>{i.name}</TableCell>
              <TableCell>{i.trips}</TableCell>
              <TableCell>{i.__v}</TableCell>
              <TableCell>{i._id}</TableCell>
              <TableCell>{i.airline.country}</TableCell>
              <TableCell>{i.airline.established}</TableCell>
              <TableCell>{i.airline.head_quaters}</TableCell>
              <TableCell>{i.airline.id}</TableCell>
               <TableCell><a href={`https://${i.airline.website}`} target="#"><img src= {i.airline.logo}/></a></TableCell>
              <TableCell>{i.airline.name}</TableCell>
              <TableCell>{i.airline.slogan}</TableCell>
              <TableCell>{i.airline.website}</TableCell>

               <TableCell><Button variant="contained" color="primary" onClick={()=> dispatch(Delete(i._id))}>
                DELETE
              </Button></TableCell>
              <TableCell><Button variant="contained" onClick={()=> { setEditTable(true); console.log(editTable) ;
              ; setEdit({
                id: i._id,
                name: i.name,
                logo: i.logo,
                country: i.airline.country,
                head_quaters:i.airline.head_quaters,
                trips: i.trips
              })}}
            
              >Edit</Button></TableCell>
            </TableRow>)})
            }
      
       
        </TableBody>
      </Table>
    </TableContainer>
       
    <Pagination count={page} onChange={(e,i)=>{dispatch(addToCart(i))}}></Pagination>
    {/* <Pagination count={page} onChange={handleperpage}></Pagination> */}

        <div>   
          </div>
           </div>
       

    }
     {editTable ? <ShowTable  setEditTable={setEditTable} setEdit={setEdit} edit={edit} /> : null}

           

        </>
     
    )
}
export default Home;