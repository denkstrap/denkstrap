import ExampleModule from './example-module';

let timer = 1050;

export default class ExampleModule2 extends ExampleModule {

    paint() {
        return new Promise( resolve => {
            this.$element.style.color = 'blue';

            setTimeout( () => {
                resolve( 'example-module' );
            }, timer += 50 );
        } );
    }

}
