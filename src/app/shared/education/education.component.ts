import {Component, Input, OnInit} from '@angular/core';
import {EducationItem} from "../../models/EducationItem";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  title = 'Education';
  @Input()
  educationItems: EducationItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
