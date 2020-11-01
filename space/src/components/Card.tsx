import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css'


import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
} from '@elastic/eui';

const cardFooterContent = (
  <EuiFlexGroup justifyContent="flexEnd">
    <EuiFlexItem grow={false}>
      <EuiButton>Go for it</EuiButton>
    </EuiFlexItem>
  </EuiFlexGroup>
);

interface Props {
  spaceItem: Array<string>;
}

const Card:React.FC<Props> = ({spaceItem}) => (
  <EuiFlexGroup gutterSize="l">
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={
          <div>
            <img
              src="https://source.unsplash.com/400x200/?Nature"
              alt="Nature"
            />
          </div>
        }
        title="Elastic in Nature"
        description="Example of a card's description. Stick to one or two sentences."
        footer={cardFooterContent}
      />
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image="https://source.unsplash.com/400x200/?Water"
        title="Elastic in Water"
        description="Example of a card's description. Stick to one or two sentences."
        footer={cardFooterContent}
      />
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        href="https://elastic.github.io/eui/"
        image="https://source.unsplash.com/400x200/?City"
        icon={<EuiIcon size="xxl" type="logoBeats" />}
        title={'Beats in the City'}
        description="This card has an href and should be a link."
      />
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default Card;