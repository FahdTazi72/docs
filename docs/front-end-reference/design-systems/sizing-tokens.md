---
id: sizing-tokens
title: Sizing tokens
sidebar_position: 60
---

Contains the following tokens:

- `baseHeightMultiplier`: This value, multiplied by `designUnit`, sets the base height of most controls. Works with adaptive `density` values.
- `controlCornerRadius`: Sets the corner radius used by controls with backplates.
- `density`: An adjustment to sizing tokens like `baseHeightMultiplier`.
- `designUnit`: The unit size of the Design Grid. Used to calculate height and spacing sizes for controls.

## Usage

```js preview-story
import {
  provideDesignSystem,
  baseHeightMultiplier,
  controlCornerRadius,
  density,
  designUnit,
} from '@genesislcap/alpha-design-system';
import { FASTElement, css, html } from '@microsoft/fast-element';

provideDesignSystem();

class SizingTokensUsage extends FASTElement {
  static definition = {
    name: 'sizing-tokens-usage',
    styles: css`
      :host {
        border-radius: calc(${controlCornerRadius} * 1px);
        border: 1px solid black;
        display: inline-block;
        overflow: hidden;
      }

      .video-loading {
        padding: calc((${designUnit} + ${density}) * 3px);
        width: 320px;
        height: 180px;
      }

      .controls {
        border-top: 1px solid black;
        display: flex;
        height: calc((${baseHeightMultiplier} + ${density}) * ${designUnit} * 1px);
      }

      .play-button {
        background-color: white;
        border: 0;
        border-radius: 0;
        border-right: 1px solid black;
        padding: 0 calc((${designUnit} + ${density}) * 3px);
      }

      .play-button:hover {
        background-color: lightgrey;
      }

      .play-button:active {
        background-color: grey;
      }
    `,
    template: html`
      <div class="video-loading">Video is loading...</div>
      <div class="controls">
        <button class="play-button" aria-label="play">▶</button>
      </div>
    `,
  };
}

FASTElement.define(SizingTokensUsage);

export const usageStory = () => html`<sizing-tokens-usage></sizing-tokens-usage>`;
```

#### Sizing

- `baseHeightMultiplier`: This value, multiplied by `designUnit`, sets the base height of most controls. Works with adaptive `density` values.
- `baseHorizontalSpacingMultiplier` (future): This value, multiplied by `designUnit`, sets the internal horizontal padding of most controls. Works with adaptive `density` values.
- `controlCornerRadius`: Sets the corner radius used by controls with backplates.
- `density` (in process): An adjustment to sizing tokens `baseHeightMultiplier` and `baseHorizontalSpacingMultiplier`.
- `designUnit`: The unit size of the Design Grid. Used to calculate height and spacing sizes for controls.
