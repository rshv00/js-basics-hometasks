export class SkillItem {
    id: number;
    skillName: string;
    skillRange: number;

    constructor(id: number, skillName: string, skillRange: number) {
        this.id = id;
        this.skillName = skillName;
        this.skillRange = skillRange;
    }
}
