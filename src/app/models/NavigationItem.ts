export class NavigationItem {
  id: number;
  icon: string;
  alt: string;
  text: string;
  href: string;

  constructor(id: number, icon: string, alt: string, text: string, href: string) {
    this.id = id;
    this.icon = icon;
    this.alt = alt;
    this.text = text;
    this.href = href;
  }
}
