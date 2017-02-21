import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'amd-app-info',
  template: require('./app-info.component.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppInfoComponent { }
