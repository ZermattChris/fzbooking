import { IonSlides, IonSlide, IonButton, IonIcon } from '@ionic/react';
import React from 'react';
import './FormSlider.css';

import { airplane, arrowForwardSharp } from 'ionicons/icons';

interface ContainerProps { }

const FormSlider: React.FC<ContainerProps> = () => {
  return (
    <div id="main-contents" className="big-vertical-box">
      <IonSlides>

        <IonSlide>
          <div>
            <img alt="favicon" src="./assets/icon/favicon.png" />
            <h2><IonIcon className="step-icon rotate-45" icon={airplane}/>1. Get Started...</h2>
            <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
          </div>
        </IonSlide>

        <IonSlide>
          <div>
            <h2><IonIcon className="step-icon" icon={airplane}/>2. Choose your flight Time...</h2>
            <p>The ionic confeal preview of the ionic framework in action, and a demonstration of proper code use.</p>
          </div>
        </IonSlide>

        <IonSlide>
          <div>
            <h2><IonIcon className="step-icon" icon={airplane}/>3. Your Group...</h2>
            <p>The <b>ionic conference app</b> is a practical preview of the ione.</p>
          </div>
        </IonSlide>

        <IonSlide>
          <div>
            <h2><IonIcon className="step-icon" icon={airplane}/>4. Optional Note to us</h2>
            <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
          </div>
        </IonSlide>

        <IonSlide>
          <div>
            <h2><IonIcon className="step-icon" icon={airplane}/>5. Review your Booking</h2>
            <p>The <b>ionic conference app</b> is a practic framework in action, and a demonstration of proper code use.</p>
          </div>
        </IonSlide>

        <IonSlide>
          <div>
          <h2><IonIcon className="step-icon" icon={airplane}/>6. Basic Tips and T&amp;Cs</h2>
            <p>The <b>ionic conference app</b> is a practicalode use.</p>
          </div>
        </IonSlide>

        <IonSlide>
          <div>
          <h2><IonIcon className="step-icon" icon={airplane}/>7. Payment</h2>
            <p>This would hook into an online (SumUp?) payment gateway.</p>
          </div>
        </IonSlide>

        <IonSlide>
          <div>
            <h2>Thanks for Booking with FlyZermatt!</h2>
            <p>We're looking forward to flying with you here in the mighty Zermatt Alps.</p>
            <IonButton fill="clear">Continue <IonIcon slot="end" icon={arrowForwardSharp} /></IonButton>
          </div>
        </IonSlide>

      </IonSlides>
    </div>
  );
};



export default FormSlider;
