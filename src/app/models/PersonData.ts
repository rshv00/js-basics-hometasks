export class PersonData {
    name: string;
    company: string;
    jobPosition: string;
    photoUrl: string;
    websiteUrl: string;
    frontBackgroundPicUrl?: string;

    constructor(name: string, company: string, jobPosition: string, photoUrl: string, personalSiteUrl: string,
                frontBackgroundPicUrl: string) {
        this.name = name;
        this.company = company;
        this.jobPosition = jobPosition;
        this.photoUrl = photoUrl;
        this.websiteUrl = personalSiteUrl;
        this.frontBackgroundPicUrl = frontBackgroundPicUrl;
    }
}
