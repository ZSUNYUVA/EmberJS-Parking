import Model, { attr } from '@ember-data/model';

export default class CheckinModel extends Model {
  @attr vno;
  @attr vtype;
  @attr floor;
  @attr rackno;
  @attr date;
  @attr time;
}
