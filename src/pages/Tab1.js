
import React from "react";

import {IonPage, IonContent} from "@ionic/react";
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';

const slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
  };



const Tab1 = () => {
    return(
        <IonPage>
            <SmallHeader title="Hunt" />
            <IonContent fullscreen>

<ion-grid>
  <ion-row>
    <ion-col size="12">

      <ion-slides pager="false" options={slideOpts}>
          <ion-slide>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg"/>
        </ion-slide>
        <ion-slide>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg"/>
        </ion-slide>
      </ion-slides>

    </ion-col>

  </ion-row>
</ion-grid>
                <LargeHeader title="Hunt" />
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
