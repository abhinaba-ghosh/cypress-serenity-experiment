import { engage, actorCalled, actorInTheSpotlight } from '@serenity-js/core';
import { Actors } from '../support';
import { clickOnButton } from '../support/screenplay/tasks/clickButton';

describe('Interaction flow', () => {
  beforeEach(() => engage(new Actors()));

  it('enables the actor to interact with the website', function () {
    return actorCalled('Jasmine').attemptsTo(clickOnButton());
  });
});
