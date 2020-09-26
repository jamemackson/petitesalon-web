import Controller from '@ember/controller';

export default class IndexController extends Controller {
  baseUrl = 'https://res.cloudinary.com/petite/image/upload/f_auto/fl_lossy/q_auto:eco/w_900';
  items = [
    {
      image: `${this.baseUrl}/features/contactless-pickup-available.png`,
      title: 'welcome to petite salon!',
      content: `
        <p>Contactless pickup is available Monday through Saturday.</p>
        <p>Call ahead or when your outside!</p>
      `,
      link: {
        text: 'book an appointment today',
        url: '#book-now', // trigger standard a link to this url
        route: undefined, // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    },
    {
      image: `${this.baseUrl}/features/feature-product-bowl-randco-davines-panache.jpg`,
      title: 'shop the store @ petite!',
      content: `
        <p>Contactless pickup is available Monday through Saturday.</p>
        <p>Call ahead or when your outside!</p>
      `,
      link: {
        text: 'shop online now',
        url: 'https://petiteshops.com', // trigger standard a link to this url
        route: undefined, // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    },
    {
      image: `${this.baseUrl}/features/petite-saint-paul-aged-front-door.png`,
      title: 'Visit us in St Paul',
      content: `
        <p>Contactless pickup is available Monday through Saturday.</p>
        <p>Call ahead or when your outside!</p>
      `,
      link: {
        text: 'more info',
        url: undefined, // trigger standard a link to this url
        route: 'saint-paul', // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    },
    {
      image: `${this.baseUrl}/features/petite-minneapolis-product-wall.png`,
      title: 'Visit us in Minneapolis',
      content: `
        <p>Contactless pickup is available Monday through Saturday.</p>
        <p>Call ahead or when your outside!</p>
      `,
      link: {
        text: 'more info',
        url: undefined, // trigger standard a link to this url
        route: 'minneapolis', // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    }
  ];
}
