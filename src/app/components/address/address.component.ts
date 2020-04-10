import { Component, OnInit, Input } from '@angular/core';
import { Address } from 'src/app/interfaces/address.interface';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  @Input() address: Address[];

  constructor() { }

  ngOnInit() {}

}
