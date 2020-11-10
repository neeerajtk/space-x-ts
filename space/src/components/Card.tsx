import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css';


import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  
} from '@elastic/eui';
import ItemModal from './ItemModal';

const cardFooterContent = (
  <EuiFlexGroup justifyContent="flexEnd">
    <EuiFlexItem grow={false}>
      <EuiButton>View More Details</EuiButton>
    </EuiFlexItem>
  </EuiFlexGroup>
);

interface Props {
  spaceItem: ;
}

const Card:React.FC<Props> = ({spaceItem}:any) => (
  // <EuiFlexGroup gutterSize="l">
  // <>
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={
          <div>
            <img
              src={spaceItem.links.mission_patch_small}
              alt="Nature"
            />
          </div>
        }
        title={spaceItem.mission_name}
        // title={spaceItem.flight_number} '.' {spaceItem.mission_name}
        // description="Example of a card's description. Stick to one or two sentences."
        description={ `[${spaceItem.launch_date_utc.slice(0,10)} , ${spaceItem.launch_date_utc.slice(11,16)}] 
        ${spaceItem.details}`}
        footer={cardFooterContent} onClick={ItemModal}
      />
    </EuiFlexItem>
);
   


export default Card;