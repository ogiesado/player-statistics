import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main><h1>FPL Stats</h1></main>
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'FPL Stats';
}
