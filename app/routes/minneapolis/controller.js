import Controller from '@ember/controller';

export default class MinneapolisController extends Controller {
  queryParams = ['pane'];
  pane = 0;
  lat = 44.915669;
  lng = -93.277889;
  zoom = 17;
  location = [44.915669, -93.277889];
  baseUrl = 'https://via.placeholder.com/900x500';

  items = [
    {
      image: `${this.baseUrl}`,
      title: 'Petite Minneapolis!',
      link: {
        text: 'book an appointment today',
        url: '#book-now', // trigger standard a link to this url
        route: undefined, // trigger a ember transition to this route
        model: undefined // optional model to pass to link to transition
      }
    }
  ];

  team = [
    { name: 'haley', title: 'owner | stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/haley.jpg' },
    { name: 'brandy', title: 'owner | stylist', image: '//cdn.petitesalon.com/img/petite/team/Brandy-270.png' },
    { name: 'jessica', title: 'stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/jessica.jpg' },
    { name: 'erin gonsier', title: 'stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/erin-gonsier.jpg' },
    { name: 'emily', title: 'stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/emily.jpg' },
    { name: 'heidi', title: 'stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/heidi.jpg' },
    { name: 'nicole', title: 'stylist', image: '//cdn.petitesalon.com/img/petite/team/201903/nicole.jpg' },
    { name: 'lindsey', title: 'stylist', image: '//cdn.petitesalon.com/images/female-silhouette.png' },
    { name: 'lauren', title: 'stylist', image: '//cdn.petitesalon.com/images/female-silhouette.png' },
    { name: 'atty', title: 'stylist', image: '//cdn.petitesalon.com/images/female-silhouette.png' },
    { name: 'haley c', title: 'stylist', image: '//cdn.petitesalon.com/images/female-silhouette.png' },
    { name: 'minjo', title: 'stylist', image: '//cdn.petitesalon.com/images/female-silhouette.png' }
  ];

  // brandy	//cdn.petitesalon.com/images/female-silhouette.png
  // haley	//cdn.petitesalon.com/img/petite/team/201903/haley.jpg
  // heidi	//cdn.petitesalon.com/img/petite/team/201903/heidi.jpg
  // allison	//cdn.petitesalon.com/img/petite/team/201903/allison.jpg
  // tony	//cdn.petitesalon.com/img/petite/team/201903/tony.jpg
  // ann	//cdn.petitesalon.com/images/female-silhouette.png
  // marne	//cdn.petitesalon.com/img/petite/team/201903/marne.jpg
  // noelle	//cdn.petitesalon.com/img/petite/team/201903/noelle.jpg
  // erin gilmore	//cdn.petitesalon.com/images/female-silhouette.png
  // sarah	//cdn.petitesalon.com/images/female-silhouette.png
  // sue	//cdn.petitesalon.com/img/petite/team/201903/sue.jpg
  // atty	//cdn.petitesalon.com/images/female-silhouette.png
  // lori	//cdn.petitesalon.com/img/petite/team/201903/lori.jpg
  // angela	//cdn.petitesalon.com/img/petite/team/201903/angela.jpg
  // lindsey gaudet	//cdn.petitesalon.com/images/female-silhouette.png
  // jessica	//cdn.petitesalon.com/img/petite/team/201903/jessica.jpg
  // erin gonsior	//cdn.petitesalon.com/img/petite/team/201903/erin-gonsier.jpg
  // emily	//cdn.petitesalon.com/img/petite/team/201903/emily.jpg
  // nicole	//cdn.petitesalon.com/img/petite/team/201903/nicole.jpg
  // lauren	//cdn.petitesalon.com/images/female-silhouette.png
}
