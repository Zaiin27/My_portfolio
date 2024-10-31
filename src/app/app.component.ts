// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { AboutComponent } from "./MyComponents/about/about.component";
// import { ContactComponent } from "./MyComponents/contact/contact.component";
// import { ProjectsComponent } from "./MyComponents/projects/projects.component";
// import { NavbarComponent } from "./MyComponents/navbar/navbar.component";
// import { HomeComponent } from './MyComponents/home/home.component';
// import { FormsModule } from '@angular/forms'; // Import FormsModule here

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   standalone: true,
//   imports: [RouterOutlet,AboutComponent,ContactComponent,ProjectsComponent,NavbarComponent,HomeComponent,FormsModule ]
// })
// export class AppComponent {
//   title = 'portfolio';
// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./MyComponents/about/about.component";
import { ProjectsComponent } from "./MyComponents/projects/projects.component";
import { NavbarComponent } from "./MyComponents/navbar/navbar.component";
import { ContactComponent } from "./MyComponents/contact/contact.component";
import { HomeComponent } from './MyComponents/home/home.component';
import { FooterComponent } from "./MyComponents/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    AboutComponent,
    ProjectsComponent,
    NavbarComponent,
    HomeComponent // Only include components here
    ,
    ContactComponent,
    FooterComponent
]
})
export class AppComponent {
  title = 'portfolio';
}
