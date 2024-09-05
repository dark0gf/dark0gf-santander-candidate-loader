import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {InputComponent} from "../shared/text-input/input.component";
import {SelectboxInputComponent} from "../shared/selectbox-input/selectbox-input.component";
import {CheckboxInputComponent} from "../shared/checkbox-input/checkbox-input.component";
import {MatButton} from "@angular/material/button";
import {CandidatesService, TCandidate} from "../services/candidates.service";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";


@Component({
  selector: 'app-load',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, InputComponent, SelectboxInputComponent, CheckboxInputComponent, MatButton, AsyncPipe, NgForOf],
  templateUrl: './load.component.html',
  styleUrl: './load.component.css'
})
export class LoadComponent {
  $candidates: Observable<TCandidate[]>;

  candidateForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    surname: new FormControl<string>('', [Validators.required]),
    seniority: new FormControl<string | null>(null, [Validators.required]),
    years: new FormControl<number | undefined>(undefined, [Validators.required]),
    availability: new FormControl<boolean>(false, [Validators.required])
  });

  SENIORITY_OPTIONS = [
    {value: 'junior', label: 'Junior'},
    {value: 'senior', label: 'Senior'},
  ];

  constructor(private candidatesService: CandidatesService) {
    this.$candidates = candidatesService.getCandidatesObservable();
  }

  getFormControl(controlName: string): FormControl {
    return this.candidateForm.get(controlName) as FormControl;
  }

  submit() {
    this.candidateForm.markAllAsTouched();
    if (this.candidateForm.valid) {
      this.candidatesService.uploadCandidate(this.candidateForm.getRawValue() as TCandidate);
    }
  }
}
