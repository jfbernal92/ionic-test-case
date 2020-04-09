import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { CodeableConcept } from '../interfaces/codeable-concept.interface';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Pipe({ name: 'codeable' })
export class CodeablePipe implements PipeTransform {

  transform(codeable: CodeableConcept): string {
    let codeableLabel = '';
    if (codeable) {
      if (codeable.text) {
        codeableLabel = codeableLabel.concat(codeableLabel, `${codeable.text} `);
      } else {
        codeable.coding.forEach(cod => {
          codeableLabel = codeableLabel.concat(codeableLabel, cod.display ? `${cod.display} ` : `${cod.code} `);
        });
      }
    }

    return codeableLabel;
  }
}


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [CodeablePipe],
  exports: [CodeablePipe]
})
export class CodeablePipeModule { }
