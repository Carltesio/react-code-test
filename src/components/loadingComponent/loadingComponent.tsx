import React, { useState } from 'react';
import {
  IonLoading,
  IonButton,
  IonItem,
  IonLabel,
  IonReorderGroup,
  IonContent
} from '@ionic/react';
import './loadingComponent.css';

const LoadingComponent: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => {
    setShowLoading(false);
  }, 100000);

  return (
    <IonContent class='body'>
      <IonReorderGroup >
        <IonItem >
          <IonLabel>
            <IonLoading
            cssClass='circle pulse orange'
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(false)}
            duration={3000}
            />
          </IonLabel>
        </IonItem>
      </IonReorderGroup> 
      <IonButton
        onClick={() => setShowLoading(true)}
        expand="block"
        >Show Loading component
      </IonButton>
    </IonContent>
  );
};

export default LoadingComponent
