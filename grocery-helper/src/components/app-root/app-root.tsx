import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true,
})
export class AppRoot {

  componentDidLoad() {
    console.log('AppRoot component has been loaded');
    const router = document.querySelector('ion-router');
    if (router) {
      console.log('Router is initialized');
    } else {
      console.error('Router is not initialized');
    }
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route-redirect from="/" to="/tab/home"></ion-route-redirect>
          <ion-route url="/tab" component="app-tabs">
            <ion-route url="/home" component="page-home">
              <ion-route component="page-home"></ion-route>
            </ion-route>
            <ion-route url="/notice" component="tab-notice">
              <ion-route component="page-notice"></ion-route>
            </ion-route>
          </ion-route>
          <ion-route url="/profile/:name" component="page-profile"></ion-route>
          <ion-route url="/shopping-list" component="shopping-list"></ion-route>
        </ion-router>
        <ion-nav></ion-nav>
      </ion-app>
    )
  }
}
