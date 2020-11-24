import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Endpoints } from 'src/app/enums/endpoints';
import { Speaker } from 'src/app/models/speaker';

@Component({
  selector: 'custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {

  @Input()
  data: any;

  @Output()
  contact = new EventEmitter<string>();

  root: string;

  constructor() {
    this.root = Endpoints.root;
  }

  ngOnInit() {
  }

  contactSpeaker(speakerName: string) : void {
    this.contact.emit(speakerName);
  }
}
