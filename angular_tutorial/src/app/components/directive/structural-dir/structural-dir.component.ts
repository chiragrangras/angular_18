import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css',
})
export class StructuralDirComponent {
  isDiv1Visiable: boolean = true;
  isDiv2Visiable: boolean = true;

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
