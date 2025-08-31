import { Component } from '@angular/core';
import { SideDrawer } from '../side-drawer/side-drawer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, SideDrawer],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  drawerOpen = false;
}
