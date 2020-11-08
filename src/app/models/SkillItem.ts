export class SkillItem {
    id: number;
    technology: string;
    level: number;

    constructor(id: number, technology: string, level: number) {
        this.id = id;
        this.technology = technology;
        this.level = level;
    }
}
