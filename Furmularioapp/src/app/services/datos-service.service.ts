import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import * as $ from "jquery";
import {AlertController} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DatosServiceService {

  constructor(public formBuilder: FormBuilder,public alertController: AlertController) { }


  async presentAlert() {

    const alert = await this.alertController.create({

      header: 'Éxito',
      message: 'Se añadio el contacto',
      buttons: ['OK']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);

  }

  get name() {
    return this.registrationForm.get("name");
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get phone() {
    return this.registrationForm.get('phone');
  }
  get notes() {
    return this.registrationForm.get('notes');
  }
   
 
  registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
      ]
    ],
    notes: ['', [Validators.required, Validators.maxLength(250)]] 
  });
 
    btn(){
      let nombre = this.name.value;
      let tel = this.phone.value;
      let notes =this.notes.value;
      $("#nombre").text(nombre);
      $("#tel").text(tel);
      $("#notes").text(notes);
    }

}
