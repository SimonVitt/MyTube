import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendcommunicationService } from 'src/app/services/backendcommunication.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm!: FormGroup;

  submitted: boolean = false;
  inputThere1: boolean = false;
  showPassword1: boolean = false;
  inputThere2: boolean = false;
  showPassword2: boolean = false;

  errorUsername: boolean = false;
  errorEmail: boolean = false;
  errorOther: boolean = false;
  success: boolean = false;

  constructor(private fb: FormBuilder, private backend: BackendcommunicationService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password1: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password2: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
    this.signupForm.valueChanges.subscribe((fd) => {
      this.inputThere1 = fd.password1.length > 0;
      this.inputThere2 = fd.password2.length > 0;
    });
  }

  onsubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      localStorage.clear();
      this.loadingService.setLoading(true);
      this.resetErrors();
      const formData = new FormData();
      formData.append('username', this.signupForm.get('username')!.value);
      formData.append('email', this.signupForm.get('email')!.value);
      formData.append('password1', this.signupForm.get('password1')!.value);
      formData.append('password2', this.signupForm.get('password2')!.value);
      this.backend.register(formData).then(response => {
        this.success  = true;
        this.loadingService.setLoading(false);
      }).catch(async response => {
        console.log(response);
        this.checkError(response.error);
        this.loadingService.setLoading(false);
      });
    }
  }

  resetErrors(){
    this.errorEmail = false;
    this.errorUsername = false;
    this.errorOther = false;
    this.submitted = false;
  }

  checkError(error: any){
    if (error.email) {
      this.errorEmail = true;
    } 
    if (error.username) {
      this.errorUsername = true;
    }
    if (!error.email && !error.username) {
      this.errorOther = true;
    }
  }

}
