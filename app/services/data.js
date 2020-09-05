import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { computed } from '@ember/object';

export default class DataService extends Service {
  @tracked artists = undefined;

  @computed('artists')
  get minneapolisArtists() {
    return this.artists.filter((a) => a.locations.includes('minneapolis'));
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
    if (!artists || !Array.isArray(artists) || artists.length != 1) throw new Error('artist not found.');
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
