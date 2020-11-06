export class PersonData {
    firstName: string;
    lastName: string;
    company: string;
    jobPosition: string;
    photoUrl: string;
    websiteUrl: string;

    constructor(firstName: string, lastName: string, company: string, jobPosition: string, photoUrl: string, personalSiteUrl: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.jobPosition = jobPosition;
        this.photoUrl = photoUrl;
        this.websiteUrl = personalSiteUrl;
    }
}
