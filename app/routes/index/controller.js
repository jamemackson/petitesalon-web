import Controller from '@ember/controller';

export default class IndexController extends Controller {
  baseUrl = 'https://res.cloudinary.com/petite/image/upload/f_auto/fl_lossy/q_auto:eco/w_900';
  items = [
    // {
    //   image: 'features/blvd',
    //   title: 'new online booking system is LIVE',
    //   content: `
    //     <p>We have a brand new booking system powered by boulevard!</p>
    //   `,
    //   link: {
    //     text: 'Give it a try and book an appointment now.',
    //     url: '#book-now',
    //     route: undefined,
    //     model: undefined
    //   }
    // },
    {
      image: `features/contactless-pickup-available.png`,
      title: 'welcome to petite salon!',
      content: `
        <p>Contactless pickup is available Monday through Saturday.</p>
        <p>Call ahead to order, then again when youre outside snd well bring it out!</p>
      `,
      link: {
        text: 'call us now',
        url: 'tel:6516994959', // trigger standard a link to this url
        route: undefined, // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    },
    {
      image: `features/petite-saint-paul-aged-front-door.png`,
      title: 'Visit us in St Paul',
      content: `
        <h2>Visit us in St. Paul</h2>
        <p>Located in the heart of the mac/groveland neighborhood.</p>
        <p>Petite Saint Paul is open Monday through Saturday.</p>
        <p>Call <a href="tel:6516994959">(651) 699 - 4959</a> to book over the phone, or click below to book online.</p>
        <p><a class="button" href="#book-now">BOOK ONLINE</a></p>
      `,
      link: {
        text: 'meet the artists',
        url: undefined, // trigger standard a link to this url
        route: 'saint-paul', // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    },
    {
      image: `features/petite-minneapolis-product-wall.jpg`,
      title: 'Visit us in Minneapolis',
      content: `
        <h2>Visit us in Minneapolis</h2>
        <p>Located in the tangletown neighborhood.</p>
        <p>Petite Minneapolis is open Monday through Saturday.</p>
        <p>Call <a href="tel:6516994959">(651) 699 - 4959</a> to book over the phone, or click below to book online.</p>
        <p><a class="button" href="#book-now">BOOK ONLINE</a></p>
      `,
      link: {
        text: 'meet the artists',
        url: undefined, // trigger standard a link to this url
        route: 'minneapolis', // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    }
    // {
    //   image: `features/feature-product-bowl-randco-davines-panache.jpg`,
    //   title: 'shop the store @ petite!',
    //   content: `
    //     <p>Contactless pickup is available Monday through Saturday.</p>
    //     <p>Call ahead or when your outside!</p>
    //   `,
    //   link: {
    //     text: 'shop online now',
    //     url: 'https://petiteshops.com', // trigger standard a link to this url
    //     route: undefined, // trigger a ember transition to this route
    //     model: undefined // optional model to pass to link to transition
    //   }
    // }
  ];
}
