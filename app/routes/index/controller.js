import Controller from '@ember/controller';

export default class IndexController extends Controller {
  baseUrl = 'https://via.placeholder.com/900x500';
  items = [
    {
      image: `${this.baseUrl}`,
      title: 'welcome to petite salon!',
      link: {
        text: 'book an appointment today',
        url: '#book-now', // trigger standard a link to this url
        route: undefined, // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    },
    {
      image: `${this.baseUrl}/white`,
      title: 'shop the store @ petite!',
      link: {
        text: 'shop online now',
        url: 'https://shop.petitesalon.com', // trigger standard a link to this url
        route: undefined, // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    },
    {
      image: `${this.baseUrl}/FFFF00/000000`,
      title: 'Visit us in St Paul',
      link: {
        text: 'more info',
        url: undefined, // trigger standard a link to this url
        route: 'saint-paul', // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    },
    {
      image: `${this.baseUrl}/FFFF00/000000`,
      title: 'Visit us in Minneapolis',
      link: {
        text: 'more info',
        url: undefined, // trigger standard a link to this url
        route: 'minneapolis', // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    }
  ];
}
