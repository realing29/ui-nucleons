import { getOriginCorrection } from '../with-tooltip/utils';

const SPACE = 4;

export const PlaceAt = {
  commons: (hint: HTMLDivElement, opener: HTMLElement) => [
    hint.getBoundingClientRect(),
    opener.getBoundingClientRect(),
    getOriginCorrection(hint),
  ] as const,

  top: (hint: HTMLDivElement, opener: HTMLElement) => {
    const [hintRect, openerRect, correct] = PlaceAt.commons(hint, opener);

    hint.style.left = `${correct.x + openerRect.left + (openerRect.width / 2) - (hintRect.width / 2)}px`;
    hint.style.top = `${correct.y - SPACE + openerRect.top - hintRect.height}px`;
  },

  right: (hint: HTMLDivElement, opener: HTMLElement) => {
    const [hintRect, openerRect, correct] = PlaceAt.commons(hint, opener);

    hint.style.left = `${correct.x + SPACE + openerRect.right}px`;
    hint.style.top = `${correct.y + openerRect.top + (openerRect.height / 2) - (hintRect.height / 2)}px`;
  },

  bottom: (hint: HTMLDivElement, opener: HTMLElement) => {
    const [hintRect, openerRect, correct] = PlaceAt.commons(hint, opener);

    hint.style.left = `${correct.x + openerRect.left + (openerRect.width / 2) - (hintRect.width / 2)}px`;
    hint.style.top = `${correct.y + SPACE + openerRect.bottom}px`;
  },

  left: (hint: HTMLDivElement, opener: HTMLElement) => {
    const [hintRect, openerRect, correct] = PlaceAt.commons(hint, opener);

    hint.style.left = `${correct.x - SPACE + openerRect.left - hintRect.width}px`;
    hint.style.top = `${correct.y + openerRect.top + (openerRect.height / 2) - (hintRect.height / 2)}px`;
  },
};
