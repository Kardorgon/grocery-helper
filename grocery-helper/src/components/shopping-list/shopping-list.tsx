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
    this.loadShoppingList();
  }

  loadShoppingList() {
    this.shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
  }

  addToShoppingList(product: string) {
    this.shoppingList = [...this.shoppingList, product];
    localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
  }

  removeFromShoppingList(product: string) {
    this.shoppingList = this.shoppingList.filter(item => item !== product);
    localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
  }

  render() {
    return (
      <ion-page>
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
