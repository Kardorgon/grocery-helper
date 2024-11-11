import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'shopping-list',
  styleUrl: 'shopping-list.css',
  // shadow: true,
})
export class ShoppingList {
  @State() shoppingList: string[] = [];

  componentDidLoad() {
    console.log('ShoppingList component has been loaded');
    if (this.shoppingList && this.shoppingList.length > 0) {
      console.log('Shopping list is initialized');
    } else {
      console.error('Shopping list is not initialized');
    }
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
