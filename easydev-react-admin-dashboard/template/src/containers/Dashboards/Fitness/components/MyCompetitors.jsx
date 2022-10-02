import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Panel from '@/shared/components/Panel';

const Ava1 = `${process.env.PUBLIC_URL}/img/11.png`;
const Ava2 = `${process.env.PUBLIC_URL}/img/12.png`;
const Ava3 = `${process.env.PUBLIC_URL}/img/14.png`;
const Ava4 = `${process.env.PUBLIC_URL}/img/15.png`;
const Ava5 = `${process.env.PUBLIC_URL}/img/photo_notification.png`;
const Ava6 = `${process.env.PUBLIC_URL}/img/ava.png`;

const data = [
  {
    id: 0, name: 'Peter Jackson', result: '12,254 km', ava: Ava1,
  }, {
    id: 1, name: 'Lora Melbourn', result: '11,224 km', ava: Ava2,
  }, {
    id: 2, name: 'Cat Mew', result: '9,921 km', ava: Ava3,
  }, {
    id: 3, name: 'Liza Orly', result: '7,875 km', ava: Ava4,
  }, {
    id: 4, name: 'Michael Bro', result: '6,154 km', ava: Ava5,
  }, {
    id: 5, name: 'Charlie Sunset', result: '6,154 km', ava: Ava6,
  },
];

const MyCompetitors = () => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={5} xl={3} md={12} xs={12} title={t('fitness_dashboard.my_competitors')}>
      {data.map(item => (
        <Link key={item.id} className="dashboard__competitor" to="/account/profile">
          <div className="dashboard__competitor-img">
            <img src={item.ava} alt="" />
          </div>
          <div className="dashboard__competitor-info">
            <p className="dashboard__competitor-name">{item.name}</p>
            <p className="dashboard__competitor-result">{item.result}</p>
          </div>
        </Link>
      ))}
    </Panel>
  );
};

export default MyCompetitors;
