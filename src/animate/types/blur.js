import animation from '../animate';

export default function blur(element, options = {}) {
    return animation(element, 'blur', options);
}
