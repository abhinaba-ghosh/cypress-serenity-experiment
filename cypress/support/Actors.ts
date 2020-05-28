import { Actor } from '@serenity-js/core/lib/screenplay';
import { Cast } from '@serenity-js/core/lib/stage';
import { BrowseTheWeb } from '../../src/screenplay';

export class Actors implements Cast {
  prepare(actor: Actor): Actor {
    return actor.whoCan(BrowseTheWeb.usingCypress());
  }
}
