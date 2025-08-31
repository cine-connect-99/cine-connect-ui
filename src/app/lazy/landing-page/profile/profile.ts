import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-profile',
  imports: [Header],
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

}
