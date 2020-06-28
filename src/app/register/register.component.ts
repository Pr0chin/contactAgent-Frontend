import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Register } from '../register';
import { RegisterService } from '../register.service';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  register: Register[];
  validateForm: FormGroup;

  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    /*Getting ata rendered*/
    this.registerService
      .getRegister()
      .subscribe((data: Register[]) => {
        this.register = data;
        console.log(this.register);
      });
  }
  createForm() {
    this.validateForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      retypepassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'retypepassword')
    });
  }
  
  addBusiness(first_name, last_name, phone, password, retypepassword) {
    alert("here i am");
    debugger;
    console.log(first_name, last_name, phone, password, retypepassword);
    // if (this.validateForm.invalid) {
    //   return;
    // } else {
    this.registerService.postRegister(first_name, last_name, phone, password, retypepassword);
    // }
  }

  // deleteRegister(){
  //   alert("this function works");
  // }

  deleteRegister() {
    alert("here i am")
    var id = '5e734afc758f481bac56a2b3';
    this.registerService.deleteRegister(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
