import { IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { arrowUpOutline } from 'ionicons/icons';

import FormSlider from '../components/FormSlider';
import './Home.css';

const Home: React.FC = (props) => {

  // Declare a new state variable
  const [isAtTop, setIsAtTop] = useState(true);

  const contentRef = useRef(null);
  const scrollToTop = () => {
      // @ts-ignore
      contentRef.current.scrollToTop();
  };

  //let isAtTop = true; // true if the contents have not been scrolled.
  const enableScrollTopBtn = (e:any) => {
    // @ts-ignore
    const atTop = e.detail.scrollTop;
    if (atTop > 0) {
      setIsAtTop(false);
      //console.log('enable button!');
    } else {
      setIsAtTop(true);
      //console.log('DISABLE button!');
    }
    // console.log(contentRef.current.pageYOffset);
  };

  return (
    <IonPage>

      <IonHeader className="ion-no-border">
        <IonToolbar color="primary">
          <IonTitle>Header: FLYZermatt - Book your flight (FZ Logo)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent id={"scrollingContents"} scrollEvents={true} ref={contentRef}  onIonScroll={enableScrollTopBtn}>
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
          <div id={"leftBtnSpacer"} className="footer-spacer ion-float-left  ion-hide-sm-down"></div>
          <IonButtons className="ion-float-left">
            <IonButton>
              Back
            </IonButton>
          </IonButtons>
          <div id={"rightBtnSpacer"} className="footer-spacer ion-float-right ion-hide-sm-down"></div>
          <IonButtons className="ion-float-right">
            <IonButton>
              Continue
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>

      <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton disabled={isAtTop} className="tweak-to-top-btn" title="Scroll to Top..." size="small"  onClick={()=>scrollToTop()}> 
            <IonIcon icon={arrowUpOutline}/>
          </IonFabButton>
      </IonFab>

    </IonPage>
  );
};


export default Home;
