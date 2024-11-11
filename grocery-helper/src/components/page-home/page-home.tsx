import { Component, Fragment, h, State } from '@stencil/core'

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  // shadow: true,
})
export class PageHome {
  @State() mode: string
  @State() products: string[] = ['Apples', 'Bananas', 'Carrots', 'Dairy', 'Eggs']

  constructor() {
    this.mode = localStorage.getItem('mode') || 'auto'
  }

  componentWillLoad() {
    console.log('PageHome component is about to load');
  }

  setMode(mode: string) {
    if (mode == this.mode) {
      return
    }
    this.mode = mode
    switch (mode) {
      case 'md':
      case 'ios':
        localStorage.setItem('mode', mode)
        break
      default:
        localStorage.removeItem('mode')
        break
    }
    location.reload()
  }

  addToShoppingList(product: string) {
    // Add product to shopping list
  }

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Home</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>Welcome to Stencil App Starter.</p>
          <ion-list>
            <ion-radio-group
              value={this.mode}
              onIonChange={e => this.setMode(e.detail.value)}
            >
              <ion-list-header>
                <ion-label>Theme Mode</ion-label>
              </ion-list-header>
              <ion-note class="ion-padding-start">
                (Changing theme will reload the whole app.)
              </ion-note>
              <ion-item>
                <ion-radio value="auto">Auto Detect</ion-radio>
              </ion-item>
              <ion-item>
                <ion-radio value="md">Material Design</ion-radio>
              </ion-item>
              <ion-item>
                <ion-radio value="ios">iOS</ion-radio>
              </ion-item>
            </ion-radio-group>
          </ion-list>
          <p>Let's try navigating with ionic router!</p>
          <ion-list>
            <ion-item href="/tab/notice">
              <ion-label>Notice Page (/tab/notice)</ion-label>
            </ion-item>
            <ion-item href="/profile/ionic">
              <ion-label>Profile Page (/profile/ionic)</ion-label>
            </ion-item>
          </ion-list>
          <p>Products:</p>
          <ion-list>
            {this.products.map(product => (
              <ion-item key={product}>
                <ion-label>{product}</ion-label>
                <ion-button onClick={() => this.addToShoppingList(product)}>Add to Shopping List</ion-button>
              </ion-item>
            ))}
          </ion-list>
          <ion-button href="/shopping-list">Go to Shopping List</ion-button>
        </ion-content>
      </Fragment>
    )
  }
}
