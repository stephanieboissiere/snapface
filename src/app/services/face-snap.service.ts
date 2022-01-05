import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
          title: 'carte',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'paris',
  
        },
        {
            id: 2,
          title: 'UN BON REPAS',
          description: 'C\'Est Trop Bon !',
          imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'cuisine de paris'
  
        },
        {
          id: 3,
          title: 'youpiS',
          description: 'C\'Est la fête !',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg',
          createdDate: new Date(),
          snaps: 0,
        },
  
      ]

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }

    snapFaceSnapById(faceSnapId: number, snapType : 'snap' |'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}