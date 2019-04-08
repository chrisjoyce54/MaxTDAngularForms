import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    name: '',
    mail: '',
    question: '',
    ans: '',
    gen: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userdata: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'teacher',
    //   questionAnswer: '',
    //   gender: 'female'
    // });
    this.signupForm.form.patchValue({
      userdata: {
        username: suggestedName
      }
    });
  }
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.signupForm);
    this.submitted = true;
    this.user.name = this.signupForm.value.userdata.username;
    this.user.mail = this.signupForm.value.userdata.email;
    this.user.question = this.signupForm.value.secret;
    this.user.ans = this.signupForm.value.questionAnswer;
    this.user.gen = this.signupForm.value.gender;
  }
}
