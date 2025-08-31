import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-drawer',
  imports: [],
  standalone: true,
  templateUrl: './side-drawer.html',
  styleUrl: './side-drawer.scss'
})
export class SideDrawer {
  @Input() drawerOpen = false;
  @Output() closeDrawer = new EventEmitter<void>();

  constructor(
    private readonly router: Router
  ) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.router.navigate(['/main']);
  }
}
