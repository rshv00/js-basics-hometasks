export class Contact {
  id: number;
  iconName: string;
  iconAlt: string;
  value: string;
  href: string;
  title?: string;

  constructor(id: number, iconName: string, iconAlt: string, value: string, href: string, title?: string) {
    this.id = id;
    this.iconName = iconName;
    this.iconAlt = iconAlt;
    this.value = value;
    this.href = href;
    this.title = title;
  }
}

