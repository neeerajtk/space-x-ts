
import React, {useState,useEffect} from 'react';
import '../styles/Body.css';
import { v4 as uuidv4 } from 'uuid';
import {
   
    EuiFlexGroup
  
  } from '@elastic/eui';
import Axios from 'axios';
import Card from './Card';

type launchData = {
    links : any; //object
    mission_name: string;
    launch_date_utc: string;
    details: string;
}

function Body() {
    const [data, setData] = useState<Array<launchData>>([]);

   useEffect(()=>{
       async function getLaunches() {
           let res = await Axios.get('https://api.spacexdata.com/v3/launches');
           let result:launchData = {
               links: res.data.links,
               mission_name: res.data.mission_name,
               launch_date_utc: res.data.launch_date_utc,
               details:res.data.details
           }; 
           setData(data.concat(result));
           console.log("DATA IS ::: ");
           console.log(data);
           
           
       }
       getLaunches();
   })
    

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

