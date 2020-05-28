import { Interaction, UsesAbilities } from '@serenity-js/core';

import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class Visit extends Interaction {
  static browserOn = (website: string) => new Visit(website);

  performAs(actor: UsesAbilities): PromiseLike<void> {
    return BrowseTheWeb.as(actor).visit(this.targetWebsite);
  }

  constructor(private targetWebsite: string) {
    super();
  }

  toString = () => `#actor opens the browser at "${this.targetWebsite}"`;
}
