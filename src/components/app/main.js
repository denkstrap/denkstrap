// import { Denkstrap } from '@denkstrap/core';
import { Denkstrap } from '@denkstrap/core/dist/esnext/denkstrap';


let conditionCounter = 0;

export const denkstrap = new Denkstrap({
    expose: true,
    context: document.querySelector( '.component-wrapper' ),
    conditions: {
        // Custom Conditions goes here
        onCall: function( load, element ) {

            window.loadMe = {
                ...window.loadMe,
                [ 'c' + conditionCounter++ ]: load
            };
            console.log( 'element', element, window.loadMe );
            window.loadMe.c0();
        }
    }
});

denkstrap.loader.promise.then(
    () => console.log( 'Loader: complete!' )
);
