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
      </ion-tabs>
    );
  }

}
