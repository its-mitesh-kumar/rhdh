// packages/app/src/translations/userSettings.ts

import { createTranslationResource } from '@backstage/core-plugin-api/alpha';
import {scaffolderTranslationRef  } from '@backstage/plugin-scaffolder/alpha';

export const userSettingsTranslations = createTranslationResource({
  ref: scaffolderTranslationRef,
  translations: {
    en: () => import('./userSettings-en'),
  },
});