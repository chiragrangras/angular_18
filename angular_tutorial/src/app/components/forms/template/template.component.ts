import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {
  studentObj: any = {
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCide:'',
    isAcceptTerms:false
  };
}
