import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speaker-signup',
  templateUrl: './speaker-signup.component.html',
  styleUrls: ['./speaker-signup.component.css']
})
export class SpeakerSignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { 
    this.signupForm = this.fb.group({
      "Email": [''],
      "UserName": [''],
      "Password": [''],
      "City": [''],
      "Street": [''],
      "Building": ['']
    });
  }

  ngOnInit(): void {}
  registerUser() {
    this.authService.signUpforSpeaker(this.signupForm.value).subscribe((res) => {
      if (res.result) {
        this.signupForm.reset();
        this.router.navigate(['log-in']);
      }
    });
  }

}
