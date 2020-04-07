import { Pipe, PipeTransform } from '@angular/core';
import { HumanName } from '../interfaces/human-name.interface';

const NO_NAME = 'No name information available';

@Pipe({name: 'patientName'})
export class PatientNamePipe implements PipeTransform {
  transform(nameArray: Array<HumanName>): string {      
      if(!nameArray || !Array.isArray(nameArray) || nameArray.length === 0) {
          return NO_NAME;
      }

      let nameLabel = '';
      nameArray.forEach(n => {
        if (n.text) {
            nameLabel = nameLabel.concat(n.text, '- ')
        } else {
            if (n.prefix) {
                n.prefix.forEach(p => nameLabel = nameLabel.concat(`${p} `))
            }
            if(n.family) {
                nameLabel = nameLabel.concat(n.family, ', ' )
            }
            if(n.given) {
                n.given.forEach(g =>  nameLabel = nameLabel.concat(`${g} `))
            }
            nameLabel = nameLabel.concat('- ')
        }
      })
      return nameLabel.substring(0, nameLabel.length - 2);
  }
}