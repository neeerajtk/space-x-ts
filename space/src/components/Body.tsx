import React, { useState, useEffect } from "react";
import "../styles/Body.css";
import { EuiFlexGroup, EuiFlexItem, EuiButton } from "@elastic/eui";
import Axios from "axios";
import Card from "./Card";
import { launchData } from "../types/launchDataTypes";

function Body() {
  const [data, setData] = useState<Array<launchData>>([]);
  const [high, setHigh] = useState<number>(0);

  function handleClick() {
    setHigh(high + 4);
  }

  useEffect(() => {
    async function getLaunchData() {
      let res = await Axios.get(
        `https://api.spacexdata.com/v3/launches?limit=4&offset=${high} `
      );
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
      // setData(data.concat(resultData));
      setData((prevData) => prevData.concat(resultData));
    }
    getLaunchData();
  }, [high]);

  return (
    <>
      <div className="space-date">
        {
          <EuiFlexGroup gutterSize="l">
            {data.map((item) => (
              <Card spaceItem={item} key={item.flight_number} />
            ))}
          </EuiFlexGroup>
        }
      </div>
      <div className="load_button">
        <EuiFlexItem>
          <EuiButton onClick={handleClick}>Load More</EuiButton>
        </EuiFlexItem>
      </div>
    </>
  );
}

export default Body;
