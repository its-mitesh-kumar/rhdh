// packages/app/src/translations/userSettings-zh.ts

import { createTranslationMessages } from '@backstage/core-plugin-api/alpha';
import {scaffolderTranslationRef  } from '@backstage/plugin-scaffolder/alpha';

const zh = createTranslationMessages({
  ref: scaffolderTranslationRef,
  full: false, // False means that this is a partial translation
  messages: {
   'templateListPage.contentHeader.registerExistingButtonTitle': '🔥 My Custom Register Button Title 🔥', 
  },
});

export default zh;