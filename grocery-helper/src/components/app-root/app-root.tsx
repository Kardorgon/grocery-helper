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
        <div id="main-content">
          <ion-header>
            <ion-toolbar>
              <ion-title>Grocery Helper</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-router-outlet></ion-router-outlet>
          </ion-content>
        </div>
      </ion-app>
    )
  }
}
