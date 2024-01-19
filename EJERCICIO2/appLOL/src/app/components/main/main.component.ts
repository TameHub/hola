import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenuComponent, AsideComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
