export class EducationItem {
  id: number;
  year: string;
  description: string;


  constructor(id: number, year: string, details: string) {
    this.id = id;
    this.year = year;
    this.description = details;
  }

}
