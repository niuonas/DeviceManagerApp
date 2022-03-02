import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

  @Input() label: string = '';
  @Input() inputType: string = 'text';
  @Input() control: FormControl = new FormControl({});
  @Input() placeholderText: string = '';
  @Input() value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}


