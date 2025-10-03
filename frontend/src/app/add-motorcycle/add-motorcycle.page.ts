// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-motorcycle',
//   templateUrl: './add-motorcycle.page.html',
//   styleUrls: ['./add-motorcycle.page.scss'],
// })
// export class AddMotorcyclePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { MotorcycleService } from '../services/motorcycle-service';


// @Component({
//   selector: 'app-add-motorcycle',
//   templateUrl: './add-motorcycle.page.html',
//   styleUrls: ['./add-motorcycle.page.scss'],
//   standalone: false
// })
// export class AddMotorcyclePage implements OnInit {
//   motorcycleForm!: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private motorcycleService: MotorcycleService,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     this.motorcycleForm = this.fb.group({
//       brand: ['', Validators.required],
//       model: ['', Validators.required],
//     });
//   }

//   onSubmit() {
//     if (this.motorcycleForm.valid) {
//       this.motorcycleService.addMotorcycle(this.motorcycleForm.value).subscribe({
//         next: () => {
//           //alert('Moto añadida con éxito');
//           this.router.navigate(['/my-motorcycles']);
//         },
//         error: (err) => {
//           console.error(err);
//           alert('Error al añadir la moto');
//         },
//       });
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MotorcycleService } from '../services/motorcycle-service';

@Component({
  selector: 'app-add-motorcycle',
  templateUrl: './add-motorcycle.page.html',
  styleUrls: ['./add-motorcycle.page.scss'],
  standalone: false
})
export class AddMotorcyclePage implements OnInit {
  motorcycleForm!: FormGroup;
  id?: any; // id opcional para edición

  constructor(
    private fb: FormBuilder,
    private motorcycleService: MotorcycleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.motorcycleForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
    });

    // Revisar si hay id en la ruta
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      // Cargar datos de la moto a editar
      this.motorcycleService.getMotorcycles().subscribe((motos: any[]) => {
        //const moto = motos.find(m => m.id == this.id);
        const moto = motos.find(m => m.id === Number(this.id));
        if (moto) {
          this.motorcycleForm.patchValue({
            brand: moto.brand,
            model: moto.model
          });
        }
      });
    }
  }

  onSubmit() {
    if (this.motorcycleForm.valid) {
      if (this.id) {
        // Editar moto existente
        this.motorcycleService.updateMotorcycle(this.id, this.motorcycleForm.value).subscribe({
          next: () => {
            //alert('Moto actualizada con éxito');
            this.router.navigate(['/my-motorcycles']);
          },
          error: (err: any) => {
            console.error(err);
            alert('Error al actualizar la moto');
          }
        });
      } else {
        // Añadir nueva moto
        this.motorcycleService.addMotorcycle(this.motorcycleForm.value).subscribe({
          next: () => {
            //alert('Moto añadida con éxito');
            this.router.navigate(['/my-motorcycles']);
          },
          error: (err: any) => {
            console.error(err);
            alert('Error al añadir la moto');
          }
        });
      }
    }
  }
}
