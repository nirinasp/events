import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { Event } from '../models/event';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventList: any;
  loading: any;

  constructor(private api: ApiService, private router: Router, private loadingCtrl: LoadingController) {
    api.getEvents().subscribe(response => {
      this.eventList = response;

      if (this.loading != null) {
        this.loading.dismiss();
      }
    });
  }

  async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading events...'
    });
    await this.loading.present();
  }

  gotoEventDetail(event: Event): void {
    let extra: NavigationExtras = {
      queryParams: {
        id: event.id
      }
    };
    this.router.navigate(['event-detail'], extra);
  }

  refreshEvents(e): void {
    this.api.getEvents().subscribe(response => {
      this.eventList = response;
      e.target.complete();
    });
  }
}
