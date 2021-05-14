import find from 'lodash/find';
import remove from 'lodash/remove';

export default class Cart {
  items = [];

  add(item) {
    if (find(this.items, { product: item.product })) {
      remove(this.items, { product: item.product });
    }
    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product });
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);
  }

  checkout() {
    return {
      total: this.getTotal(),
      items: this.items,
    };
  }
}
