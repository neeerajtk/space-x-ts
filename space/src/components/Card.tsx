import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";

import { EuiButton, EuiCard, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
// import ItemModal from './ItemModal';
import { launchData } from "../types/launchDataTypes";
import { useHistory, Link } from "react-router-dom";

// const cardFooterContent = (
//   <EuiFlexGroup justifyContent="flexEnd">
//     <Link to={`/details/${props.spaceItem.flight_number}`}></Link>
//     <EuiFlexItem grow={false}>
//       <EuiButton>View More Details</EuiButton>
//     </EuiFlexItem>
//     </Link>
//   </EuiFlexGroup>
// );

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
        // title={spaceItem.flight_number} '.' {spaceItem.mission_name}
        // description="Example of a card's description. Stick to one or two sentences."
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
