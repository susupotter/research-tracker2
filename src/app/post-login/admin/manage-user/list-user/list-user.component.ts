import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { RadioValue } from '../../../../component/radio-field/radio-value';
import { UserDataService, UserData } from '../../../../api-service/config/user/user-data.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  

  constructor(private userDataService: UserDataService) { }

  public userList: UserData[] = [];

  ngOnInit() {
    this.listUser();
  }

  listUser() {
    this.userDataService.listAllUser().subscribe(list => {
      this.userList = list;
    })
  }

  /*getUserTypeShow(value: String) {
    for (let type of this.roleList) {
      if (type.value === value) {
        return type.label
      }
    }
  }*/

}



