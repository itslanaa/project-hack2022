import React from 'react';
import PropTypes from 'prop-types';
import { CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

const navigationLinksData = [
  { link: 'introduction', title: 'Introduction' },
  { link: 'installation', title: 'Installation' },
  { link: 'file_structure', title: 'File Structure' },
  { link: 'components', title: 'Components' },
  { link: 'form', title: 'Form' },
  { link: 'color_themes', title: 'Color Themes' },
  { link: 'navigation_item', title: 'Navigation Item' },
  { link: 'authentication', title: 'Authentication' },
  { link: 'resources', title: 'Resources' },
  { link: 'changelog', title: 'Changelog' },
  { link: 'faq', title: 'FAQ Troubleshooting' },
];

const Navigation = ({ active }) => (
  <Card className="card--not-full-height documentation__nav-wrap">
    <CardBody>
      {navigationLinksData.map(item => (
        <Link
          key={`index_${item.link}`}
          to={`/documentation/${item.link}`}
          className={`documentation__nav-link${active === item.link
            ? ' documentation__nav--active' : ''}`}
        >
          {item.title}
        </Link>
      ))}
    </CardBody>
  </Card>
);

Navigation.propTypes = {
  active: PropTypes.string,
};

Navigation.defaultProps = {
  active: '',
};

export default Navigation;
