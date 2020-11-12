import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiButton, EuiCard, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { launchData } from "../types/launchDataTypes";
import { Link } from "react-router-dom";

interface Props {
  spaceItem: launchData;
}

function Card(props: Props) {
  return (
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={
          <div>
            <img src={props.spaceItem.mission_patch_small} alt="Nature" />
          </div>
        }
        title={props.spaceItem.mission_name}
        description={`[${props.spaceItem.launch_date_utc.slice(
          0,
          10
        )} , ${props.spaceItem.launch_date_utc.slice(11, 16)}] 
        ${props.spaceItem.details}`}
        footer={
          <EuiFlexGroup justifyContent="flexEnd">
            <Link to={`/details/${props.spaceItem.flight_number}`}>
              <EuiFlexItem grow={false}>
                <EuiButton>View More Details</EuiButton>
              </EuiFlexItem>
            </Link>
          </EuiFlexGroup>
        }
      />
    </EuiFlexItem>
  );
}

export default Card;
