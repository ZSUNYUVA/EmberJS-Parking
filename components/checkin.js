import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class CheckinComponent extends Component {
  @service store;

  @action
  allot() {
    this.store
      .createRecord('checkin', {
        vno: $('#vno').val(),
        vtype: $('#vtype').val(),
        floor: $('#floor').val(),
        rackno: $('#rackno').val(),
        date: $('#day').val(),
        time: $('#times').val(),
      })
      .save();
  }
}
