import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [MatListModule, MatButtonModule, MatCheckboxModule],
  exports: [MatListModule, MatButtonModule, MatCheckboxModule],
})
export class MaterialModule {}
