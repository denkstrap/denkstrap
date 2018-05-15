// import { Component } from 'denkstrap-core';
import { Component } from '@denkstrap/core/dist/esm/index';

let timer = 1000;

export default class ExampleModule extends Component {

    defaults() {
        return {
            test: 'bestanden',
            hallo: 'welt'
        };
    }

    chain() {
        return [ 'paint', 'paintParent' ];
    }

    paint() {
        console.log( 'example-module' );
        return new Promise( (resolve, reject) => {
            this.$element.style.borderLeft = '10px solid red';

            setTimeout( () => {
                resolve( 'AJAX call failed' );
            }, timer += 50 );
        } );
    }

    paintParent() {
        if ( this.$parentComponent ) {
            let color = `#${Math.floor( Math.random() * 16777215 ).toString( 16 )}`;
            this.$parentComponent.$element.style.borderColor = color;
        }
    }

}
