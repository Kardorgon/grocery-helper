import { Component, Fragment, h, State } from '@stencil/core'

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  // shadow: true,
})
export class PageHome {
  @State() products: string[] = ['Apples', 'Bananas', 'Carrots', 'Dairy', 'Eggs']

  componentWillLoad() {
    console.log('PageHome component is about to load');
  }

  addToShoppingList(product: string) {
    // Add product to shopping list
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
    shoppingList.push(product);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }

  render() {
    return (
      <Fragment>
        <ion-content class="ion-padding" style={{ flexGrow: 1 }}>
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
