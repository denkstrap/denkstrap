// import { Component, Event, helper } from 'denkstrap-core';
import { Component, helper } from '@denkstrap/core/dist/esm/index';
import Dispatcher  from '@denkstrap/core/dist/esm/utils/event/index';
let Event = Dispatcher;

export default class ExampleModule4 extends Component {

    ready() {
        console.log( 'ready ExampleModule4 xx' );
        console.log( 'Event', Event );
        this.$element.innerText = this.$data.component;
        this.paint();

        Event.on( 'test', () => console.log( 'test' ) );
        Event.on( 'test.test1', () => console.log( 'test.test' ) );
        Event.on( 'test.test1.test2', () => console.log( 'test.test.test' ) );

        setTimeout(() => Event.trigger( 'test' ), 0 );
        setTimeout(() => Event.trigger( 'test.test1' ), 0 );
        setTimeout(() => Event.trigger( 'test.test1.test2' ), 0 );
    }

    paint() {
        this.$element.style.textDecoration = 'underline';
    }

}
