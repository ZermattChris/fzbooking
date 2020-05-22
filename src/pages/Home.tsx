import { IonGrid, IonRow, IonCol, IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>

      <IonHeader className="ion-no-border">
        <IonToolbar color="primary">
          <IonTitle>Header: FLYZermatt - Book your flight (FZ Logo)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid class="ion-no-padding">
          <IonRow>
            <IonCol size="2" className="maroon ion-hide-md-down">
              left
           </IonCol>
            <IonCol size-md="8" size="12">
              <ExploreContainer />
            </IonCol>
            <IonCol size="2" className="maroon ion-hide-md-down">
              right
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonFooter className="ion-no-border">
        <IonToolbar>
          <div id="leftBtnSpacer" className="footer-spacer ion-float-left  ion-hide-sm-down"></div>
          <IonButtons className="ion-float-left">
            <IonButton>
              Back
            </IonButton>
          </IonButtons>
          <div id="rightBtnSpacer"  className="footer-spacer ion-float-right ion-hide-sm-down"></div>
          <IonButtons className="ion-float-right">
            <IonButton>
              Continue
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>

      
    </IonPage>
  );
};

export default Home;
