import { Task } from '@serenity-js/core';
import { Click } from '../../../../src/screenplay';

export const clickOnButton = () =>
  Task.where(
    `#actor clicks the button`,

    Click.on('div.component-button-panel button')
  );
