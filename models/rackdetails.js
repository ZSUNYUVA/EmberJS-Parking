import Model, { attr } from '@ember-data/model';

export default class RackdetailsModel extends Model {
  @attr floor;
  @attr rackno;
}
