import { Component, OnInit } from '@angular/core';
import { Product } from '@sc-sport-is-awesome/domain';

@Component({
  selector: 'sc-sport-is-awesome-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor() { }

  ngOnInit() {
  }

}
