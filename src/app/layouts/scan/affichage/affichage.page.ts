import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { ModalController, NavParams } from '@ionic/angular';
import { MesuresPage } from '../mesures/mesures.page';
import { MesuresPageModule } from '../mesures/mesures.module';
import { Router } from '@angular/router'
import { PopoverController } from '@ionic/angular'
import { AvatarsimpleService } from 'src/app/Shared/Service/avatarsimple.service';
@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.page.html',
  styleUrls: ['./affichage.page.scss'],
})
export class AffichagePage implements OnInit {
  public allNotifications: any;
  user = {
    id: 1,
    name: 'fares',
    surname: 'mallek',
    height: 185,
    weight: 75,
    gender: 0,
  };

  /*user = {
    id: 2,
    name: 'fares',
    surname: 'mallek',
    height: 185,
    weight: 275,
    gender: 0,
  };*/

  constructor(
    public avatarservice: AvatarsimpleService,
    private modalcontroller: ModalController,
    private router1: Router,
    public popoverController: PopoverController
  ) { }



  ngOnInit() {

    this.avatarservice.createItem(this.user).subscribe((response) => {
      this.avatarservice.getItem(this.user.id).subscribe((res) => {
        this.allNotifications = res.comb;
        //console.log(res)
        renderresult(res)
      })
    });

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MesuresPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'model_title': this.allNotifications
      },
      event: ev,
      translucent: true
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }

  OpenModel() {
    //console.log(this.allNotifications)

    this.modalcontroller.create({
      component: MesuresPage,
      componentProps: {
        'model_title': this.allNotifications
      }
    }).then((modalElement) => {
      modalElement.present();



    })
  }

  return() {
    this.router1.navigate([''])
  }



}

function renderresult(test1: any) {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  camera.fov -= 50;
  camera.updateProjectionMatrix();


  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  var geometry1 = new THREE.BufferGeometry();
  const ver = new Float32Array(37500);
  for (var i = 0; i < 37500; i++) {
    ver[i] = test1.avatar.vertices[i]

  }

  const faces = [];
  //console.log(test1)

  for (var i = 0; i < 75000; i = i + 3) {

    faces.push(test1.avatar.indexes[i], test1.avatar.indexes[i + 1], test1.avatar.indexes[i + 2])

  }

  const vertices1 = test1.avatar.vertices;

  geometry1.setAttribute('position', new THREE.BufferAttribute(ver, 3));
  geometry1.setIndex(faces)


  const material1 = new THREE.MeshBasicMaterial({ color: 0x5dc4e7 });
  const mesh1 = new THREE.Mesh(geometry1, material1);
  mesh1.material.wireframe = true
  scene.add(mesh1);

  const material2 = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const mesh2 = new THREE.Mesh(geometry1, material2);
  mesh2.material.wireframe = false
  scene.add(mesh2);
  const animate = function () {
    requestAnimationFrame(animate);
    mesh1.rotation.y += 0.01;
    mesh2.rotation.y += 0.01;

    renderer.render(scene, camera);
  };
  camera.position.z = 5;
  renderer.render(scene, camera);
  animate();


}


