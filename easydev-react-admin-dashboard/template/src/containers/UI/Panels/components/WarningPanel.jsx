import React from 'react';
import { useTranslation } from 'react-i18next';
import Panel from '@/shared/components/Panel';

const WarningPanel = () => {
  const { t } = useTranslation('common');

  return (
    <Panel xs={12} md={12} lg={6} color="warning" title={t('ui_elements.panels.warning_panel')}>
      <p className="typography-message">
        Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered
        had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure
        education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly.
      </p>
    </Panel>
  );
};

export default WarningPanel;
