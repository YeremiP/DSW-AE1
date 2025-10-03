// import { Component, OnInit } from '@angular/core';
// import { NavController } from '@ionic/angular';
// import { MotorcycleService } from '../services/motorcycle-service';

// @Component({
//   selector: 'app-my-motorcycles',
//   templateUrl: './my-motorcycles.page.html',
//   styleUrls: ['./my-motorcycles.page.scss'],
//   standalone: false
// })
// export class MyMotorcyclesPage implements OnInit {

//   motorcycles: any [];

//   constructor (private motorcycleService: MotorcycleService) { }

//   ngOnInit(){
//     this.getAllMotorcycles();
//   }

//   getAllMotorcycle(){
//     this.bicycleService.getMotorcycles().subscribete(response => {
//       this.motorcycles = response;
//     });
//   }

//   // motorcycles: any =[
//   //   {
//   //     id:1,
//   //     brand:"BH",
//   //     model:"start"
//   //   },{
//   //     id:2,
//   //     brand:"Orbea",
//   //     model:"sky"
//   //   }
//   // ]

//   //constructor(private navCtrl: NavController) {}

//   gotoMyHomePage(){
//     this.navCtrl.navigateBack ('/home');
//   }

// }

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MotorcycleService } from '../services/motorcycle-service';

@Component({
  selector: 'app-my-motorcycles',
  templateUrl: './my-motorcycles.page.html',
  styleUrls: ['./my-motorcycles.page.scss'],
  standalone: false,
})
export class MyMotorcyclesPage implements OnInit {
  motorcycles: any[] = [];

  constructor(
    private motorcycleService: MotorcycleService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getAllMotorcycles();
  }

  getAllMotorcycles() {
    this.motorcycleService.getMotorcycles().subscribe((response) => {
      this.motorcycles = response as any[];
    });
  }

  gotoMyHomePage() {
    this.navCtrl.navigateBack('/home');
  }

  loadMotorcycles() {
    this.motorcycleService.getMotorcycles().subscribe({
      next: (data: any) => {
        this.motorcycles = data;
      },
      error: (err: any) => {
        console.error(err);
        alert('Error al cargar las motos');
      },
    });
  }

  ionViewWillEnter() {
    this.loadMotorcycles();
  }

  deleteMotorcycle(id: any) {
    if (confirm('¿Quieres eliminar esta moto?')) {
      this.motorcycleService.deleteMotorcycle(id).subscribe({
        next: () => {
          alert('Moto eliminada con éxito');
          this.loadMotorcycles(); // recarga la lista
        },
        error: (err: any) => {
          console.error(err);
          alert('Error al eliminar la moto');
        },
      });
    }
  }
  editMotorcycle(id: any) {
    this.navCtrl.navigateForward(`/add-motorcycle/${id}`);
  }
}


// import { Component, OnInit } from '@angular/core';
// import { NavController } from '@ionic/angular';
// import { MotorcycleService } from '../services/motorcycle-service';

// @Component({
//   selector: 'app-my-motorcycles',
//   templateUrl: './my-motorcycles.page.html',
//   styleUrls: ['./my-motorcycles.page.scss'],
//   standalone: false
// })
// export class MyMotorcyclesPage implements OnInit {

//   motorcycles: any[] = [];

//   constructor(
//     private motorcycleService: MotorcycleService,
//     private navCtrl: NavController
//   ) { }

//   ngOnInit() {
//     this.getAllMotorcycles();
//   }

//   getAllMotorcycles() {
//     this.motorcycleService.getAll().subscribe(response => {
//       this.motorcycles = response;
//     });
//   }

//   deleteMotorcycle(id: number) {
//     this.motorcycleService.delete(id).subscribe({
//       next: () => {
//         // Vuelve a cargar la lista después de eliminar
//         this.getAllMotorcycles();
//       },
//       error: (err) => console.error('Error eliminando moto:', err)
//     });
//   }

//   gotoMyHomePage() {
//     this.navCtrl.navigateBack('/home');
//   }
// }
