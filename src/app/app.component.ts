import { Component } from '@angular/core';
import { PostService } from './post/post.service';

import { PostModule } from './post/post.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-crud-app';
}
