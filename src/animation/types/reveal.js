import animation from '../animate';

export default function reveal(element, options = {}) {
    return animation(element, 'reveal', options);
}
