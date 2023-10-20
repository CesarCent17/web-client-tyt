import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-select-generic',
  templateUrl: './select-generic.component.html',
  styleUrls: ['./select-generic.component.sass']
})
export class SelectGenericComponent {
  @Input() label: string = '';
  @Input() options: { value: any; viewValue: string }[] = [];
}
