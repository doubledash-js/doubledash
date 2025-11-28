import animation from '../animate';

export default function grow(element, options = {}) {
    return animation(element, 'grow', options);
}
