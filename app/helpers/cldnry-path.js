import { helper } from '@ember/component/helper';

const basePath = 'https://res.cloudinary.com/petite/image/upload/f_auto/fl_lossy/q_auto:eco';

export function cldnryPath(params, hash) {
  let width = hash.width;
  let base = basePath;
  if (width && width > 0) {
    base += `/w_${width}`;
  }
  if (hash.modifiers) {
    base += `/${hash.modifiers}`;
  }
  return `${base}/${hash.src}`;
}

export default helper(cldnryPath);
