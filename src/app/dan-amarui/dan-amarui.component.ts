import {Component, inject} from '@angular/core';
import {FormArray, FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-dan-amarui',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dan-amarui.component.html',
  styleUrl: './dan-amarui.component.css'
})
export class DanAmaruiComponent {
  fb = inject(FormBuilder);

  frm = this.fb.group({
    values: this.fb.array([
      new FormControl('')
    ])
  });

  get values(){
    return this.frm.get('values') as FormArray;
  }

  addNewControl(){
    this.values.controls.push(new FormControl);
  }
}
