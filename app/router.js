import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('services', function () {
    this.route('styling');
    this.route('spa');
    this.route('color');
    this.route('nails');
  });
  this.route('locations');
  this.route('saint-paul');
  this.route('minneapolis');
  this.route('contact');
  this.route('error');
  this.route('loading');
  this.route('covid-policy');
  this.route('profile', { path: ':slug' });
  this.route('retail');
});
