import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'uic-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent<T> implements OnInit {
  @Input() item: T;
  constructor() { }

  ngOnInit() {
  }

}
