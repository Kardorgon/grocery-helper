import '@ionic/core';
import { setupConfig } from '@ionic/core';

export interface AppState {
  products: string[];
  shoppingList: string[];
}

export const appState: AppState = {
  products: ['Apples', 'Bananas', 'Carrots', 'Dairy', 'Eggs'],
  shoppingList: [],
};

export function addToShoppingList(product: string) {
  if (!appState.shoppingList.includes(product)) {
    appState.shoppingList = [...appState.shoppingList, product];
  }
}

export function removeFromShoppingList(product: string) {
  appState.shoppingList = appState.shoppingList.filter(item => item !== product);
}

/**
 * The code to be executed should be placed within a default function that is
 * exported by the global script. Ensure all of the code in the global script
 * is wrapped in the function() that is exported.
 */
export default async () => {
  let mode = localStorage.getItem('mode')
  switch (mode) {
    case 'ios':
    case 'md':
      setupConfig({
        mode
      });
  }
};
