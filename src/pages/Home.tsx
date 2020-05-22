import { IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import React, {useRef} from 'react';
import { add, settings, share, arrowUpCircleSharp, arrowUpOutline, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

import FormSlider from '../components/FormSlider';
import './Home.css';

const Home: React.FC = (props) => {

  const contentRef = useRef(null);
  const scrollToTop = () => {
      // @ts-ignore
      contentRef.current.scrollToTop();
  };

  return (
    <IonPage>

      <IonHeader className="ion-no-border">
        <IonToolbar color="primary">
          <IonTitle>Header: FLYZermatt - Book your flight (FZ Logo)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollEvents={true} ref={contentRef}>
        <IonGrid class="ion-no-padding">
          <IonRow>
            <IonCol size="2" className="maroon ion-hide-md-down">
              left
           </IonCol>
            <IonCol size-md="8" size="12">


              {/* ------------- This is our dynamic multi-step form ------------- */}
              <FormSlider />


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

      <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton className="tweak-to-top-btn" title="Scroll to Top..." size="small"  onClick={()=>scrollToTop()}> 
            <IonIcon icon={arrowUpOutline}/>
          </IonFabButton>
      </IonFab>

    </IonPage>
  );
};


export default Home;
