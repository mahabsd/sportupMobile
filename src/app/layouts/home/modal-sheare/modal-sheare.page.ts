import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { User } from '../../../Shared/Model/User';
import { AuthService } from '../../../Shared/Auth/auth.service';
import { PostService } from '../../../Shared/Service/post.service';
import { Post } from '../../../Shared/Model/Post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageModel } from 'src/app/Shared/Model/ImageModel';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { SlicePipe } from '@angular/common';
const { Camera } = Plugins;
@Component({
  selector: 'app-modal-sheare',
  templateUrl: './modal-sheare.page.html',
  styleUrls: ['./modal-sheare.page.scss'],
})
export class ModalShearePage implements OnInit {
  @Input() user: User;
  // user: User = new User();
  post: Post = new Post();
  postForm: FormGroup;
  filesToUpload = null;

  images: ImageModel[] = [];
  posts: Post[] = [];
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  constructor(
    private plt: Platform,
    private action: ActionSheetController,
    private modalController: ModalController,
    private actionSheet: ActionSheetController,
    private authService: AuthService,
    private postService: PostService
  ) {}
  ngOnInit() {
    this.loadImage();

    this.postForm = new FormGroup({
      contentControl: new FormControl('', Validators.required),
    });
    this.getUser();
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
  openActionSheet() {
    this.actionSheet
      .create({
        header: 'Qui peut voir votre publication?',
        animated: true,
        mode: 'md',
        cssClass: 'my-custom-class',
        buttons: [
          {
            text: 'Public',
            role: 'destructive',
            icon: 'world',
            cssClass: 'title-img',
            handler: () => {
              console.log('Facebook share');
            },
          },
          {
            text: 'Amis',
            icon: 'people',
            cssClass: 'twitterIcon',
            handler: () => {
              console.log('Share clicked');
            },
          },
          {
            text: 'Amis sauf',
            icon: 'person',
            cssClass: 'whatsappIcon',
            handler: () => {
              console.log('Favorite clicked');
            },
          },
          {
            text: 'Moi uniquement',
            icon: 'bag',
            cssClass: 'whatsappIcon',
            handler: () => {
              console.log('Favorite clicked');
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
  segmentChanged(data) {
    console.log('gggg', data);
  }
  getUser() {
    this.authService.getUser().subscribe((res) => {
      this.user = res;
      return this.user;
    });
  }
  createPost() {
    console.log(this.filesToUpload);
    const fd = new FormData();
    if (this.filesToUpload) {
      fd.append('photo', this.filesToUpload, this.filesToUpload?.name);
    }
    if (this.post?.content) {
      fd.append('content', this.post?.content);
      fd.append('type', 'kids');

      console.log(fd);
      this.postService.createPost(fd).subscribe(res => {
        this.closeModal();
        return res;
      });
    }
    this.postService.createPost(fd).subscribe((res) => {
      this.closeModal();
      return res;
    });
  }

  loadImage() {
    this.postService.getAllPosts().subscribe((res) => {
      this.posts = res;
      console.log(this.posts);
    });
  }
  deleteImage(post, index) {
    this.postService.deletePost(post).subscribe((res) => {
      this.images.splice(index, 1);
    });
  }
  async selectImageSource() {
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'camera',
        handler: () => {
          this.addImage(CameraSource.Camera);
        },
      },
      {
        text: 'Choose from photos',
        icon: 'image',
        handler: () => {
          this.addImage(CameraSource.Photos);
        },
      },
      {
        text: 'Record Video',
        icon: 'video',
        handler: () => {
          // this.recordVideo();
        },
      },
      {
        text: 'Record Audio',
        icon: 'audio',
        handler: () => {
          // this.recordAudio();
        },
      },
    ];
    if (!this.plt.is('hybrid')) {
      buttons.push({
        text: 'Choose a file',
        icon: 'attach',
        handler: () => {
          this.fileInput.nativeElement.click();
        },
      });
    }

    const actionSheet = await this.action.create({
      header: 'Select Image Source',
      buttons,
    });

    await actionSheet.present();
  }

  async addImage(source: CameraSource) {
    console.log('addimage');

    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source,
    });
    console.log('image', image);
    const blobData = this.b64toBlob(
      image.base64String,
      `image/${image.format}`
    );
    const imageName = 'Give me a name';
    // this.post.photo = blobData;
    this.filesToUpload = blobData;
    console.log(this.filesToUpload);
  }
  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  uploadFile(event: EventTarget) {
    console.log('uploadfile');

    const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const file: File = target.files[0];
    this.filesToUpload = file;
    console.log(file);
    this.postService.uploadImageFile(file).subscribe((newImage: ImageModel) => {
      this.images.push(newImage);
    });
  }
}
