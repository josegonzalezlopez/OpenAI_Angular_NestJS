import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './orthographyPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrthographyPageComponent { }
