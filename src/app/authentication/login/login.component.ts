import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('inputPw') inputPw!: ElementRef;

  loginForm!: FormGroup;

  error: boolean = false;

  submitted: boolean = false;
  inputThere: boolean = false;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    this.loginForm.valueChanges.subscribe((formData) => {
      this.inputThere = formData.password.length > 0 ? true : false;
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.error = false;
      this.loadingService.setLoading(true);
      try {
        await this.authService.login(this.loginForm.get('email')!.value, this.loginForm.get('password')!.value);
      } catch (error) {
        this.error = true;
        this.loadingService.setLoading(false);
      }
    }
  }

}
