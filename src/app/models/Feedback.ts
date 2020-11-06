import {PersonData} from './PersonData';

export class Feedback {
  id: number;
  feedbackAuthor: PersonData;
  content: string;


  constructor(id: number, feedbackAuthor: PersonData, content: string) {
    this.id = id;
    this.feedbackAuthor = feedbackAuthor;
    this.content = content;
  }
}
