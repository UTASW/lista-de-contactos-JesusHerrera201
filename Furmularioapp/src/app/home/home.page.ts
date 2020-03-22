import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import * as $ from "jquery";
import {AlertController} from '@ionic/angular';
import {DatosServiceService} from '../services/datos-service.service'


@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {

  constructor(public formBuilder: FormBuilder,public alertController: AlertController, public DatosServiceService: DatosServiceService) {}
 

}