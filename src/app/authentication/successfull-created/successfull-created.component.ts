import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackendcommunicationService } from 'src/app/services/backendcommunication.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-successfull-created',
  templateUrl: './successfull-created.component.html',
  styleUrls: ['./successfull-created.component.scss']
})
export class SuccessfullCreatedComponent {

  emailForm!: FormGroup;

  success: boolean = false;
  error: boolean = false;
  submitted: boolean = false;
  emailNotFound: boolean = false;
  emailSend: boolean = false;

  constructor(private route: ActivatedRoute, private backend: BackendcommunicationService, private fb: FormBuilder, private loadingService: LoadingService){}

  ngOnInit(){
    this.loadingService.setLoading(true);
    const token: string = this.route.snapshot.params['token'];
    const body = new FormData();
    body.append('token', token);
    this.backend.verifyUser(body).then(response => {
      this.success = true;
      this.loadingService.setLoading(false);
    }).catch(response => {
      console.log(response);
      this.setupEmailForm();
      this.error = true;
      this.loadingService.setLoading(false);
    });
  }

  setupEmailForm(){
    this.emailForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  requestEmail(){
    this.submitted = true;
    if(this.emailForm.valid){
      this.loadingService.setLoading(true);
      const formData = new FormData();
      formData.append('email', this.emailForm.get('email')!.value);
      this.backend.sendVerifyEmail(formData).then((response) => {
        this.emailSend = true;
        this.loadingService.setLoading(false);
      }).catch(response => {
        this.emailNotFound = true;
        this.loadingService.setLoading(false);
      });
    }
  }
}
