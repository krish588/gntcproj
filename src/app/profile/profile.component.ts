import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  stations = [{id:1,name:"Guntur"},{id:2,name:"Mangalagiri"},
    {id:3,name:"Tenali"},
    {id:4,name:"Bapatla"},
    {id:5,name:"Sattenapalli"},
    {id:6,name:"Narasaraopet"}]
 
    courts = [{id:1,name:"ADJ"},{id:2,name:"PSJ"},
      {id:3,name:"I ASJ"},
      {id:4,name:"II ASJ"},
      {id:5,name:"PDM"},
      {id:6,name:"I ADM"}]

}
