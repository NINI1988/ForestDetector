import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{

  constructor(public headerService: HeaderService)
  {
  }

}
