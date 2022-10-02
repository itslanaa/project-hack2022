import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '@/shared/components/CodeHighlither';

const Popovers = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Popovers</h5>
      </div>
      <p>Popovers are based on
        <a href="https://reactstrap.github.io/components/popovers/Popovers.jsx"> reactstrap</a>.
        Example of using this component here:
      </p>
      <CodeHighlither>
        {`import React, { useState } from 'react';
import {
  ButtonToolbar, Button, Popover, PopoverBody, PopoverHeader,
} from 'reactstrap';

const Example = () => {
  const [isOpenedPopover, setIsOpenedPopover] = useState(false);

  const handleOpenPopover = () => {
    setIsOpenedPopover(!isOpenedPopover);
  }

  return (
    <ButtonToolbar className='btn-toolbar--center'>
      <Button id='PopoverTop' onClick={handleOpenPopover} outline>Popover on Top</Button>
      <Popover
        placement='top'
        isOpen={isOpenedPopover}
        target='PopoverTop'
        toggle={handleOpenPopover}
       >
        <PopoverHeader>Popover on Top</PopoverHeader>
        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</PopoverBody>
      </Popover>
    </ButtonToolbar>
  )
};

export default Example;`}
      </CodeHighlither>
      <p>All props <a href="https://reactstrap.github.io/components/popovers/Popovers.jsx">here</a>.</p>
      <p>Stylesheet: <b>template/src/scss/components/popover.scss</b></p>
    </CardBody>
  </Card>
);

export default Popovers;
