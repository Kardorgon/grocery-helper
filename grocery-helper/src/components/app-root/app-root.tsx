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

  toggleMenu() {
    const menu = document.querySelector('ion-menu');
    menu.open();
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
        <ion-menu side="start" menuId="first" contentId="main-content" swipeGesture={true}>
          <ion-header>
            <ion-toolbar>
              <ion-title>Menu</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-item button href="/home">
                <ion-icon slot="start" name="home"></ion-icon>
                <ion-label>Home</ion-label>
              </ion-item>
              <ion-item button href="/shopping-list">
                <ion-icon slot="start" name="cart"></ion-icon>
                <ion-label>Shopping List</ion-label>
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-menu>
        <div id="main-content">
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-menu-button onClick={() => this.toggleMenu()}></ion-menu-button>
              </ion-buttons>
              <ion-title>Grocery Helper</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content style={{ flexGrow: 1 }}>
            <ion-router-outlet></ion-router-outlet>
          </ion-content>
        </div>
      </ion-app>
    )
  }
}
