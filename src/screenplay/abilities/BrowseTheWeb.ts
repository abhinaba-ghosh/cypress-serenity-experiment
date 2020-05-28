import { Ability, UsesAbilities } from '@serenity-js/core/lib/screenplay';

export class BrowseTheWeb implements Ability {
  /**
   *
   * Instantiates the Ability to BrowseTheWeb, allowing the Actor to interact with a Web UI
   *
   * @param browser
   * @return {BrowseTheWeb}
   */
  static usingCypress() {
    return new BrowseTheWeb();
  }

  /**
   * Used to access the Actor's ability to BrowseTheWeb from within the Interaction classes, such as Click or Enter
   *
   * @param actor
   * @return {BrowseTheWeb}
   */
  static as(actor: UsesAbilities): BrowseTheWeb {
    return actor.abilityTo(BrowseTheWeb);
  }

  visit(url: string): PromiseLike<void> {
    return new Promise((resolve) => {
      cy.visit(url).then(() => resolve());
    });
  }

  get(locator: string): Cypress.Chainable {
    return cy.contains(locator);
  }

  constructor() {}
}
