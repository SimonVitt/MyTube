import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pw',
  templateUrl: './reset-pw.component.html',
  styleUrls: ['./reset-pw.component.scss']
})
export class ResetPwComponent {

  emailForm!: FormGroup;

  submitted: boolean = false;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.emailForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onsubmit(){
    this.submitted = true;
  }
}
