import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CameraSource } from '@capacitor/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { FollowerService } from 'src/app/shared/Service/follower.service';
import { ImageService } from 'src/app/Shared/Service/image.service';
import { PageService } from 'src/app/shared/Service/page.service';
import { PostService } from 'src/app/Shared/Service/post.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { environment } from 'src/environments/environment';
import { ModalShearePage } from '../../home/modal-sheare/modal-sheare.page';
import { share } from 'rxjs/operators';
import { forkJoin, Subscription } from 'rxjs';
import { ImageProfileComponent } from '../../coachprofile/image-profile/image-profile.component';
@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.page.html',
  styleUrls: ['./show-page.page.scss'],
})
export class ShowPagePage implements OnInit {

  selected: any;
  followedPage: boolean;
  dropDown: boolean;
  more: boolean;
  id: any;
  page: any;
  userid: any;
  isMessageDisplay: boolean;
  apiImg = environment.apiImg + 'page/';
  friends: any;
  selectedFriends: any;
  updateImage: any;
  update: any;
  user: any;
  posts: any;
  pages: any = 1;
  mediafiles: any[] = [];
  images: any[] = [];
  constructor(private activatedRoute: ActivatedRoute,
    public pageService: PageService,
    private userservice: UserService,
    private imageService: ImageService,
    private elemRef: ElementRef,
    private action: ActionSheetController,
    private followerService: FollowerService,
    private modalController: ModalController,
    private postService: PostService,
    private userService: UserService
  ) { }
  @HostListener('click', ['$event.target'])
  onClickOutside(targetElement) {
    const target = this.elemRef.nativeElement.querySelector('div');
    if (targetElement.tagName === target.tagName) {
      this.dropDown = false;
    }
  }
  segmentChanged(ev: any) {
    this.selected = ev.detail.value;
  }

  ngOnInit() {
    this.selected = 'Acceuil';
    this.followedPage = false;
    this.dropDown = false;
    this.more = false;
    this.id = this.activatedRoute.snapshot.params.id;
    this.updateImage = false;
    this.update = false;
    this.getMe();
    this.getOnePage();
    this.getAllPosts();
    this.getAllImagesPosts();
  }

  openDropDown() {
    if (this.dropDown === false) {
      this.dropDown = true;
    }
    else if (this.dropDown === true) {
      this.dropDown = false;
    }
  }
  toggleShowMore() {
    if (this.more === false) {
      this.more = true;
    }
    else if (this.more === true) {
      this.more = false;
    }
  }
  toggleFollow() {
    if (this.followedPage === true) {
      this.followedPage = false;
    } else if (this.followedPage === false) {
      this.followedPage = true;
    }
  }

  getOnePage() {
    this.pageService.getOnePage(this.id).subscribe(res => {
      this.page = res[0];
    });


  }
  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.userid = res.data.data._id;
      this.user = res.data.data;
    });
  }
  async addImage(source: CameraSource) {

    const fd = new FormData();
    await this.imageService.readyImage(source, fd);
    this.getFormData(this.page, fd);
    console.log(fd);

    this.pageService.updateCoverPage(fd).subscribe(async (res) => {
      await this.getOnePage();
    });
  }
  async selectImageSource() {
    const buttons = [
      {
        text: 'Choose from gallery',
        icon: 'image',
        handler: () => {
          this.addImage(CameraSource.Photos);
        },
      },
    ];

    const actionSheet = await this.action.create({
      header: 'Select from phone',
      buttons,
    });

    await actionSheet.present();
  }
  getFormData(object, formdata: FormData) {
    Object.keys(object).forEach((key) => formdata.append(key, object[key]));

  }
  async addProfile(source: CameraSource) {

    const fd = new FormData();
    await this.imageService.readyImage(source, fd);
    this.getFormData(this.page, fd);
    this.pageService.updateProfileImagePage(fd).subscribe(async (res) => {
      await this.getOnePage();
    });
  }
  async selectProfileSource() {
    const buttons = [
      {
        text: 'Choose from gallery',
        icon: 'image',
        handler: () => {
          this.addProfile(CameraSource.Photos);
        },
      },
    ];

    const actionSheet = await this.action.create({
      header: 'Select from phone',
      buttons,
    });

    await actionSheet.present();
  }

  getAllfriends() {
    this.followerService.getFollowers(this.userid)
      .subscribe(res => {
        this.friends = res.data.data;
      });
  }
  onClick(selectedFriends) {
    console.log(selectedFriends);
  }
  updatePage() {
    this.pageService.updatepage(this.page).subscribe(res => console.log(res));
  }
  async openShareModal() {

    const modal = await this.modalController.create({
      component: ModalShearePage,
      componentProps: {
        user: this.user,
        page: this.page._id
      },
    });
    await modal.present();
    await modal.onWillDismiss().then((result) => {
    });
  }
  getAllPosts() {
    this.postService.getAllPostsByPage(this.id).subscribe(res => {
      this.posts = res.data.data;
    });
  }
  getpostFiles(post) {

    forkJoin({
      mediafiles: this.postService.getPost(post._id),
    }).subscribe(({ mediafiles }) => {
      this.mediafiles = mediafiles.mediafiles;
      this.mediafiles.forEach(el => {
        this.images.push(el),
          post.mediafiles = mediafiles.mediafiles
      });
      let tab = this.images.reverse()
      this.images = tab
    });

  }
  getExt(fileName) {
    const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
    return ext;
  }
  async displayVideo(file: any) {
    // eslint-disable-next-line @typescript-eslint/naming-convention

    const modal = await this.modalController.create({
      component: ImageProfileComponent,
      cssClass: 'imageModal',
      componentProps: {
        video: file,
      },
    });
    return await modal.present();
  }
  getAllImagesPosts(event?) {
    this.userService.getMe().subscribe(res => {
      this.user = res.data.data;
      this.postService.getAllPostsByPage(this.id).pipe(share()).subscribe(res => {
        this.posts = res.data.data;
        this.posts.forEach(post => {
          this.getpostFiles(post);
        });
        if (event) {
          event.target.complete();
        }
      });
    });

  }
}

