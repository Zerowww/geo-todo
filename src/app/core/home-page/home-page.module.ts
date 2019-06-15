import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';

import {HomePageComponent} from './home-page.component';
import {HomePageRoutingModule} from './home-page.routing';

@NgModule({
  declarations: [HomePageComponent],
  imports: [SharedModule, HomePageRoutingModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
