import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { Student } from '../Model/Student';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  addStudent: any;

  constructor(
    private apiService: ApiServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.addStudent = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get name() {
    return this.addStudent.get('name');
  }

  get email() {
    return this.addStudent.get('email');
  }

  submit() {
    this.apiService.createStudent(this.addStudent.value).subscribe({
      next: (data) => {
        this.addStudent.reset();
        this.router.navigate(['/view']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
