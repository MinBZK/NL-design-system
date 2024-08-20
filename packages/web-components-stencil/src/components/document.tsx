import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-document',
  styleUrl: 'document.scss',
  shadow: true,
})
export class Document {
  render() {
    return (
      <div class="utrecht-document">
        <slot></slot>
      </div>
    );
  }
}
