import {Fields} from './fields.model';

export class Forms {
  id: string;
  _id?: string;
  name: string;
  submissions = [];
  fields: Fields[] = [];
}
