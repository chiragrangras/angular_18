import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css',
})
export class StructuralDirComponent {
  isDiv1Visiable: boolean = true;
  isDiv2Visiable: boolean = true;

  num1: string = '';
  num2: string = '';

  isActive: boolean = false;

  selectedState: string = '';

  constructor(private router:Router){

  }

  cityArray: string[] = ['Gujarat', 'Ajmer', 'Pune', 'Nagpur'];

  studentList: any[] = [
    {studentId:13, name: 'AAA', city: 'Gujarat', isActive: false },
    {studentId:25, name: 'BBB', city: 'Ajmer', isActive: false },
    {studentId:53, name: 'CCC', city: 'Pune', isActive: true },
    {studentId:44, name: 'DDD', city: 'Nagpur', isActive: false },
    {studentId:52, name: 'EEE', city: 'Delhi', isActive: false },
    {studentId:64, name: 'FFF', city: 'Mumbai', isActive: true },
  ];

  navigateToAttribute(){
    this.router.navigateByUrl("attribute-dir")
  }

  showDiv1() {
    this.isDiv1Visiable = true;
  }

  hideDiv1() {
    this.isDiv1Visiable = false;
  }

  toggleDiv2() {
    this.isDiv2Visiable = !this.isDiv2Visiable;

    // if(this.isDiv2Visiable == true){
    //   this.isDiv2Visiable = false;
    // }else{
    //   this.isDiv2Visiable = true;
    // }
  }
}
