import { Component } from '@angular/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})


export class NavComponent {

  departments = [
    { value: 'dep1', viewValue: 'Departamento 1' },
    { value: 'dep2', viewValue: 'Departamento 2' },
    { value: 'dep3', viewValue: 'Departamento 3' },
  ];

  jobTitles = [
    { value: 'title1', viewValue: 'Cargo 1' },
    { value: 'title2', viewValue: 'Cargo 2' },
    { value: 'title3', viewValue: 'Cargo 3' },
  ];


}
