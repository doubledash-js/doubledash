import animation from '../animate';

export default function expand(element, options = {}) {
    return animation(element, 'expand', options);
}
