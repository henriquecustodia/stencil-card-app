import { Component } from '@stencil/core'

@Component({
    tag: 'st-card-header',
    styleUrl: 'card-header.scss'
})
export class CardHeader {

    render() {
        return (
            <div class="st-card-header">
                <slot />
            </div>
        );
    }

}