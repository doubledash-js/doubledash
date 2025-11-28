import animation from '../animate';

export default function shrink(element, options = {}) {
    return animation(element, 'shrink', options);
}
