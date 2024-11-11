import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true,
})
export class AppRoot {

  componentWillLoad() {
    console.log('AppRoot component is about to load');
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route-redirect from="/" to="/home"></ion-route-redirect>
          <ion-route url="/home" component="page-home"></ion-route>
          <ion-route url="/notice" component="page-notice"></ion-route>
          <ion-route url="/profile/:name" component="page-profile"></ion-route>
          <ion-route url="/shopping-list" component="shopping-list"></ion-route>
        </ion-router>
        <ion-router-outlet>
          <app-tabs></app-tabs>
        </ion-router-outlet>
      </ion-app>
    )
  }
}
