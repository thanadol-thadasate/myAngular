import { Component, OnInit } from '@angular/core';
import { GetphotoService } from '../../services/getphoto.service';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private isEditable: boolean = true;
  private my_name: string;
  private age: number;
  private email: string;
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }
  private skills: string[];
  private photoList: Photo[];

  constructor(private getphotoService: GetphotoService) { }

  ngOnInit() {
    this.my_name = "Inwza007-"
    this.age = 7;
    this.email = "Inwza007-@gmail.com";
    this.address = {
      street: "007 Inwza007-Road Inwza007",
      city: "Inwza007",
      province: "Inwza007",
      postcode: "007"
    }
    this.skills = ["Gaming", "Sleeping"];

    this.getphotoService.getPhotoList().subscribe((response) => {
      this.photoList = response;
      this.photoList.splice(4, 4995);
    });
  }

  addSkill(skill) {
    this.skills.unshift(skill);
    return false; // add for do not want refresh page
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
  }

  toggleEdit() {
    this.isEditable = !this.isEditable;
  }


}
