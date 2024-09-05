import {Component, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-checkbox-input',
  standalone: true,
  imports: [FormsModule, MatCheckbox, ReactiveFormsModule],
  templateUrl: './checkbox-input.component.html',
  styleUrl: './checkbox-input.component.css'
})
export class CheckboxInputComponent {
  @Input() control!: FormControl;
  @Input() label!: string;
}
