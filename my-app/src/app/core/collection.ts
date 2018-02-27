import { Item } from '../shared/models/item.model';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Christophe gueroult',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: 'b1',
    name: 'Julien Trémot',
    reference: '5536',
    state: State.ENCOURS
  },
  {
    id: 'c1',
    name: 'Sandrine Constantine',
    reference: '7745',
    state: State.LIVREE
  }
];
