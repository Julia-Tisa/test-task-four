import React from 'react';
import { useTranslation } from 'react-i18next';

function IntlMessage({ id, fallback }) {
  const { t } = useTranslation();

  const translate = t(id, fallback);

  return <span>{translate}</span>;
}

export default IntlMessage;
