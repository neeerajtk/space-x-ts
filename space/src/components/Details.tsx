import React, { useEffect, useState } from "react";
import "../styles/Details.css";
import { launchData } from "../types/launchDataTypes";
import Axios from "axios";

import { useParams } from "react-router-dom";

function Details() {
  const match = useParams<{ id: string }>();
  console.log("match");
  console.log(match);

  const [data, setData] = useState<launchData | null>(null);

  useEffect(() => {
    async function getSingleData() {
      let search_id = match.id;
      let res = await Axios.get(
        `https://api.spacexdata.com/v3/launches/${search_id}`
      );

      let singleResult: launchData = {
        mission_patch_small: res.data.links.mission_patch_small,
        mission_name: res.data.mission_name,
        launch_date_utc: res.data.launch_date_utc,
        details: res.data.details,
        flight_number: res.data.flight_number,
        launch_site: res.data.launch_site,
        rocket: res.data.rocket,
      };
      setData(singleResult);
    }
    getSingleData();
  }, []);

  return (
    <>
      {data ? (
        <div className="details">
          <div className="box">
            <img src={data.mission_patch_small} />

            <h1>{data.mission_name}</h1>
            <h6>
              {data.launch_date_utc.slice(0, 10)} ,{" "}
              {data.launch_date_utc.slice(11, 16)}
            </h6>
            <p>
              <span>Site Name : </span>
              {data.launch_site.site_name}
            </p>
            <p>
              <span>Mission Name :</span> {data.mission_name}
            </p>
            <p>
              <span>Rocket Type : </span>
              {data.rocket.rocket_type}
            </p>
            {data.details ? (
              <p>
                <span>Mission Details : </span>
                {data.details.slice(0, 200)}
              </p>
            ) : (
              <p>
                <span>Mission Details : No Details </span>{" "}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
    </>
  );
}

export default Details;
