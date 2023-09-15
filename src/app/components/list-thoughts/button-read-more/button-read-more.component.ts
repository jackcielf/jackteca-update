import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-read-more',
  templateUrl: './button-read-more.component.html',
  styleUrls: ['./button-read-more.component.css']
})
export class ButtonReadMoreComponent {
  @Input() haMoreThoughts = false;


}
