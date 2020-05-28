import { Interaction, UsesAbilities } from '@serenity-js/core';

import { BrowseTheWeb } from '../abilities/BrowseTheWeb';
import { formatted } from '@serenity-js/core/lib/io';

export class Click extends Interaction {
  public static on(selector: string): Click {
    return new Click(selector);
  }

  performAs(actor: UsesAbilities): PromiseLike<void> {
    return new Cypress.Promise((resolve, reject) => {
      BrowseTheWeb.as(actor)
        .get(this.selector)
        .click()
        .then(() => resolve());
    });
  }

  constructor(private selector: string) {
    super();
  }

  toString = (): string => {
    return formatted`#actor clicks on ${this.selector}`;
  };
}
