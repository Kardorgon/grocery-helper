import { Component, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'page-profile',
  styleUrl: 'page-profile.css',
  // shadow: true,
})
export class PageProfile {
  @Prop() name: string

  normalize(name: string): string {
    name = name || ''
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  componentDidLoad() {
    console.log('PageProfile component has been loaded');
    if (this.name) {
      console.log('Name is initialized');
    } else {
      console.error('Name is not initialized');
    }
  }

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/tab/notice"></ion-back-button>
            </ion-buttons>
            <ion-title>Profile: {this.name}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content fullscreen class="ion-padding">
          <ion-card>
            <ion-card-header>
              <h1>
                {this.normalize(this.name)}
              </h1>
            </ion-card-header>
            <ion-card-content>
              <p>
                This name is passed in through a route param!
              </p>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </Fragment>
    );
  }

}
