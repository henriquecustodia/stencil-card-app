import { Component } from '@stencil/core'

@Component({
    tag: 'st-card-content',
    styleUrl: 'card-content.scss'
})
export class CardContent {

    render() {
        return (
            <div class="st-card-content">
                <slot />
            </div>
        );
    }

}