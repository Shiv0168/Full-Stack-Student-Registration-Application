import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/Student';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  allStudent:any;

  constructor(private apiService:ApiServiceService , private router:Router){};

  getAllStudent(){
    this.apiService.allStudent().subscribe({
      next:(data)=>{
        this.allStudent = data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
  ngOnInit(): void {
    this.getAllStudent();
  }
  deleteStudent(id:number){
    this.apiService.deleteStudent(id).subscribe({
      next:(data)=>{
        this.allStudent = data;
      },
      error:(error: any)=>{console.log(error);
      }
    })
  }

}
