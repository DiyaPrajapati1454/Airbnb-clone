import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LightboxComponent } from '../lightbox/lightbox.component';

interface PhotoCategory {
  id: string;
  name: string;
  images: string[];
}

@Component({
  selector: 'app-photo-tour',
  standalone: true,
  imports: [CommonModule, RouterLink, LightboxComponent],
  templateUrl: './photo-tour.component.html',
  styleUrl: './photo-tour.component.css'
})
export class PhotoTour {

  photoCategories: PhotoCategory[] = [

    {
      id: 'living-room',
      name: 'Living Room',
      images: [
        'assets/images/photo-tour/living-room-1.jpg',
        'assets/images/photo-tour/living-room-2.jpg',
        'assets/images/photo-tour/living-room-3.jpg'
      ]
    },

    {
      id: 'bedroom',
      name: 'Bedroom',
      images: [
        'assets/images/photo-tour/bedroom-1.jpg',
        'assets/images/photo-tour/bedroom-2.jpg',
        'assets/images/photo-tour/bedroom-3.jpg'
      ]
    },

    {
      id: 'kitchen',
      name: 'Kitchen',
      images: [
        'assets/images/photo-tour/kitchen-1.jpg',
        'assets/images/photo-tour/kitchen-2.jpg',
        'assets/images/photo-tour/kitchen-3.jpg'
      ]
    },

    {
      id: 'hall',
      name: 'Hall',
      images: [
        'assets/images/photo-tour/hall-1.jpg',
        'assets/images/photo-tour/hall-2.jpg'
      ]
    },

    {
      id: 'drawing-room',
      name: 'Drawing Room',
      images: [
        'assets/images/photo-tour/drawing-room-1.jpg',
        'assets/images/photo-tour/drawing-room-2.jpg'
      ]
    },

    {
      id: 'bathroom',
      name: 'Bathroom',
      images: [
        'assets/images/photo-tour/bathroom-1.jpg',
        'assets/images/photo-tour/bathroom-2.jpg'
      ]
    },

    {
      id: 'exterior',
      name: 'Exterior',
      images: [
        'assets/images/photo-tour/exterior-1.jpg',
        'assets/images/photo-tour/exterior-2.jpg'
      ]
    }

  ];


  // Lightbox state
  isLightboxOpen = false;

  selectedPhotoIndex = 0;


  // Combine photos from all categories
  get allPhotos(): string[] {
    return this.photoCategories.flatMap(
      category => category.images
    );
  }


  // Open Lightbox
  openLightbox(photo: string): void {

    const index = this.allPhotos.indexOf(photo);

    if (index !== -1) {

      this.selectedPhotoIndex = index;

      this.isLightboxOpen = true;

    }

  }


  // Close Lightbox
  closeLightbox(): void {

    this.isLightboxOpen = false;

  }


  // Scroll to category
  scrollToCategory(categoryId: string): void {

    const element = document.getElementById(categoryId);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

  }

}