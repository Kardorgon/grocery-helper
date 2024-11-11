import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'page-notice',
  styleUrl: 'page-notice.css',
  shadow: true,
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
    console.log('PageNotice render method is called');
    return (
      <Fragment>
        <ion-content class="ion-padding">
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
