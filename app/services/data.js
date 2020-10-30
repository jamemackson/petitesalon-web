import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { computed } from '@ember/object';
import fetch from 'fetch';

function arrayMove(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
}

export default class DataService extends Service {
  @tracked artists = undefined;

  @computed('artists')
  get minneapolisArtists() {
    const data = this.artists.filter((a) => a.locations.includes('minneapolis'));
    // calling arrayMove here to move haley into the first position (0) for minneapolis
    return arrayMove(data, 0, 1);
  }

  @computed('artists')
  get stpaulArtists() {
    return this.artists.filter((a) => a.locations.includes('saint-paul'));
  }

  async getLocationArtists(name) {
    if (!this.artists) await this.getArtists();
    if (['stpaul', 'stp'].includes(name)) return this.stpaulArtists;
    if (['minneapolis', 'mpls'].includes(name)) return this.minneapolisArtists;
    throw new Error('location unknown: ', name);
  }

  async getArtist(slug) {
    if (!this.artists) await this.getArtists();
    const artists = this.artists.filter((a) => a.slug === slug);
    if (!artists || !Array.isArray(artists) || artists.length != 1) {
      // throw new Error('artist not found.');
      console.error('no artist found for ', slug);
      return undefined;
    }
    return artists[0];
  }

  @action async getArtists() {
    if (this.artists) return this.artists;
    const resp = await fetch('/artists.json');
    if (resp.ok) {
      this.artists = await resp.json();
      return this.artists;
    } else {
      return {
        error: 'no data returned'
      };
    }
  }
}
