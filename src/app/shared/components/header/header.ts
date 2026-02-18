import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme-services/theme.service';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
 private themeService = inject(ThemeService);

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
}
