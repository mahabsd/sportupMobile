import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';


import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageModel } from 'src/app/Shared/Model/ImageModel';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { SlicePipe } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { PostService } from 'src/app/Shared/Service/post.service';
import { AuthService } from 'src/app/Shared/Auth/auth.service';
import { User } from 'src/app/Shared/Model/User';
import { Post } from 'src/app/Shared/Model/Post';
const { Camera } = Plugins;
@Component({
  selector: 'app-add-status-kids',
  templateUrl: './add-status-kids.page.html',
  styleUrls: ['./add-status-kids.page.scss'],
})
export class AddStatusKidsPage implements OnInit {
  @Input() user: User;
  @Input() pagetype: String;

  // user: User = new User();
  post: Post = new Post();
  postForm: FormGroup;
  filesToUpload = null;

  images: ImageModel[] = [];
  posts: Post[] = [];
  @ViewChild('fileInput', { static: false }) multiFileInput: ElementRef;
  //@ViewChild('fileInput', { static: false }) choosePhotosInput: ElementRef;
  selectedFiles: any[];
  progressInfos: any[];
  message: string;
  selectedPreviews: any = [];
  imageSrc: string | ArrayBuffer;
  constructor(
    private plt: Platform,
    private action: ActionSheetController,
    private modalController: ModalController,
    private actionSheet: ActionSheetController,
    private authService: AuthService,
    private postService: PostService,
    private toastCtrl: ToastController,
    private Renderer: Renderer2,
  ) { }
  ngOnInit() {
    console.log(this.pagetype)
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


  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

  createPost() {
    console.log(this.filesToUpload);
    const fd = new FormData();
    if (this.filesToUpload) {

      if (fd.has('photo'))
        fd.delete('photo');

      fd.append('photo', this.filesToUpload, this.filesToUpload?.name);
    }
    if (this.post?.content) {
      
      fd.append('content', this.post?.content);
      fd.append('type', 'kids');

    }

    if (this.selectedFiles) {
      if (fd.has('photo')) {
        const photo = fd.get('photo');
        fd.delete('photo');
        fd.append('files', photo);

      }

      this.uploadFiles(fd);
    } else {
      console.log(fd);

      this.postService.createPost(fd).subscribe((res) => {
        this.presentToast('Fichiers Ajoutées');
        this.closeModal();

        return res;
      });
    }


    /*  this.postService.createPost(fd).subscribe((res) => {
        this.closeModal();
        return res;
      });*/
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


          this.Renderer.setAttribute(this.multiFileInput.nativeElement, "accept", "image/jpg, image/jpeg, image/gif, image/png");
          this.multiFileInput.nativeElement.click();

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
          this.Renderer.setAttribute(this.multiFileInput.nativeElement, "accept", "image/jpg, image/png, application/pdf, video/mp4");
          this.multiFileInput.nativeElement.click();


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
  uploadFiles(formData: FormData) {
    this.message = '';

    for (const file of this.selectedFiles) {
      formData.append('files', file);
    }
    this.postService.uploadImageFile(formData).subscribe((res) => {
      console.log(res);
      this.presentToast('Fichiers Ajoutées');
      this.closeModal();
      window.location.reload();
    });
  }
  selectFiles(event) {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.selectedPreviews = [];
    for (const file of this.selectedFiles) {
      console.log('tpye' + file.type);

      if (file.type === 'image/jpeg') {
        const reader = new FileReader();
        reader.onload = e => this.selectedPreviews.push(reader.result);

        reader.readAsDataURL(file);
      }
      else if (file.type === "video/mp4") {
        this.selectedPreviews.push('../../../assets/imgs/150.png');

      }



    }

    this.actionSheet.dismiss();
  }

  getType(file) {
    return file.type;
  }

  /* uploadFile(event: EventTarget) {
     console.log('uploadfile');
 
     const eventObj: MSInputMethodContext = event as MSInputMethodContext;
     const target: HTMLInputElement = eventObj.target as HTMLInputElement;
     const file: File = target.files[0];
     this.filesToUpload = file;
     console.log(file);
     this.postService.uploadImageFile(file).subscribe((newImage: ImageModel) => {
       this.images.push(newImage);
 
     });
   }*/
}