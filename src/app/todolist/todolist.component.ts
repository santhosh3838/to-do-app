import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  taskArray=[{taskname:'Brush teeth',isCompleted:false}]
  constructor(){
  
  }

  onSubmit(form:NgForm)
  {
 this.taskArray.push({
  taskname:form.controls['task'].value,
  isCompleted:false
 })
 form.reset();
}

Delete(index:number){
this.taskArray.splice(index,1);
}
onCheck(index:number)
{
this.taskArray[index].isCompleted=!this.taskArray[index].isCompleted
}
}
