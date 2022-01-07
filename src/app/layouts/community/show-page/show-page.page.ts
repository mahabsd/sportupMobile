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
  photos: any = [
    {
      url: "https://medias.lequipe.fr/img-photo-jpg/samuel-kistohurry-a-droite-etait-superieur-a-son-adversaire-dans-tous-les-domaines-d-boulanger/1500000001561412/0:0,1995:1330-1200-800-75/a7fdc.jpg"
    },
    {
      url: "https://www.lhebdojournal.com/wp-content/uploads/sites/22/2021/03/sports.jpg"
    },
    {
      url: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/d/b/7/db77d79aad_50173706_depenses-caloriques-sport-julien-eichinger-adobe-stock.jpg"
    },
    {
      url: "https://medias.pourlascience.fr/api/v1/images/view/5d1b663a8fe56f77c8671165/wide_1300/image.jpg"
    },
    {
      url: "https://www.irbms.com/wp-content/uploads/2019/09/choisr-un-sport-1280.png"
    },
    {
      url: "https://media.npr.org/assets/img/2020/06/10/gettyimages-200199027-001_wide-3ff0f063a2bf1ab01550d3508c816bc43009d215.jpg?s=1400"
    },
    {
      url: "https://www.rankonesport.com/content/Images/hero-bg.jpg"
    },
    {
      url: "https://sirc.ca/wp-content/uploads/2021/04/Gymnastics_safe-sport.jpeg"
    },
    {
      url: "https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg"
    },
    {
      url: "https://img.freepik.com/vecteurs-libre/kids-sport-icons-set_1284-16706.jpg?size=338&ext=jpg&ga=GA1.2.1850830551.1631404800"
    },
    {
      url: "https://inisport.com/wp-content/uploads/2019/07/images-sportifs.png"
    },
    {
      url: "https://sportfive.com/static/media/runner.2fa8a5bf.png"
    }
  ];
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
  constructor(private activatedRoute: ActivatedRoute,
    public pageService: PageService,
    private userservice: UserService,
    private imageService: ImageService,
    private elemRef: ElementRef,
    private action: ActionSheetController,
    private followerService: FollowerService,
    private modalController: ModalController,
    private postService: PostService,
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
    this.postService.getAllPostsByPage(this.id).subscribe(res=>{
      this.posts = res.data.data;
      console.log(this.posts);
    } );
  }
}

