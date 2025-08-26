import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner implements OnInit, OnDestroy {
  images = [
    'background/mn.jpg',
    'background/avatar.jpg',
    'background/kalki.jpg',
    'background/hit3.jpg',
  ];
  currentIndex = 0;
  currentImage = signal(this.images[0]);
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage.set(this.images[this.currentIndex]);
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}