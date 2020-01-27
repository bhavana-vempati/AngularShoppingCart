import { Component } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { CartAction } from "../../store/actions/cart.actions";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  providers: []
})
export class NavBarComponent {
  public cart: any = [];
  orderedProducts;
  public totalPrice: number;
  public totalQuantity: any;

  constructor(
    private productService: ProductService,
    private cartStore: CartAction
  ) {}

  getTotalPrice() {
    let totalCost: Array<number> = [];
    let quantity: Array<number> = [];
    let intPrice: number;
    let intQuantity: number;

    if (this.cart != undefined) {
      if (this.cart.length > 0) {
        this.cart.products.forEach((item, i) => {
          intPrice = parseInt(item.price);
          intQuantity = parseInt(item.quantity);
          totalCost.push(intPrice);
          quantity.push(intQuantity);
        });
      }
    }

    this.totalPrice = totalCost.reduce((acc, item) => {
      return (acc += item);
    }, 0);
    this.totalQuantity = quantity.reduce((acc, item) => {
      return (acc += item);
    }, 0);
  }
  ngOnInit() {
    this.cartStore.getState().subscribe(res => {
      this.cart = res;
      this.getTotalPrice();
    });
  }
  sortByLow(field: string) {
    this.cart.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.orderedProducts = this.cart;
  }
  sortByLowtoHigh(price: any) {
    this.sortByLow("price");
  }
}
