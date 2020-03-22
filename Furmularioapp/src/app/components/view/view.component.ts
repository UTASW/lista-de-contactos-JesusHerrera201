import { Component, OnInit } from '@angular/core';
import {DatosServiceService} from '../../services/datos-service.service'
import { FormBuilder, Validators } from "@angular/forms";
import * as $ from "jquery";
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {

  constructor(public formBuilder: FormBuilder,public alertController: AlertController, public DatosServiceService: DatosServiceService) {}

  ngOnInit() {}

}
