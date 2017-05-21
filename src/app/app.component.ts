import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Open Traverse Accura!';
  myForm: FormGroup;
  myForm2: FormGroup;
  values: Array<any>;



  constructor() {
    this.values = new Array();
    this.myForm = new FormGroup({
      'deg': new FormControl(),
      'min': new FormControl(),
      'sec': new FormControl(),
      'meet': new FormControl()
    });

    this.myForm2=new FormGroup({
      'anglePrecision': new FormControl(),
      'distancePrecisionMM': new FormControl(),
      'distancePrecisionPPM': new FormControl(),
      'centringErrorConstant': new FormControl(),
      'se': new FormControl(),
      'sn': new FormControl(),
      'sen': new FormControl()
    });
  }

  onSubmit() {

    // var numbers = new Array(this.myForm.value.deg, this.myForm.value.min, this.myForm.value.sec, this.myForm.value.meet); 
    var degree = this.myForm.value.deg + ((this.myForm.value.min + ((this.myForm.value.sec) / 60)) / 60);
    degree = (degree * (22 / 7)) / 180;
    var numbers = new Array(0, degree, this.myForm.value.meet);
    this.values.push(numbers);
    var x = Math.sin(30);
    console.log(this.values);
    console.log(x);
    for (var i = 0; i < this.values.length; i++) {
      console.log(i);
    }

    

  }

  onSubmit2() {
    console.log("adjhsd")
    console.log(this.myForm2)
  }


}
