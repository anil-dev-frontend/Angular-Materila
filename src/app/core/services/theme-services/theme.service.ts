import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private allThemes = ['theme-rose-red', 'theme-azure-blue', 'theme-magenta-violet', 'theme-cyan-orange'];

  setTheme(themeClass: string) {
    if (isPlatformBrowser(this.platformId)) {
      const body = document.body;
      // Purani sabhi themes remove karo
      body.classList.remove(...this.allThemes);
      // Nayi theme add karo
      body.classList.add(themeClass);
      localStorage.setItem('theme', themeClass);
    }
  }

  loadTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') || 'theme-azure-blue'; // Default theme
      this.setTheme(savedTheme);
    }
  }
}