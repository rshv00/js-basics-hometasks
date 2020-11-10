import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SkillItem} from '../../models/SkillItem';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {

  @Output()
  skillAdded = new EventEmitter<SkillItem>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      technology: ['', Validators.required],
      level: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.skillAdded.emit(this.form.value as SkillItem);
  }

  get technology(): AbstractControl {
    return this.form.get('technology');
  }

  get level(): AbstractControl {
    return this.form.get('level');
  }
}
