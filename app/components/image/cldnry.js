import Component from '@glimmer/component';

const basePath = 'https://res.cloudinary.com/petite/image/upload/f_auto/fl_lossy/q_auto:eco';

export default class ImageCldnryComponent extends Component {
  get path() {
    let width = this.args.width;
    let base = basePath;
    if (width && width > 0) {
      base += `/w_${width}`;
    }
    if (this.args.modifiers) {
      base += `/${this.args.modifiers}`;
    }
    return `${base}/${this.args.src}`;
  }
}
