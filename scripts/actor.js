import { rollDice } from './dice.js';

export class ImperatorActor extends Actor {
  prepareData() {
    super.prepareData();
    const data = this.system;
    data.characteristics = data.characteristics || {
      corpus: 1,
      charisma: 1,
      sensus: 1,
      spiritus: 1
    };
    data.hp = 5 + 2 * (data.characteristics.corpus || 1);
  }
}

Hooks.once('init', () => {
  CONFIG.Actor.documentClass = ImperatorActor;
  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('imperator', ImperatorActorSheet, { makeDefault: true });
});

export class ImperatorActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['imperator', 'sheet', 'actor'],
      template: 'templates/actor-sheet.html',
      width: 600,
      height: 400
    });
  }

  getData() {
    const data = super.getData();
    data.system.skills = data.system.skills || {};
    data.charLabels = {
      corpus: game.i18n.localize('IMPERATOR.Corpus'),
      charisma: game.i18n.localize('IMPERATOR.Charisma'),
      sensus: game.i18n.localize('IMPERATOR.Sensus'),
      spiritus: game.i18n.localize('IMPERATOR.Spiritus')
    };
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);
    html.find('button[data-action="roll"]').click(this._onRoll.bind(this));
  }

  _onRoll(event) {
    event.preventDefault();
    const skillKey = event.currentTarget.dataset.skill;
    const skill = this.actor.system.skills[skillKey] || { value: 0, char: 'corpus' };
    const characteristic = this.actor.system.characteristics[skill.char] || 0;
    const diceCount = characteristic + (skill.value || 0);
    rollDice(diceCount, 7).then(total => {
      const label = skill.label || skillKey;
      ChatMessage.create({
        user: game.user.id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        content: `${game.i18n.localize('IMPERATOR.RollResult')} <strong>${label}</strong>: ${total}`
      });
    });
  }
}
