import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostAPIComponent {
  deptObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };

  onSave(){
    
  }
}
