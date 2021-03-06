import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tdee',
  templateUrl: './tdee.component.html',
  styleUrls: ['./tdee.component.scss']
})
export class TDEEComponent {

  allActivities = [
    { Id: 1, Name: "Basal Metabolic Rate (the minimum your body needs to function)"},
    { Id: 1.2, Name: "Rarely exercices"},
    { Id: 1.375, Name: "2-3 times/week"},
    { Id: 1.4187, Name: "4 times/week"},
    { Id: 1.4625, Name: "5 times/week"},
    { Id: 1.55, Name: "Daily"},
    { Id: 1.6375, Name: "5 times/week (intense)"},
    { Id: 1.725, Name: "Daily (intense) or twice daily"},
    { Id: 1.9, Name: "Daily exercise + physical job"}
  ]

  TDEEForm = this.fb.group({
    Gender: ["man", Validators.required],
    Age: ['', Validators.required],
    Height: ['', Validators.required],
    Weight: ['', Validators.required],
    Activity: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  result: number

  @Output() change: EventEmitter<number> = new EventEmitter<number>()

  onSubmit(){
    const { Gender, Age, Height, Weight, Activity } = this.TDEEForm.value
    
    if( Gender === "man"){
      this.result = Math.round((10 * Weight + 6.25 * Height - 5 * Age + 5) * Activity)
      this.change.emit(this.result)
    } else {
      this.result = Math.round((10 * Weight + 6.25 * Height - 5 * Age - 161) * Activity)
      this.change.emit(this.result)
    }
  }

}
