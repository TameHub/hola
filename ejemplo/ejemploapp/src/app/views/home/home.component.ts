import { Component } from '@angular/core';
import { NombreServicioService } from '../../services/nombre-servicio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public image: string = "";
  public constructor(public service: NombreServicioService) {}

  public getResponse(): void{
    this.service.getResponse().subscribe((response) => {
      console.log(response);
    })
  }

  public ngOnInit(): void {
    this.getResponse();
  }
}
