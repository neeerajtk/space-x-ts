
import React, {useState,useEffect} from 'react';
import '../styles/Body.css';
import { v4 as uuidv4 } from 'uuid';
import {
   
    EuiFlexGroup
  
  } from '@elastic/eui';
import Axios from 'axios';
import Card from './Card';




function Body() {
    const [data, setData] = useState([]);

    const getApiDetails = useEffect(()=>{
            const result =  Axios.get('https://api.spacexdata.com/v3/launches')
            .then(result=>{
                console.log('Inside getdata');
                setData(result.data);
                console.log(result);            
            })
            .catch(error => {
                console.log(error);
            })
            
            
        },[])
    
    
    
    

    return (
        <div className="space-date">
         {
                <EuiFlexGroup gutterSize="l">

                {data.map((item) => (
                    <Card spaceItem={item}/>    
             )
                )
        }
                </EuiFlexGroup>
            }
        
        </div>
    )}
        
    
export default Body;

