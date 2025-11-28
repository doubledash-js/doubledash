import animation from '../animate';

export default function wiggle(element, options = {}) {
    return animation(element, 'wiggle', options);
}
