import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { Reference } from '../interfaces/reference.interface';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Pipe({name: 'reference'})
export class ReferencePipe implements PipeTransform {

  transform(reference: Reference): string {
    let referenceLabel = '';
    if(reference){
      return reference.display ? reference.display : reference.reference;
    }
    return referenceLabel;
  }

}

@NgModule({
  imports: [
      IonicModule,
      CommonModule,
  ],
  declarations: [ReferencePipe],
  exports: [ReferencePipe]
})
export class ReferencePipeModule { }