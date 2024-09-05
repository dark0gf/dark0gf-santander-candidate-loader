import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoadComponent} from "./load/load.component";
import {provideHttpClient} from "@angular/common/http";
import {withFetch} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
