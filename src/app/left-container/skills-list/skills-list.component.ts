import { Component, OnInit } from '@angular/core';
import { SkillsListService } from './skills-list.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {
  skillsList : string[] = [];
  constructor(private skillListService: SkillsListService) { }

  ngOnInit(): void {
    this.skillsList = this.skillListService.skillsList;
  }

}
