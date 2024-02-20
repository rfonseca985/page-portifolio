import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Icone de conhecimendo de Java'
    },
    {
      src: 'assets/icons/knowledge/springboot.svg',
      alt: 'Icone de conhecimendo de Spring Boot'
    },
    {
      src: 'assets/icons/knowledge/postgre.svg',
      alt: 'Icone de conhecimendo de PostgreSQL'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimendo de Angular'
    },
    {
      src: 'assets/icons/knowledge/github.svg',
      alt: 'Icone de conhecimendo de GitHub'
    },
  ]);
}
