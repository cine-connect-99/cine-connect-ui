import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  templateUrl: './job-listing.html',
  styleUrl: './job-listing.scss'
})
export class JobListing {
  @Input() imageUrl = '';
  @Input() title = '';
  @Input() desc = '';
}
