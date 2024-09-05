import {Component, Input} from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, ReactiveFormsModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() type: string = 'text';
}
