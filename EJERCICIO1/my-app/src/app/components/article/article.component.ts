import { Component } from '@angular/core';
import { ImgComponent } from '../img/img.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [ImgComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

}
