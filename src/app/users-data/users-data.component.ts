import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss']
})
export class UsersDataComponent implements OnInit {
  usersInfo:any=[];
  displayedColumns: string[] = ['email', 'first_name', 'last_name','avatar','id'];
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {

    this.getUsersInfo();

  }
  getUsersInfo(){

    this.service.getUsersData().subscribe({

      next:(response:any)=>{
        this.usersInfo= response.data

      } 
    })
  }

}
