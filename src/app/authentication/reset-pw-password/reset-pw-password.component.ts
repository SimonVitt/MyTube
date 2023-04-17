import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pw-password',
  templateUrl: './reset-pw-password.component.html',
  styleUrls: ['./reset-pw-password.component.scss']
})
export class ResetPwPasswordComponent {
  resetPasswordForm!: FormGroup;

  submitted: boolean = false;
  inputThere1: boolean = false;
  showPassword1: boolean = false;
  inputThere2: boolean = false;
  showPassword2: boolean = false;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.resetPasswordForm = this.fb.group({
      password1: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password2: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    this.resetPasswordForm.valueChanges.subscribe((fd) => {
      this.inputThere1 = fd.password1.length > 0;
      this.inputThere2 = fd.password2.length > 0;
    });
  }

  onsubmit(){
    this.submitted = true;
  }

}
