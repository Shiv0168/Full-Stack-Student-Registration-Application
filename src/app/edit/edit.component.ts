import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  editStudent: any = '';


  constructor(
    private apiService: ApiServiceService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute:ActivatedRoute
  ) { 
     this.editStudent = this.fb.group({
    name: ['' , [Validators.required , Validators.minLength(3)]],
    email: ['',[Validators.required , Validators.email]],
  });
}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.apiService.getStudentById(id).subscribe({
      next:(data)=>{
        this.editStudent = this.fb.group({
          name: [data.name , [Validators.required , Validators.minLength(3)]],
          email: [data.email , [Validators.email , Validators.required]],
        });
      },
      error:(error)=>{console.log(error);
      }
    })
  }

  get name() {
    return this.editStudent.get('name');
  }

  get email() {
    return this.editStudent.get('email');
  }

  submit() {
    this.apiService.updateStudent(this.editStudent.value , this.activatedRoute.snapshot.params["id"]).subscribe({
      next:(data)=>{
        this.editStudent.reset();
        this.router.navigate(["/view"]);
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }
}
