import React, {useState, useEffect} from 'react';
import {addToCart} from '../Services/Actions/Actions'
import { useSelector, useDispatch} from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';
const Home =()=>{
    
    const dispatch = useDispatch()
    const  FirstName = useSelector(state=> state.cardItems.cardData.data)
    const page=useSelector(state=>state.cardItems.cardData.totalPages)
  const [data,setData]=useState([]);

  const handleperpage=(i,j)=>{
    dispatch(addToCart(j))

  }
   
    
    useEffect(()=>{
        dispatch(addToCart(1))
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
    
    const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          marginTop: theme.spacing(2),
        },
      },
    }));
    const classes = useStyles();



    return(
        <>
        <div>

        <div className ="add-to-card">
        </div>
        <div className="cart-warpper">
    
            <div className ="img-wrapper item">
        
             </div>
        </div>
        <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>NUMBER</TableCell>
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
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((i,j)=>{
          return (<TableRow>
              <TableCell>{j}</TableCell>
              <TableCell>{i.name}</TableCell>
              <TableCell>{i.trips}</TableCell>
              <TableCell>{i.__v}</TableCell>
              <TableCell>{i._id}</TableCell>
              <TableCell>{i.airline.country}</TableCell>
              <TableCell>{i.airline.established}</TableCell>
              <TableCell>{i.airline.head_quaters}</TableCell>
              <TableCell>{i.airline.id}</TableCell>
              <TableCell>{i.airline.logo}</TableCell>
              <TableCell>{i.airline.name}</TableCell>
              <TableCell>{i.airline.slogan}</TableCell>
              <TableCell>{i.airline.website}</TableCell>
            </TableRow>)})}
       
        </TableBody>
      </Table>
    </TableContainer>
    <Pagination count={page} onChange={handleperpage}></Pagination>
        <div>   
          </div>
           </div>
        </>
    )
}
export default Home;