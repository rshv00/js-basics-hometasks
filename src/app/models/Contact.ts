export class Contact {
  id: number;
  iconUrl: string;
  iconAlt: string;
  value: string;
  href: string;
  title?: string;

  constructor(id: number, iconUrl: string, iconAlt: string, value: string, href: string, title?: string) {
    this.id = id;
    this.iconUrl = iconUrl;
    this.iconAlt = iconAlt;
    this.value = value;
    this.href = href;
    this.title = title;
  }
}

