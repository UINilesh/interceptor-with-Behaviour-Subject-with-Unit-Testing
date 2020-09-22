import { Component, OnInit } from '@angular/core';
import { AlbumbsService } from '../../services/albumbs.service';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss'],
})
export class Demo3Component implements OnInit {
  registerform: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private myservice: AlbumbsService) {}

  ngOnInit(): void {
    this.registerform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      city: ['', Validators.required],
    });

    this.myservice.cast.subscribe((user) => (this.user = user));

    this.myservice.castone.subscribe((lastname) => (this.lastname = lastname));

    this.myservice.citydetails.subscribe((city) => (this.city = city));
  }

  user: string;
  editUser: string;
  lastname: string;
  editUserone: string;
  city: string;
  editUsertwo: string;

  // convenience getter for easy access to form fields
  get f() {
    return this.registerform.controls;
  }

  editTheUser() {
    this.submitted = true;
    if (this.registerform.invalid) {
      return;
    }
    this.myservice.editUser(this.editUser);
    this.myservice.editUserone(this.editUserone);
    this.myservice.editUsertwo(this.editUsertwo);
  }
}
