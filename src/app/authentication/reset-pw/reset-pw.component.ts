import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendcommunicationService } from 'src/app/services/backendcommunication.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-reset-pw',
  templateUrl: './reset-pw.component.html',
  styleUrls: ['./reset-pw.component.scss']
})
export class ResetPwComponent {

  emailForm!: FormGroup;

  submitted: boolean = false;
  success: boolean = false;
  error: boolean = false;

  constructor(private fb: FormBuilder, private backend: BackendcommunicationService, private loading: LoadingService){}

  ngOnInit(){
    this.emailForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  async onsubmit(){
    this.submitted = true;
    if(this.emailForm.valid){
      this.loading.setLoading(true);
      this.error = false;
      this.success = false;
      try {
        const formData = new FormData();
        formData.append('email', this.emailForm.get('email')!.value);
        await this.backend.forgotPassword(formData);
        this.success = true;  
        this.emailForm.get('email')?.setValue('');
      } catch (error) {
        this.error = true;
      }
    }
    this.loading.setLoading(false);
  }
}
