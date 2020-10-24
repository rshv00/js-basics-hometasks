import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from "../../core/content.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
  }

  name = 'John Doe';
  profilePhotoSrc = 'assets/img/profile_photo.jpg';
  activeNavLink: number;
  aboutMeTitle = 'About me'
  aboutMeText = this.contentService.aboutMeText;
  educationItems = this.contentService.educationItems;

  onNavChanged(navLink: number) {
    this.activeNavLink = navLink;
  }

}
