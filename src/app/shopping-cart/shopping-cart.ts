import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.html',
})
export class ShoppingCartComponent {
  // 1. Core State (React.js Equivalent : const [quantity, setQuantity] = useState(0))
  quantity = signal(0);

  // 2. Automated Status Check (React.js: const isFull = quantity >= 10)
  // This simply calculates 'true' or 'false' automatically whenever quantity changes.
  isFull = computed(() => this.quantity() >= 10);

  increase() {
    if (!this.isFull()) {
      this.quantity.update((current) => current + 1);
    }
  }

  decrease() {
    if (this.quantity() > 0) {
      this.quantity.update((current) => current - 1);
    }
  }
}
