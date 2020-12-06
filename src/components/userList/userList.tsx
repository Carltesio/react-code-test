import {
  IonButton,
  IonItemDivider,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonItem,
  IonLabel,
  IonAvatar,
  IonToolbar, useIonViewWillEnter,
  IonInfiniteScroll, IonInfiniteScrollContent, IonList
} from '@ionic/react';
import React, { useState } from 'react';

// this are part of the implementation of Redux
import { SELECT_PAGE } from "../../state/actions/actionTypes"
import { connect } from "react-redux";

import './userList.css';

const UserList: React.FC = (props) => {

  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState<Number[]>([]);

  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState<boolean>(false);

  async function fetchData() {
    const url: string = 'https://reqres.in/api/users';
    const res: Response = await fetch(url);
    res
      .json()
      .then(async (res) => {
        if (res && res.data.length > 0) {
          setItems([...items, ...res.data]);
          setDisableInfiniteScroll(res.data.length < 10);
        } else {
          setDisableInfiniteScroll(true);
        }
      })
      .catch(err => console.error(err));
  }

  useIonViewWillEnter(async () => {
    await fetchData();
  });

  async function searchNext($event: CustomEvent<void>) {
    await fetchData();
    ($event.target as HTMLIonInfiniteScrollElement).complete();

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {items.map((item: any) => {
          // debugger
          return <IonList>
            <IonItem key={`${item.id}`}>
              <IonAvatar slot="start">
                <img src={item.avatar} />
              </IonAvatar>
              <IonLabel class="name">
                <h2>{item.first_name} {item.last_name}</h2>
              </IonLabel>
            </IonItem>
          </IonList>
        })}
        <IonInfiniteScroll threshold="100px" disabled={disableInfiniteScroll}
          onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}>
          <IonInfiniteScrollContent
            loadingText="Loading more ...">
          </IonInfiniteScrollContent>
        </IonInfiniteScroll>
        <IonItemDivider>
          <IonButton
            color="primary">Page 1</IonButton>
          <IonButton
            color="primary">Page 2</IonButton>
        </IonItemDivider>
      </IonContent>
    </IonPage>
  );
};

// const mapStateToProps = (state: Number) => {
//   return {
//     // contactsPage: state.contactsPage,
//   };
// };
// export default connect(mapStateToProps)(UserList);

export default UserList;
