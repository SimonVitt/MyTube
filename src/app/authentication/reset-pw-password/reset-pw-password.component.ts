import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackendcommunicationService } from 'src/app/services/backendcommunication.service';
import { LoadingService } from 'src/app/services/loading.service';

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

  error: boolean = false;
  success: boolean = false;

  constructor(private fb: FormBuilder, private loading: LoadingService, private backend: BackendcommunicationService, private route: ActivatedRoute){}

  ngOnInit(){
    const token: string = this.route.snapshot.params['token'];
    localStorage.setItem('accessToken', token);
    this.resetPasswordForm = this.fb.group({
      password1: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password2: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    this.resetPasswordForm.valueChanges.subscribe((fd) => {
      this.inputThere1 = fd.password1.length > 0;
      this.inputThere2 = fd.password2.length > 0;
    });
  }

  async onsubmit(){
    this.submitted = true;
    if(this.resetPasswordForm.valid){
      this.loading.setLoading(true);
      this.error = false;
      this.success = false;
      try {
        const formData = new FormData();
        formData.append('password1', this.resetPasswordForm.get('password1')!.value);
        formData.append('password2', this.resetPasswordForm.get('password2')!.value);
        await this.backend.resetPassword(formData);
        localStorage.clear();
        this.success = true;
      } catch (error) {
        this.error = true;
      }
    }
    this.loading.setLoading(false);
  }

}
