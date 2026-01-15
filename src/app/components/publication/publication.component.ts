import {Component, Input} from '@angular/core';
import {Publication} from "../../data/publication";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.css'
})
export class PublicationComponent {
  @Input() publication!: Publication;
}
