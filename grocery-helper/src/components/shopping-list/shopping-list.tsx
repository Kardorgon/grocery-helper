import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'shopping-list',
  styleUrl: 'shopping-list.css',
  // shadow: true,
})
export class ShoppingList {
  @State() shoppingList: string[] = [];

  componentWillLoad() {
    console.log('ShoppingList component is about to load');
  }

  addToShoppingList(product: string) {
    this.shoppingList = [...this.shoppingList, product];
  }

  removeFromShoppingList(product: string) {
    this.shoppingList = this.shoppingList.filter(item => item !== product);
  }

  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Shopping List</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-list>
            {this.shoppingList.map(product => (
              <ion-item key={product}>
                <ion-label>{product}</ion-label>
                <ion-button onClick={() => this.removeFromShoppingList(product)}>Remove</ion-button>
              </ion-item>
            ))}
          </ion-list>
        </ion-content>
      </ion-page>
    );
  }
}
