import animation from '../animate';

export default function flip(element, options = {}) {
    return animation(element, 'flip', options);
}
