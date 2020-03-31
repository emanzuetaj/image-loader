import { Component, OnInit } from '@angular/core';
import { ImageLoaderService } from '../image-loader.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  images: any[];
  constructor(private imageLoaderService: ImageLoaderService) { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.imageLoaderService.getImages().subscribe((data: any) => {
      this.images = Object.assign({}, data);
    });
  }
}
