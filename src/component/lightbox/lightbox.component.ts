import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.css'
})
export class LightboxComponent {

  @Input() photos: string[] = [];
  @Input() currentIndex: number = 0;

  @Output() close = new EventEmitter<void>();

  get currentPhoto(): string {
    return this.photos[this.currentIndex];
  }

  get currentPhotoNumber(): number {
    return this.currentIndex + 1;
  }

  nextPhoto(): void {
    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex++;
    }
  }

  previousPhoto(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  closeLightbox(): void {
    this.close.emit();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent): void {

    if (event.key === 'ArrowRight') {
      this.nextPhoto();
    }

    if (event.key === 'ArrowLeft') {
      this.previousPhoto();
    }

    if (event.key === 'Escape') {
      this.closeLightbox();
    }
  }
}