
import React, { useState } from 'react';

import {
  EuiButton,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiText,
} from '@elastic/eui';

const ItemModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);

  let modal;

  if (isModalVisible) {
    modal = (
      <EuiOverlayMask onClick={closeModal}>
        <EuiModal onClose={closeModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>Overflow test</EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiText>
              <p>
                KING. Whats he that wishes so? My cousin, Westmorland? No, my
                fair cousin; If we are mark&rsquo;d to die, we are enow To do
                our country loss; and if to live, The fewer men, the greater
                share of honour. God&rsquo;s will! I pray thee, wish not one man
                more. By Jove, I am not covetous for gold, Nor care I who doth
                feed upon my cost; It yearns me not if men my garments wear;
                Such outward things dwell not in my desires. But if it be a sin
                to covet honour, I am the most offending soul alive. No, faith,
                my coz, wish not a man from England. God&rsquo;s peace! I would
                not lose so great an honour As one man more methinks would share
                from me For the best hope I have. O, do not wish one more!
                Rather proclaim it, Westmorland, through my host, That he which
                hath no stomach to this fight, Let him depart; his passport
                shall be made, And crowns for convoy put into his purse; We
                would not die in that man&rsquo;s company That fears his
                fellowship to die with us. This day is call&rsquo;d the feast of
                Crispian. He that outlives this day, and comes safe home, Will
                stand a tip-toe when this day is nam&rsquo;d, And rouse him at
                the name of Crispian. He that shall live this day, and see old
                age, Will yearly on the vigil feast his neighbours, And say
                &ldquo;To-morrow is Saint Crispian.&rdquo; Then will he strip
                his sleeve and show his scars, And say &ldquo;These wounds I had
                on Crispin&rsquo;s day.&rdquo; Old men forget; yet all shall be
                forgot, But he&rsquo;ll remember, with advantages, What feats he
                did that day. Then shall our names, Familiar in his mouth as
                household words— Harry the King, Bedford and Exeter, Warwick and
                Talbot, Salisbury and Gloucester— Be in their flowing cups
                freshly rememb&rsquo;red. This story shall the good man teach
                his son; And Crispin Crispian shall ne&rsquo;er go by, From this
                day to the ending of the world, But we in it shall be
                rememberèd— We few, we happy few, we band of brothers; For he
                to-day that sheds his blood with me Shall be my brother; be he
                ne&rsquo;er so vile, This day shall gentle his condition; And
                gentlemen in England now a-bed Shall think themselves
                accurs&rsquo;d they were not here, And hold their manhoods cheap
                whiles any speaks That fought with us upon Saint Crispin&rsquo;s
                day.
              </p>
            </EuiText>
          </EuiModalBody>

          <EuiModalFooter>
            <EuiButton onClick={closeModal} fill>
              Close
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    );
  }
  return (
    <div>
      <EuiButton onClick={showModal}>Show modal</EuiButton>

      {modal}
    </div>
  );
};

export default ItemModal;