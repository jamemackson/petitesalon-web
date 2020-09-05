import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { computed } from '@ember/object';

export default class LocationsController extends Controller {
  lat = 44.928884;
  lng = -93.206085;
  zoom = 12;
  stp = [44.9343425, -93.1592038];
  mpls = [44.915669, -93.277889];
  baseUrl = 'https://via.placeholder.com/900x500';
  @tracked artists;
  @tracked selectedLocation;
  @action updateLocationSelection(location) {
    this.selectedLocation = location;
  }

  @computed('artists', 'selectedLocation')
  get selectedArtists() {
    if (this.selectedLocation) {
      return this.artists.filter((a) => a.locations.includes(this.selectedLocation));
    }
    return this.artists;
  }
}
