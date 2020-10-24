import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {NavigationItem} from "../../models/NavigationItem";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  imageUrl: string;
  @Input()
  activeNavItem: number;
  @Output()
  navLinkClick = new EventEmitter<number>();

  navItems = [
    new NavigationItem(0,
      'assets/img/nav/user.svg',
      "User icon",
      'About me',
      '/about'),
    new NavigationItem(0,
      'assets/img/nav/graduation-cap.svg',
      "Graduation cap icon",
      'Education',
      '/education'),
    new NavigationItem(0,
      'assets/img/nav/pencil.svg',
      "Pencil icon",
      'Experience',
      '/#'),
    new NavigationItem(0,
      'assets/img/nav/diamond.svg',
      "Diamond icon",
      'Skills',
      '/#'),
    new NavigationItem(0,
      'assets/img/nav/suitcase.svg',
      "Suitcase icon",
      'Portfolio',
      '/#'),
    new NavigationItem(0,
      'assets/img/nav/cursor.svg',
      "Cursor icon",
      'Contacts',
      '/#'),
    new NavigationItem(0,
      'assets/img/nav/chat.svg',
      "Chat icon",
      'Feedbacks',
      '/#')
  ];
  mobile = true;

  constructor() {
  }

  ngOnInit(): void {
    this.activeNavItem = this.navItems[0].id;
    this.detectMobileDevice();

  }

  private detectMobileDevice() {
    if (window.screen.width === 360) {
      // this.mobile = true;
    }
  }

  onClick(id: number) {
    this.navLinkClick.emit(id);
  }

}
