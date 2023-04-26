import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendmainService } from 'src/app/services/backendmain.service';

@Component({
  selector: 'app-uploadcontainer',
  templateUrl: './uploadcontainer.component.html',
  styleUrls: ['./uploadcontainer.component.scss']
})
export class UploadcontainerComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;

  uploadVideoForm!: FormGroup;

  selectedFile: null | File = null;

  success: boolean = false;
  error: boolean = false;
  titleError: boolean = false;
  descriptionError: boolean = false;
  fileError: boolean = false;

  submitted: boolean = false;

  constructor(private fb: FormBuilder, private backend: BackendmainService) { }

  ngOnInit() {
    this.uploadVideoForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(80), Validators.minLength(8)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(200), Validators.minLength(8)])
    });
  }

  async uploadVideo() {
    this.submitted = true;
    if (this.selectedFile && this.uploadVideoForm.valid) {
      this.resetErrors();
      const formData = new FormData();
      formData.append('title', this.uploadVideoForm.get('title')!.value);
      formData.append('description', this.uploadVideoForm.get('description')!.value);
      formData.append('video_file', this.selectedFile);
      try {
        await this.backend.uploadVideo(formData);
        this.resetForm();
        this.success = true;
      } catch (error) {
        this.error = true;
      }
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  resetErrors(){
    this.success = false;
    this.error = false;
    this.descriptionError = false;
    this.titleError = false;
    this.fileError = false;
  }

  resetForm(){
    this.submitted = false;
    this.uploadVideoForm.get('title')!.setValue('');
    this.uploadVideoForm.get('description')!.setValue('');
    this.uploadVideoForm.get('title')?.markAsUntouched();
    this.uploadVideoForm.get('description')?.markAsUntouched();
    this.fileInput.nativeElement.value = '';
    this.selectedFile = null;
  }

}
