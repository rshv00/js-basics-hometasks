export class ExperienceItem {
  id: number;
  jobPlace: string;
  period: string;
  jobTitle: string;
  jobDescription;

  constructor(id: number, jobPlace: string, period: string, jobTitle: string, jobDescription) {
    this.id = id;
    this.jobPlace = jobPlace;
    this.period = period;
    this.jobTitle = jobTitle;
    this.jobDescription = jobDescription;
  }
}
