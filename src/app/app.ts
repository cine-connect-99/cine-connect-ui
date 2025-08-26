import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './lazy/home-page/header/header';
import { Banner } from './lazy/home-page/banner/banner';
import { Footer } from './lazy/home-page/footer/footer';
import { ProjectCard } from './lazy/home-page/project-card/project-card';
import { JobListing } from './lazy/home-page/job-listing/job-listing';
import { LoginComponent } from './lazy/log-in/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Banner, Footer, ProjectCard, JobListing, LoginComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cine-connect');

  public showLogin = false;
  projectCards = [{
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhHginxJL1tE2TicNY5zdGMypw9ZOa4h67NwxYWPxsG5ib5kysnZfdDY-Zs821SJhBPQxxr60FWC8pSXoJSeeT7ZrKf9FmpsoxRxKFlfB1e0XQ640gWa2uDw2p09lyWtQEdAO5UXofv9mTlvDXVjN_RXTRHeKFA1lPpina3m8Pmn5q9trYzyLg3vROkcdUEJ5ER-C_olIkO1MiHnNGDpt3Po_HTGMB34h5Yg6fIyAMKDSyuIIekEKeV2sbkH1WyRzG0S7kVGwL6yTD',
    title: 'The Last Frontier',
    desc: 'A historical drama set in the American West.'
  }, {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWiWpvt5_0SNI2M1oN0OdaImR6YRi2IP7lWiF7Nx4XBRrkzUVG0ovHt6n4xR1Smou1kJ2tlLx5_fAnMuFWEks4GjnpjcKQOQMGl2DkVTy5CA3cCtG7cg54nJwZkYpkesn9gtXsXyrNxUdDT94vKh3-CieBA4GEhUKXvCE3GIXchg8PZMmlVBglJdFHjIaIUalaNT4YULEoEzKQtjCrrYmbv_GGuiUyD9ODZ5277zVfEH59qri_58XS4xj3o54W_zuZwgdBu0IP34HS',
    title: 'Space Odyssey',
    desc: 'A sci-fi adventure exploring distant galaxies.'
  }, {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy9EVq6aWkFMTfRzoIYsOZeOPyid8ECrok5GSdubWtB7quFG5C3FVfh-SHtps5YUFMiG9TcJ5ortO8WOdw-26VWLh8zGDNx3l83WT2IAdef5xcqLey_vHoCgM8y1JkAi-f4MKIFb1wBaBHslk4gJTg1AEEXTK2RdQRoZEWw4drvVKRAxbOJoJv_NaLURAAXv6Mo-CKQuUgTLSjvuopDOoI47kcx1lOrOyMoWpoAGnLU5yDmv2rEx8NLLyeJQoPa40HxdXsA5nHzWMo',
    title: 'Romance in Paris',
    desc: 'A love story set against the backdrop of the City of Lights.'
  }];

  jobListings = [{
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2BYY5dh3a4k7IluBef9U-xHBETFUmUu8L8xJHR43Io4M2m33GiPdYmr6L1YA6b4HQbyUhdKosLJEVmND2R9GfUwNXSzGelkUrjIaPFJcQw7uxKyuMmkAbG-L90coTaNFLq3kjHcwgmIDAEtJGsDG54DKDvIi8R7Kj9Bxtp_Hf4dMh0sPECtNKMg97_4WdBE6Aro3GSfg0TSskaouLsS4NH1vzNeK_jy4VE_OxiiY7d9Nz-u8MLblkXUUHm5PZmFJW-LGUBNLgKszd',
    title: 'Cinematographer',
    desc: 'Independent Film Production - Los Angeles, CA'
  }, {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcFBq1GWz1D4O_1Qjzql63PvIt_9Cr_ScBUqalfehgvRgixEv4Cdr-b96q5ONp_9m2gaAIqIbnUeyKkHQeDp7de98gSyqUHs9lcPEcN5_OyHxXeSvbuf06Bs8id3ZDNrQMkKj1APyyD-xWGqwkg2FLu_Y4XVLaFpdegxeLIIjW9a9p8uqb6tW_G42qsHmsSQ8n_k0wK7TfIerCkKJqqAZfBNrqyLvW_lhLU4jTeHO6kXxYCRJpxUiNuHgCn2NqquUAQI_lNG65Oetb',
    title: 'Sound Designer',
    desc: 'Web Series - New York, NY'
  }, {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqwl02EZSZOHGSm7F-o2evAHEgp5SlVByrhaCXK_TJaleu3VdyNBQrq1BVq4wwMa811z49-XFpuX_riECSaGt5tGCXn1Ws_PR9VAT3_vVIkFbv0vvTMA-_SPWSdjGSQTNRLP5ZJnvEohH-mWpQGjo8_-eelJb1hYYNttyL_3DeCL1FK6wvjkPWidl-mwLlZj5qORcrYi45X3N1pgV1l_KajfNgRaCSA54J52b2DWZxesVyVOpSacQYXYnRm9_30uwfyw-4rgy5fsA2',
    title: 'Editor',
    desc: 'Documentary Film - San Francisco, CA'
  }]
}
