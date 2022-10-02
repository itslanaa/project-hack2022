import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Progress } from 'reactstrap';
import Panel from '@/shared/components/Panel';

const social = [
  { id: 0, progress: 87, social: 'Twitter' },
  { id: 1, progress: 65, social: 'Facebook' },
  { id: 2, progress: 92, social: 'VK' },
  { id: 3, progress: 81, social: 'Instagram' },
  { id: 4, progress: 81, social: 'Linkedin' },
];

const SocialScore = ({ children, progress }) => (
  <div className="dashboard__social-stat-item">
    <div className="dashboard__social-stat-title">
      {children}
    </div>
    <div className="dashboard__social-stat-progress progress--wide">
      <div className="progress-wrap progress-wrap--small progress-wrap--blue-gradient progress-wrap--rounded">
        <p className="progress__label">{progress}%</p>
        <Progress value={progress} />
      </div>
    </div>
  </div>
);

SocialScore.propTypes = {
  progress: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

const SocialMarketing = () => {
  const { t } = useTranslation('common');

  return (
    <Panel
      md={12}
      lg={6}
      xl={3}
      xs={12}
      title={t('app_dashboard.social_marketing_mobile')}
      subhead="Comes from social networks"
    >
      <div className="dashboard__social-marketing">
        <div className="dashboard__social-stat">
          {social.map(item => (
            <SocialScore key={item.id} progress={item.progress}>
              {item.social}
            </SocialScore>
          ))}
        </div>
      </div>
    </Panel>
  );
};

export default SocialMarketing;
