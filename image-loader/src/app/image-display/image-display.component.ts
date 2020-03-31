import { Component, OnInit } from '@angular/core';
import { ImageLoaderService } from '../image-loader.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  images: any[];
  loading: boolean = true;
  success: boolean = false;
  constructor(private imageLoaderService: ImageLoaderService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.imageLoaderService.getImages().subscribe((data: any) => {
      this.images = data;
      this.loading = false;
      this.success = true;
    }, (error: any) => {
      this.loading = false;
      console.log(error);
    });
  }

  getImagePath(imageBase64: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpg;base64, ${imageBase64}`);
  }
}
