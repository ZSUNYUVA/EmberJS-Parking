import EmberRouter from '@ember/routing/router';
import config from 'parking/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('parking', function () {
    this.route('checkin');
    this.route('checkout');
    this.route('rackdetails');
  });
});
