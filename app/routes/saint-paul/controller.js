import Controller from '@ember/controller';

export default class SaintPaulController extends Controller {
  queryParams = ['pane'];
  pane = 0;
  lat = 44.9343425;
  lng = -93.1592038;
  zoom = 16;
  location = [44.9343425, -93.1592038];
  baseUrl = 'https://via.placeholder.com/900x500';

  items = [
    {
      image: `${this.baseUrl}`,
      title: 'welcome to saint Paul petite!',
      link: {
        text: 'book an appointment today',
        url: '#book-now', // trigger standard a link to this url
        route: undefined, // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    }
  ];

  team = [
    { name: 'brandy', title: 'owner | stylist', image: '//cdn.petitesalon.com/img/petite/team/Brandy-270.png' },
    { name: 'haley', title: 'owner | stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/haley.jpg' },
    { name: 'allison', title: 'stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/allison.jpg' },
    { name: 'marne', title: 'stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/marne.jpg' },
    { name: 'tony', title: 'stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/tony.jpg' },
    { name: 'angela', title: 'stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/angela.jpg' },
    { name: 'noelle', title: 'stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/noelle.jpg' },
    { name: 'sue', title: 'stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/sue.jpg' },
    { name: 'lori', title: 'stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/lori.jpg' },
    { name: 'ann', title: 'stylist', image: '//cdn.petitesalon.com/images/female-silhouette.png' },
    { name: 'erin gilmore', title: 'stylist', image: '//cdn.petitesalon.com/images/female-silhouette.png' },
    { name: 'sarah', title: 'stylist', image: '//cdn.petitesalon.com/images/female-silhouette.png' }
  ];
}
