import {Component, Input} from '@angular/core';

@Component({
  selector: 'user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent {
  @Input() filter;
}
