import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit, OnChanges {

  @Input()
  isShown: boolean;

  @Input() 
  speaker: string;

  @Output()
  changeValue = new EventEmitter<boolean>();

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.isShown = false;
    this.formGroup = formBuilder.group({
      nameCtrl: [
        "",
        Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(50), 
          Validators.pattern("[a-z-A-Z]*"),
          Validators.required
        ])
      ],
      emailCtrl: [
        "",
        Validators.compose([
          Validators.minLength(12),
          Validators.pattern("[0-9-a-z-A-Z@.]*"),
          Validators.required
        ])
      ],
      msgCtrl: [
        "",
        Validators.compose([
          Validators.minLength(10), 
          Validators.pattern("[0-9-a-z-A-Z@.#*$!?+-/]*"),
          Validators.required
        ])
      ]
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.isShown = changes.isShown.currentValue;
  }

  reset(): void {
    this.isShown = false;
    this.changeValue.emit(this.isShown);
  }

  onSubmit(formData: any) {
    console.log(formData);
  }
}
