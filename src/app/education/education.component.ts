import { Component, OnInit } from '@angular/core';
import * as data from '../education.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  educationList: any;
  ngOnInit() {
    this.sortEducation();
  }
  sortEducation() {
    this.educationList = data;
    this.educationList = this.educationList.default.education;
    this.educationList.sort(function (a, b) {
      return b.startYear - a.startYear;
    });
  }
}
