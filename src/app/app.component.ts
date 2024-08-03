import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {DanAmaruiComponent} from "./dan-amarui/dan-amarui.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, ReactiveFormComponent, DanAmaruiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myInputControl = new FormControl('',
    [Validators.required,
      Validators.pattern(/^[A-Za-z0-9]+$/)]);

  validate(){
    if(this.myInputControl.valid){
      alert("Valid");
    }else{
      alert("Invalid");
    }
  }
}
