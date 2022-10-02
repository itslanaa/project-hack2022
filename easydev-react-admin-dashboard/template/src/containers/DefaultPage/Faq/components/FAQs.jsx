import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Collapse from '@/shared/components/Collapse';

const data = [
  {
    id: 1,
    title: 'How I can manage my account?',
    text: `Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. 
    Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. 
    Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. 
    Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.`,
  },
  {
    id: 2,
    title: 'How much a annual subscribe costs?',
    text: `Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. 
    Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. 
    Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. 
    Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.`,
  },
  {
    id: 3,
    title: 'How to modify Admin Template UI?',
    text: `Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. 
    Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. 
    Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. 
    Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.`,
  },
  {
    id: 4,
    title: 'How to get support? How often can I get technical consultations?',
    text: `Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. 
    Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. 
    Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. 
    Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.`,
  },

];

const FAQs = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        {data.map(({ id, title, text }) => (
          <Collapse key={id} className="with-shadow" title={title}>
            <p>{text}</p>
          </Collapse>
        ))}
      </CardBody>
    </Card>
  </Col>
);

export default FAQs;
