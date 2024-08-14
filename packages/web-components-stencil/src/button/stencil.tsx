/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'bzk-button',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Button {
  render() {
    return (
      <button class="bzk-button" type="button">
        <span class="bzk-button__text">
          <slot></slot>
        </span>
      </button>
    );
  }
}
