import { Component } from '@stencil/core'

@Component({
    tag: 'st-card-bottom',
    styleUrl: 'card-bottom.scss'
})
export class CardBottom {

    render() {
        return (
            <div class="st-card-bottom">
                <slot />
            </div>
        );
    }

}