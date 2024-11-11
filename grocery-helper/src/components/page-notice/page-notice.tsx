import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'page-notice',
  styleUrl: 'page-notice.css',
  // shadow: true,
})
export class PageNotice {

  names = [
    'Alice',
    'Bob',
    'Charlie',
    'Dave',
    'Eve',
    'Frank',
  ]

  componentWillLoad() {
    console.log('PageNotice component is about to load');
  }

  render() {
    return (
      <Fragment>
        <ion-content class="ion-padding" style={{ height: '100%' }}>
          <ion-list>
            {this.names.map(name=>
              <ion-item href={"/profile/"+name.toLowerCase()} key={name}>
                <ion-label>{name} is following you</ion-label>
              </ion-item>
            )}
          </ion-list>
        </ion-content>
      </Fragment>
    );
  }

}
