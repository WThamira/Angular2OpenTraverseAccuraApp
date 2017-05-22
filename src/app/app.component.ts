import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Traverse Computation!';
  myForm: FormGroup;
  myForm2: FormGroup;
  values: Array<any>;
  angValues: Array<any>;
  centErroArry: Array<any>;
  stdOfTraAng: Array<any>;
  stdOfTraDist: Array<any>;
  forwardAngle: Array<any>;
  varinceSe: Array<any>;
  varinceSn: Array<any>;
  coreVarinceSen: Array<any>;
LinearMisclosure:number;

  constructor() {

    this.values = new Array();
    this.angValues = new Array();
    this.centErroArry = new Array();
    this.stdOfTraAng = new Array();
    this.stdOfTraDist = new Array();
    this.forwardAngle = new Array();
    this.varinceSe = new Array();
    this.varinceSn = new Array();
    this.coreVarinceSen = new Array();
    this.myForm = new FormGroup({
      'deg': new FormControl(),
      'min': new FormControl(),
      'sec': new FormControl(),
      'meet': new FormControl()
    });

    this.myForm2 = new FormGroup({
      'anglePrecision': new FormControl(),
      'distancePrecisionMM': new FormControl(),
      'distancePrecisionPPM': new FormControl(),
      'centringErrorConstant': new FormControl(),
      'se': new FormControl(),
      'sn': new FormControl(),
      'sen': new FormControl()
    });

    this.values.push([1, ((25 / 180) * Math.PI), 126.305]);
    this.values.push([2, (((105 + (22 / 60) + (20 / 3600)) / 180) * Math.PI), 57.995]);
    this.values.push([3, (((190 + (16 / 60) + (15 / 3600)) / 180) * Math.PI), 133.545]);
    this.values.push([4, (((290 + (42 / 60) + (30 / 3600)) / 180) * Math.PI), 91.38]);


  }

  onSubmit() {

    // var numbers = new Array(this.myForm.value.deg, this.myForm.value.min, this.myForm.value.sec, this.myForm.value.meet); 
    var degree = this.myForm.value.deg + ((this.myForm.value.min + ((this.myForm.value.sec) / 60)) / 60);
    degree = (degree * (22 / 7)) / 180;
    var numbers = new Array(this.values.length+1, degree, this.myForm.value.meet);
    this.values.push(numbers);
    var x = Math.sin(30);
    console.log(this.values);
    console.log(x);
    for (var i = 0; i < this.values.length; i++) {
      console.log(i);
    }



  }

  onSubmit2() {
    for (var i = 0; i < this.values.length - 2; i++) {
      this.angValues.push(Math.PI - this.values[i][1] + this.values[i + 1][1]);

    }
    // console.log(this.angValues);


    for (var i = 0; i < this.values.length - 2; i++) {

      var x = this.myForm2.value.centringErrorConstant * (Math.sqrt((1 / (Math.pow(this.values[i][2], 2))) + (1 / (Math.pow(this.values[i + 1][2], 2))) - (Math.cos(this.angValues[0]) / (this.values[i][2] * this.values[i + 1][2])
      )));
      this.centErroArry.push(x);
    }
    // console.log(this.centErroArry);

    for (var i = 0; i < this.centErroArry.length; i++) {
      var x = Math.pow(this.centErroArry[i], 2);
      var y = Math.pow(((this.myForm2.value.anglePrecision * Math.PI) / (180 * 3600)), 2);

      var z = x + y;

      this.stdOfTraAng.push(Math.sqrt(z));

    }

    // console.log(this.stdOfTraAng);

    for (var i = 0; i < this.values.length - 1; i++) {
      var x = Math.round((this.myForm2.value.distancePrecisionMM / 1000 + ((this.myForm2.value.distancePrecisionPPM) / 1000000 * this.values[i][2])) * 1000) / 1000;
      this.stdOfTraDist.push(x);
    }

    // console.log(this.stdOfTraDist);

    this.forwardAngle.push(0);

    for (var i = 0; i < this.angValues.length; i++) {

      var x = Math.sqrt((Math.pow(this.forwardAngle[i], 2)) + Math.pow(this.stdOfTraAng[i], 2));

      this.forwardAngle.push(x);
    }
    // console.log(this.forwardAngle);

    // console.log("sadasdsad");
    this.varinceSe.push(this.myForm2.value.se);
    this.varinceSn.push(this.myForm2.value.sn);
    this.coreVarinceSen.push(this.myForm2.value.sen);
    for (var i = 0; i < this.values.length - 1; i++) {
      var a = Math.pow(Math.sin(this.values[i][1]), 2) * Math.pow(this.stdOfTraDist[i], 2);
      var b = Math.pow(this.values[i][2] * Math.cos(this.values[i][1]), 2) * Math.pow(this.forwardAngle[i], 2);
      var c = a + b + this.varinceSe[i];
      this.varinceSe.push(c);
      var d = Math.pow(Math.cos(this.values[i][1]), 2) * Math.pow(this.stdOfTraDist[i], 2);
      var e = Math.pow(this.values[i][2] * Math.sin(this.values[i][1]), 2) * Math.pow(this.forwardAngle[i], 2);
      var f = d + e + this.varinceSn[i];
      this.varinceSn.push(f);
     


      var g = (Math.sin(this.values[i][1]) * Math.cos(this.values[i][1])) * Math.pow(this.stdOfTraDist[i], 2)
      var h = this.values[i][2] * (Math.sin(this.values[i][1]) * Math.cos(this.values[i][1])) * Math.pow(this.forwardAngle[i], 2)
      var j = g + h + this.coreVarinceSen[i];
      this.coreVarinceSen.push(j);

    }
    // console.log(this.varinceSe);
    // console.log(this.varinceSn);
    // console.log(this.coreVarinceSen)

    var a = Math.cos(this.values[this.values.length - 1][1]) / this.values[this.values.length - 1][2];
    var b = -Math.sin(this.values[this.values.length - 1][1]) / this.values[this.values.length - 1][2];
    var d = Math.cos(this.values[this.values.length - 1][1]);
    var e = -Math.sin(this.values[this.values.length - 1][1]);

    // console.log("sasdsad");
    // console.log(a);
    // console.log(b);
    // console.log(d);
    // console.log(e);

    var m = (this.varinceSe[this.varinceSe.length - 1]) * (Math.pow(e, 2));
    var n = (this.varinceSn[this.varinceSn.length - 1] * Math.pow(d, 2));
    var o = Math.pow(d, 2) * Math.pow(e, 2) * this.coreVarinceSen[this.coreVarinceSen.length - 1];
    // console.log('sssssss');
    // console.log(m);
    // console.log(n);
    // console.log(o);
    var LinearMisclosure = Math.sqrt(m + n + o)
    console.log(LinearMisclosure);
    this.LinearMisclosure=LinearMisclosure;
    var p = (this.varinceSe[this.varinceSe.length - 1]) * (Math.pow(a, 2));
    var q = (this.varinceSn[this.varinceSn.length - 1] * Math.pow(b, 2));
    var r = Math.pow(a, 2) * Math.pow(b, 2) * this.coreVarinceSen[this.coreVarinceSen.length - 1];
    var angMisclosure = Math.sqrt(p + q + r)
    console.log(angMisclosure);

  }


}
