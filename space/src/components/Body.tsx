import React, { useState, useEffect } from "react";
import "../styles/Body.css";
import { v4 as uuidv4 } from "uuid";
import { EuiFlexGroup, EuiFlexItem, EuiButton } from "@elastic/eui";
import Axios from "axios";
import Card from "./Card";
import { launchData } from "../types/launchDataTypes";

function Body() {
  const [data, setData] = useState<Array<launchData>>([]);
  const [newData, setNewData] = useState<Array<launchData>>([]);
  const [low, setLow] = useState<number>(0);
  const [high, setHigh] = useState<number>(4);

  useEffect(() => {
    async function getLaunchData() {
      let res = await Axios.get("https://api.spacexdata.com/v3/launches");
      let resultData: launchData[] = res.data.map((item: any) => {
        return {
          mission_patch_small: item.links.mission_patch_small,
          mission_name: item.mission_name,
          launch_date_utc: item.launch_date_utc,
          details: item.details,
          flight_number: item.flight_number,
          links: item.links,
        };
      });
      setData(data.concat(resultData));
      console.log("DATA IS:::");
      console.log(resultData);
      setNewData(data.slice(0, 4));
      console.log("New data: ");
      console.log(newData);
    }
    getLaunchData();
  }, []);

  return (
    <>
      <div className="space-date">
        {
          <EuiFlexGroup gutterSize="l">
            {newData.map((item) => (
              <Card spaceItem={item} />
            ))}
          </EuiFlexGroup>
        }
      </div>
      <div className="page-buttons">
        <EuiFlexItem grow={false}>
          <EuiButton href="http://www.elastic.co">Next Page</EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton href="http://www.elastic.co">Previous Page</EuiButton>
        </EuiFlexItem>
      </div>
    </>
  );
}

export default Body;
