// Airbnb JavaScript Style
import '../assets/styles/index.scss';
import SRAX from './lib/srax';

const win = window;
const casa = 'addfas';
console.log(SRAX.getName);
/**
 * Shorthand for $(document).ready()
 */
$(() => {
    const hola = () => casa;
    hola();
    const casita = function casita() {
        return 'jelow';
    };
    $('.col-sm.col-lg-6').text(SRAX.lukeSkywalker);

    /**
     * On Windows Resize Event
     */
    $(win).resize(() => {
        //
    });
    casita();
});
