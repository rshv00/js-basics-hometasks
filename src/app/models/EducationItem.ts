export class EducationItem {
  id: number;
  period: string;
  details: string;


  constructor(id: number, year: string, details: string) {
    this.id = id;
    this.period = year;
    this.details = details;
  }

}
