import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],

})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm : NgForm

  constructor(private route : Router) { }

  ngOnInit() {
  }
  onBack(){
    this.route.navigate(['/'])
  }
  onSubmit(Form : NgForm){
   console.log("Form has been Submited!")
   console.log(this.addPropertyForm);

  }
}
