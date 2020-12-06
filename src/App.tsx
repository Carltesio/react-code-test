import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, person, reload } from 'ionicons/icons';
import UserList from './components/userList/userList';
import Home from './components/home/home';
import LoadingComponent from './components/loadingComponent/loadingComponent';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

const App: React.FC = () => (

  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/UserList" component={UserList} exact={true} />
          <Route path="/Home" component={Home} exact={true} />
          <Route path="/LoadingComponent" component={LoadingComponent} />
          <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />
          </Suspense>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="UserList" href="/UserList">
            <IonIcon icon={person} />
            <IonLabel>User List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="LoadingComponent" href="/LoadingComponent">
            <IonIcon icon={reload} />
            <IonLabel>Loading component</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;