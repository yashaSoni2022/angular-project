import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userform = this.fb.group({
    Name: ['',Validators.required],
    Job: ['' ,Validators.required]
  });

  constructor(private Formdata: UserServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  postUserdata() {
    console.log(this.userform)
    this.Formdata.saveUserdata(this.userform.value).subscribe((result) => {
      alert("User form submitted succesfully!")
    })
  }
}
