import {Component, Input} from '@angular/core';
import {Project} from "../../data/project";
import {isEmpty} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project!: Project;
  protected readonly isEmpty = isEmpty;
}
