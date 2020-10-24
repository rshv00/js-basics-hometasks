import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  name = 'John Doe';
  profilePhotoSrc = 'assets/img/profile_photo.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
