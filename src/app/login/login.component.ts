import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginItemFormService } from '../services/login-item-form.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup
  registerForm!:FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private readonly loginItemFormService: LoginItemFormService
  ) {}
  isLogin:boolean=true;

  ngOnInit(): void {
    this.loginForm = this.loginItemFormService.buildForm();
  }
}
