import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabButton, IonIcon, IonTabBar, IonLabel, IonTabs } from '@ionic/react';
import { listCircleOutline, trendingUpOutline, createOutline, searchOutline, personCircleOutline } from "ionicons/icons";
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
// import Search from './pages/Search';
// import Profile from './pages/Profile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => {
  return (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/" render={() => <Redirect to="/home" />} exact={true} />
        <Route path="/home" component={Tab1} />
        <Route path="/trending" component={Tab2} />
        <Route path="/submit" component={Tab3} />
        {/* <Route path="/search" component={Search} />
        <Route path="/profile" component={Profile} /> */}
        <Route component={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
      <IonTabBar slot="top">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={listCircleOutline} />
          <IonLabel>PAGE 1</IonLabel>
        </IonTabButton>
          <IonTabButton tab="trending" href="/trending">
          <IonIcon icon={trendingUpOutline} />
          <IonLabel>PAGE 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="submit" href="/submit">
          <IonIcon icon={createOutline} />
          <IonLabel>PAGE 3</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/search">
          <IonIcon icon={searchOutline} />
          <IonLabel>PAGE 4</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>PAGE 5</IonLabel>
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  )
};

export default App;

