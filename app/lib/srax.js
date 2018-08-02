/**
 * SRAX object.
 * @returns {object}
 */
const lukeSkywalker = 'Luke Skywalker';

const SRAX = {
    name: 'Hello planet',
    $element: $('.element'),
    getName() {
        return `Tu nombre es ${this.name}`;
    },
    lukeSkywalker,
};

export default SRAX;
