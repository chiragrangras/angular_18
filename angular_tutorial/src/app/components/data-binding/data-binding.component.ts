import { Component, input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  //string, number, boolean, date

  courseName: string = 'Angular 18';

  inputType = 'radio';

  myClassName: string = 'bg-primary';

  rollNo: number = 123;

  isIndian: boolean = false;

  currentDate: Date = new Date();

  constructor() {}
}
