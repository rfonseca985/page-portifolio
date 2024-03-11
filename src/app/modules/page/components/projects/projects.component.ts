import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
public arrayProjects = signal<IProjects[]>([
  {
    src: 'assets/img/projects/vfull.png',
    alt: 'Projeto Backend CRUD de Produtos',
    title: 'Projeto CRUD de Produtos',
    with: '100px',
    height: '51px',
    description:
      '<p>Este projeto é uma aplicação CRUD de produtos, desenvolvida com Angular 17, repositório frontend: `https://github.com/rfonseca985/api-frontend`. A aplicação consome uma API REST, desenvolvida com Java 17 e Spring Boot 3, repositório backend: `https://github.com/rfonseca985/api-backend`. A interface do usuário é intuitiva, permitindo a criação, leitura, atualização e exclusão de informações de produtos de forma suave.\n' +
      '\n' +
      '</p> <p>A API backend é robusta e eficiente, gerenciando todas as operações de banco de dados necessárias. Seguindo os princípios do design RESTful, facilita a comunicação entre o frontend e o backend. Em resumo, o projeto demonstra uma implementação eficaz de uma aplicação CRUD de produtos, utilizando tecnologias recentes e populares no desenvolvimento web.</p>',
    links: [
      {
        name: 'Conheça o projeto',
        href: 'https://api-crud-frontend.netlify.app/',
      },
    ],
  },
]);
}

