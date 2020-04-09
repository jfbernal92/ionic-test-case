import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { HumanName } from '../interfaces/human-name.interface';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

const NO_NAME = 'No name information available';

@Pipe({ name: 'patientName' })
export class PatientNamePipe implements PipeTransform {
    transform(nameArray: HumanName | Array<HumanName>): string {
        if (!nameArray) {
            return NO_NAME;
        }

        if (!Array.isArray(nameArray)) {
            return this.getName(nameArray);
        }

        let nameLabel = '';
        nameArray.forEach(n => {
            nameLabel = nameLabel.concat(nameLabel, this.getName(n));
        })
        return nameLabel;
    }

    /**
     * Generate a 'one line' name
     * @param name 
     */
    private getName(name: HumanName) {
        let nameLabel = '';
        if (name.text) {
            nameLabel = nameLabel.concat(name.text, '- ')
        } else {
            if (name.prefix) {
                name.prefix.forEach(p => nameLabel = nameLabel.concat(`${p} `))
            }
            if (name.family) {
                nameLabel = nameLabel.concat(name.family, ', ')
            }
            if (name.given) {
                name.given.forEach(g => nameLabel = nameLabel.concat(`${g} `))
            }
            nameLabel = nameLabel.concat('- ')
        }
        return nameLabel.substring(0, nameLabel.length - 2);
    }
}

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
    ],
    declarations: [PatientNamePipe],
    exports: [PatientNamePipe]
})
export class PatientNamePipeModule { }
