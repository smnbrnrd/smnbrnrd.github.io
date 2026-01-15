import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../services/projects.service";
import {Project} from "../../data/project";
import {NgForOf} from "@angular/common";
import {ProjectComponent} from "../project/project.component";

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [
    NgForOf,
    ProjectComponent
  ],
  templateUrl: './research.component.html',
  styleUrl: './research.component.css'
})
export class ResearchComponent implements OnInit {
  projects!: ReadonlyArray<Project>;
  constructor(private projectService: ProjectsService) { }
  ngOnInit(): void {
    this.projects = this.projectService.projects;
  }
}
