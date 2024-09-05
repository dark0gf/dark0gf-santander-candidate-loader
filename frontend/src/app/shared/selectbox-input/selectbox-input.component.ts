import {Component, Input} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-selectbox-input',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './selectbox-input.component.html',
  styleUrl: './selectbox-input.component.css'
})
export class SelectboxInputComponent {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() items!: {value: string, label: string}[];

}
