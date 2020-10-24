export class Feedback {
  id: number;
  content: string;
  author: string;
  authorPicUrl: string;
  occupation: string;
  personalSiteLink: string;

  constructor(id: number, content: string, author: string, authorPicUrl: string, occupation: string, personalSiteLink: string) {
    this.id = id;
    this.content = content;
    this.author = author;
    this.authorPicUrl = authorPicUrl;
    this.occupation = occupation;
    this.personalSiteLink = personalSiteLink;
  }
}
