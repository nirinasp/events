import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Endpoints } from '../enums/endpoints';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {

  speakerList: any;
  root: string;
  loading: any;
  contactState: boolean;
  contactName: string;

  constructor(private api: ApiService, private loadingCtrl: LoadingController) { 
    this.root = Endpoints.root;
    api.getSpeakers().subscribe(response => {
      this.speakerList = response;
      
      if (this.loading != null) {
        this.loading.dismiss();
      }
    });
  }

  async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading speakers...'
    });
    await this.loading.present();
  }

  refreshSpeakers(e): void {
    this.api.getSpeakers().subscribe(response => {
      this.speakerList = response;
      e.target.complete();
    });
  }

  openContactForm(event: any): void {
    if (!this.contactState) {
      this.contactName = event;
    }
    this.contactState = true;
  }

  updateValue(value: boolean): void {
    this.contactState = value;
  }
}
