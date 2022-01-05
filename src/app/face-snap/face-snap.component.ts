import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

//component est un decorateur à qui on passe un objet avec un selecteur, template, style
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
//pour utiliser ngOnInit on doit implémenter l'interface OnInit
export class FaceSnapComponent implements OnInit {
@Input() faceSnap!: FaceSnap;

  //attributs avec son type
  
  buttonText!: string;
//on fait passer le service dans le contructor
  constructor(private faceSnapsService: FaceSnapsService, private router : Router) {}

  //la methode ngoninit() est appelée automatiquement par Angular au moment de la 
  //creation de chaque instance, elle permet notamment d'initialiser des propriétés
  ngOnInit(){
    this.buttonText ="Oh Snap!";
  }

  
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
