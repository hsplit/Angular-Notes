import { Pipe, PipeTransform } from '@angular/core';

const filters = [
  (user, filter) => user.name.toUpperCase().includes(filter.name.toUpperCase()),
  (user, filter) => user.id <= filter.idmax && user.id >= filter.idmin
];

@Pipe({
  name: 'userFilter',
  pure: false
})
export class UserFilterPipe implements PipeTransform {

  transform(value: any, filter: any): any {
    return value.filter( user => {
      return filters.every(filterFunction => filterFunction(user, filter));
    });
  }

}
