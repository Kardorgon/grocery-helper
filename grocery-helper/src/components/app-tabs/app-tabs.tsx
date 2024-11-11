import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css',
  // shadow: true,
})
export class AppTabs {

  componentWillLoad() {
    console.log('AppTabs component is about to load');
  }

  render() {
    return (
      <ion-tabs>
        <ion-tab tab="tab-home" component="page-home">
        </ion-tab>
        <ion-tab tab="tab-shopping-list">
        </ion-tab>
        <ion-tab-bar slot="top">
          <ion-tab-button tab="tab-home">
            <ion-icon name="home"></ion-icon>
            <ion-label>Home</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-shopping-list">
            <ion-icon name="cart"></ion-icon>
            <ion-label>Shopping List</ion-icon>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    );
  }

}
