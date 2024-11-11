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

  componentWillLoad() {
    console.log('PageProfile component is about to load');
  }

  render() {
    return (
      <Fragment>
        <ion-content fullscreen class="ion-padding" style={{ flexGrow: 1 }}>
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
