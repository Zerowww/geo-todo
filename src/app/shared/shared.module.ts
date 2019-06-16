import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {MaterialModule} from './material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, RouterModule],
  exports: [CommonModule, MaterialModule, FormsModule, RouterModule],
})
export class SharedModule {}
