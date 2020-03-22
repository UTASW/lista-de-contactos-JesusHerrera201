import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ViewComponent} from '../view/view.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ViewComponent
    
  ],
  exports:[
    ViewComponent


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
   
    
  ]
})
export class ComponentsModule { }
