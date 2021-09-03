import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImageService } from '../../../Shared/Service/image.service';
import { UserService } from '../../../Shared/Service/user.service';

@Component({
  selector: 'app-coachphoto',
  templateUrl: './coachphoto.page.html',
  styleUrls: ['./coachphoto.page.scss'],
})
export class CoachphotoPage implements OnInit {
  images: any = [];
  apImg = environment.apiImg + 'Post/image/'
  constructor(
    private imageService: ImageService,
    private userService: UserService
  ) { }
  ngOnInit() {
    this.getMe();
  }

  getImageByIdUser(id) {
    this.imageService.getImageByUserId(id).subscribe(res => {
      console.log(res);
      this.images = res;
    })
  }
  getMe() {
    this.userService.getMe().subscribe(async res => {
      console.log(res.data.data);
      this.getImageByIdUser(res?.data?.data?._id);
    });
  }
}
