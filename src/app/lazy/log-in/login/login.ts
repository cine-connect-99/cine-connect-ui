import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss',
  imports: [ReactiveFormsModule]
})
export class LoginComponent {
  @Output() closed = new EventEmitter<void>();
  @Output() signupClicked = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  close() {
    this.closed.emit();
  }

  login() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      // Handle login logic here
      this.close();
    }
  }

  signup() {
    this.signupClicked.emit();
  }
}