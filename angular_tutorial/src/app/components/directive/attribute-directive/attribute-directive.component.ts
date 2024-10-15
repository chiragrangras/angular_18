import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css',
})
export class AttributeDirectiveComponent {
  div1BgColor: string = 'bg-primary';
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;

  customerStyle: any = {
    color: 'white',
    background: 'red',
    width: '200px',
    height: '200px',
    'border-radius': '50%',
  };

  studentList: any[] = [
    {
      studentId: 13,
      totalMarks: 23,
      gender: 'male',
      name: 'AAA',
      city: 'Gujarat',
      isActive: false,
    },
    {
      studentId: 25,
      totalMarks: 53,
      gender: 'female',
      name: 'BBB',
      city: 'Ajmer',
      isActive: false,
    },
    {
      studentId: 53,
      totalMarks: 67,
      gender: 'male',
      name: 'CCC',
      city: 'Pune',
      isActive: true,
    },
    {
      studentId: 44,
      totalMarks: 98,
      gender: 'female',
      name: 'DDD',
      city: 'Nagpur',
      isActive: false,
    },
    {
      studentId: 52,
      totalMarks: 20,
      gender: 'male',
      name: 'EEE',
      city: 'Delhi',
      isActive: false,
    },
    {
      studentId: 64,
      totalMarks: 50,
      gender: 'male',
      name: 'FFF',
      city: 'Mumbai',
      isActive: true,
    },
  ];

  addRedClass() {
    this.div1BgColor = 'bg-danger';
  }

  addBlueClass() {
    this.div1BgColor = 'bg-primary';
  }

  toggleDiv2Class() {
    this.isDiv2Active = !this.isDiv2Active;
  }
}
