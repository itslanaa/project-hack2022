/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const ResourcesLinks = () => (
  <Card className="card--not-full-height">
    <CardBody className="documentation__changelog">
      <div className="card__title">
        <h5 className="bold-text">v3.7.0</h5>
        <h5 className="subhead">26-October-2021</h5>
      </div>
      <ul>
        <li className="li-title">Authorization:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>New seed project with authorization added</li>
          <li>New auth0 and firebase implementations to template added</li>
        </ul>
        <li className="li-title">Libraries:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>redux-form library was replaced with react-final-form</li>
          <li>recharts library was updated</li>
          <li>react-big-calendar library was updated</li>
          <li>react-select library was updated</li>
          <li>react-hook-form library was updated</li>
          <li>firebase library was updated</li>
          <li>node-sass library was replaced with sass</li>
        </ul>
        <li className="li-title">Other:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>Path aliases for seeds added</li>
          <li>Console warnings fixed</li>
          <li>Few more bugs fixed</li>
        </ul>
      </ul>


      <div className="card__title">
        <h5 className="bold-text">v3.6.0</h5>
        <h5 className="subhead">01-July-2021</h5>
      </div>
      <ul>
        <li className="li-title">Components:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>Added table with API request</li>
          <li>Added new date picker</li>
        </ul>
        <li className="li-title">Authorization:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>Added log in with Microsoft 365</li>
        </ul>
        <li className="li-title">Libraries:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>React-Hook-Form library was updated</li>
        </ul>
        <li className="li-title">Other:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>The issues with npm vulnerabilities resolved</li>
          <li>Few more bugs fixed</li>
        </ul>
      </ul>

      <div className="card__title">
        <h5 className="bold-text">v3.5.0</h5>
        <h5 className="subhead">03-March-2020</h5>
      </div>
      <ul>
        <li className="li-title">Libraries updates:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>React 17.0.1</li>
          <li>Firebase 8.2.1</li>
          <li>Eslint config airbnb 18.2.1</li>
          <li>Other libraries on actual versions</li>
        </ul>
        <li className="li-title">Seed projects:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>Seeds rewritten via react hooks</li>
          <li>Create React App and Redux were updated on actual versions</li>
        </ul>
        <li className="li-title">Colors fixed:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>Colors hexes replaced with same colors constants</li>
        </ul>
        <li className="li-title">React Hook Form Library was added.</li>
      </ul>

      <div className="card__title">
        <h5 className="bold-text">v3.4.0</h5>
        <h5 className="subhead">08-December-2020</h5>
      </div>
      <ul>
        <li className="li-title">The whole project was rewritten via react hooks.
          The following folders were changed:
        </li>
        <ul style={{ marginBottom: '10px' }}>
          <li>App</li>
          <li>Account</li>
          <li>Dashboards</li>
          <li>Default</li>
          <li>E-Commerce</li>
          <li>Landing</li>
          <li>Form</li>
          <li>Layout</li>
          <li>UI</li>
          <li>Mail</li>
          <li>Tables</li>
          <li>Documentation</li>
          <li>Shared</li>
        </ul>
        <li className="li-title">Some bugs fixed.</li>
      </ul>

      <div className="card__title">
        <h5 className="bold-text">v3.3.0</h5>
        <h5 className="subhead">23-November-2020</h5>
      </div>
      <ul>
        <li className="li-title">TodoApp:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>Improved logic.</li>
          <li>Broken spinner fixed.</li>
          <li>Dark mode styles fixed.</li>
        </ul>
        <li className="li-title">Tables:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>Highlight for react-tables search added.</li>
          <li>Added more functionality to the data table Customizer.</li>
        </ul>
        <li className="li-title">Some bugs fixed.</li>
      </ul>

      <div className="card__title">
        <h5 className="bold-text">v3.2.1</h5>
        <h5 className="subhead">05-November-2020</h5>
      </div>
      <ul>
        <li className="li-title">Some bugs fixed.</li>
        <li className="li-title">App:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>Added the fake request of app configurations example.</li>
        </ul>
        <li className="li-title">TodoApp:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>Added new archiving logic.</li>
        </ul>
        <li className="li-title">Documentation:</li>
        <ul style={{ marginBottom: '10px' }}>
          <li>Added link to the&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/8aJkBc8gFN"
            >
              discord server
            </a>
            &nbsp;of our templates.
          </li>
        </ul>
      </ul>

      <div className="card__title">
        <h5 className="bold-text">v3.2.0</h5>
        <h5 className="subhead">22-October-2020</h5>
      </div>
      <ul>
        <li className="li-title">Some bugs fixed.</li>
        <li className="li-title">Dashboards renamed.</li>
        <li className="li-title">TodoApp has new logic with fake request example.</li>
        <li className="li-title">Tables (They are new!)</li>
        <ul style={{ marginBottom: 0 }}>
          <li>Removed react-data-grid library, we are using now react-table instead.</li>
          <li>Table now can be one of 3 types: common, drag & drop and resizable.</li>
          <li>Tables now has all functions you asked for: pagination,
            search input, sorting and ect. All you need is to set up tableConfig. Just it!
          </li>
        </ul>
      </ul>

      <div className="card__title">
        <h5 className="bold-text">v3.1.0</h5>
        <h5 className="subhead">1-September-2020</h5>
      </div>
      <ul>
        <li className="li-title">Maps</li>
        <ul>
          <li className="li-title">Added Vector Map with api request example.</li>
        </ul>
      </ul>

      <div className="card__title">
        <h5 className="bold-text">v3.0.0</h5>
        <h5 className="subhead">20-July-2020</h5>
      </div>
      <ul>
        <li className="li-title">
          Basic components in the 'shared' folder are now written via react hooks.
        </li>
        <li className="li-title">
          Added Docker configuration file example for production and development environment.
        </li>
        <li className="li-title">Account</li>
        <ul>
          <li className="li-title">Added 'Forgotten password' pages.</li>
        </ul>
      </ul>

      <div className="card__title">
        <h5 className="bold-text">v2.5.1</h5>
        <h5 className="subhead">18-June-2020</h5>
      </div>
      <ul>
        <li className="li-title">Seeds and Template projects are now based on the latest version of create-react-app
          (react-scripts 3.4.1 and eject command are available now!).
        </li>
      </ul>

      <div className="card__title">
        <h5 className="bold-text">v2.5.0</h5>
        <h5 className="subhead">21-May-2020</h5>
      </div>
      <ul>
        <li className="li-title">Libraries</li>
        <ul>
          <li>Unnecessary libraries removed.</li>
          <li className="li-title">Updated versions of a large number of libraries:</li>
          <ul style={{ marginBottom: 0 }}>
            <li>draft-js</li>
            <li>file-loader</li>
            <li>i18next</li>
            <li>react-i18next</li>
            <li>mdi-react</li>
            <li>polished</li>
            <li>rc-slider</li>
            <li>rc-tooltip</li>
            <li>react-datepicker</li>
            <li>react-dropzone</li>
            <li>react-redux</li>
            <li>react-router</li>
            <li>react-select</li>
            <li>react-syntax-highlighter</li>
            <li>reactstrap</li>
            <li>style-loader</li>
            <li>terser-webpack-plugin</li>
            <li>url-loader</li>
            <li>@babel</li>
            <li>css-loader</li>
            <li>eslint</li>
            <li>sass-loader</li>
            <li>workbox-webpack-plugin</li>
          </ul>
          <li>Files required changes due to updated libraries are renewed. See the list above.</li>
        </ul>
        <li className="li-title">Maps</li>
        <ul>
          <li>The vector map page is fully updated.</li>
        </ul>
        <li className="li-title">Default pages</li>
        <ul>
          <li>The 404 page background picture size has been reduced.</li>
        </ul>
      </ul>

      <div className="card__title">
        <h5 className="bold-text">v2.4.1</h5>
        <h5 className="subhead">13-February-2020</h5>
      </div>
      <ul>
        <li className="li-title">
          Hello!<br /> Here's the bunch of minor fixes and improvements.
          Our goal is to become better and better for you.
        </li>
        <li className="li-title">Account</li>
        <ul>
          <li>Layout issues fixed</li>
          <li>Unclickable button on the login screen fixed</li>
        </ul>
        <li className="li-title">Booking dashboard</li>
        <ul>
          <li>403 error fixed</li>
        </ul>
        <li className="li-title">Dashboard MobileApp</li>
        <ul>
          <li>Inactive chexboxes in Safari fixed</li>
        </ul>
        <li className="li-title">Dashboard Default</li>
        <ul>
          <li>Layout issues in Fifefox fixed</li>
        </ul>
        <li className="li-title">Default pages</li>
        <ul>
          <li>Layout issues on mobile fixed</li>
        </ul>
        <li className="li-title">Documentation</li>
        <ul>
          <li>New documentation section - Troubleshooting. Going to be supplemented</li>
        </ul>
        <li className="li-title">E-Commerce</li>
        <ul>
          <li>Layout issues on mobile fixed</li>
        </ul>
        <li className="li-title">Forms</li>
        <ul>
          <li>Date-picker issue fixed</li>
          <li>Layout issues on mobile fixed</li>
        </ul>
        <li className="li-title">Mail Application</li>
        <ul>
          <li>Hover for search field and buttons added</li>
        </ul>
        <li className="li-title">Menu & Topbar</li>
        <ul>
          <li>Sidebar issue fixed</li>
          <li>Incorrect align fixed</li>
          <li>Notifications, mail and search added for mobiles</li>
        </ul>
        <li className="li-title">Profile</li>
        <ul>
          <li>Incorrect link fixed</li>
          <li>403 error fixed</li>
        </ul>
        <li className="li-title">UI elements</li>
        <ul>
          <li>Layout issues in the Firefox fixed</li>
        </ul>
      </ul>

      <div className="card__title">
        <h5 className="bold-text">v2.4.0</h5>
        <h5 className="subhead">23-September-2019</h5>
      </div>
      <ul>
        <li className="li-title">
          New feature for EasyDEV - the authorization! Now you can authorize with your Firebase, Auth0,
          Google and Facebook accounts and even create Firebase account.
        </li>
        <li className="li-title">Account</li>
        <ul>
          <li>Log in page fixed</li>
        </ul>
        <li className="li-title">Charts</li>
        <ul>
          <li>Layout fixed</li>
        </ul>
        <li className="li-title">Documentation</li>
        <ul>
          <li>Grammar mistakes fixed</li>
          <li>Incorrect navigation link fixed</li>
        </ul>
        <li className="li-title">E-commerce</li>
        <ul>
          <li>Mobile layout on the Payment page fixed</li>
        </ul>
        <li className="li-title">Forms</li>
        <ul>
          <li>Missed file attachment at Basic form fixed</li>
          <li>Unexpected horisontal scroll in date picker fixed</li>
        </ul>
        <li className="li-title">Landing</li>
        <ul>
          <li>Grammar mistake fixed</li>
        </ul>
        <li className="li-title">Mail application</li>
        <ul>
          <li>Layout issue fixed</li>
        </ul>
        <li className="li-title">Menu & Topbar</li>
        <ul>
          <li>Search overlapping Documentation on topbar fixed</li>
          <li>Realized: loading the profile name and picture on the topbar menu after authorization</li>
        </ul>
        <li className="li-title">Profile</li>
        <ul>
          <li>Incorrect checkboxes behavior on the Profile page fixed</li>
          <li>Calendar fixed</li>
        </ul>
        <li className="li-title">UI elements</li>
        <ul>
          <li>Grammar mistake on the Typography page fixed</li>
          <li>Overlayed pictures in carousel on mobile fixed</li>
        </ul>
      </ul>

      <div className="card__title">
        <h5 className="bold-text">v2.3</h5>
        <h5 className="subhead">15-August-2019</h5>
      </div>
      <ul>
        <li className="li-title">RTL (right to left) mode</li>
        <li className="li-title">Menu and Topbar</li>
        <ul>
          <li>Realized: Close search panel and language menu at click outside</li>
          <li>Realized: Close menu after a link was clicked and the user is taken to the page</li>
          <li>Link page task added in profile menu</li>
          <li>Position the arrow fixed at closing third level menu</li>
        </ul>
        <li className="li-title">UI Elements</li>
        <ul>
          <li>Layout panels fixed</li>
          <li>Layout button fixed on page tooltips</li>
        </ul>
        <li className="li-title">Chat application</li>
        <ul>
          <li>"Type here..." is misplaced in Chat app fixed on Safari</li>
        </ul>
        <li className="li-title">Default pages</li>
        <ul>
          <li>Mobile layout on the project summary panel fixed</li>
          <li>Mobile layout on the project summary charts fixed</li>
          <li>Layout on the project summary panel project team fixed</li>

        </ul>
        <li className="li-title">Booking dashboard</li>
        <ul>
          <li>Layout markers fixed in chart</li>
          <li>Position hovers fixed in chart</li>
        </ul>
        <li className="li-title">E-commerce</li>
        <ul>
          <li>Grammar mistakes fixed</li>
        </ul>
        <li className="li-title">Forms</li>
        <ul>
          <li>Unclickable "Remember me" checkbox fixed on form layout</li>
          <li>Bugs in Form validation fixed</li>
        </ul>
        <li className="li-title">Customizing</li>
        <ul>
          <li>Squared border and block shadow fixed</li>
        </ul>
        <li>Bugfixes for screen resolutions 1280x800 and 1440x900</li>
        <li>Bugfixes for customer's requests</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v2.2</h5>
        <h5 className="subhead">09-August-2019</h5>
      </div>
      <ul>
        <li>Bugfixes for screen resolution 1280x800</li>
        <li>Bugfixes in calendar</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v2.1.4</h5>
        <h5 className="subhead">16-July-2019</h5>
      </div>
      <ul>
        <li>Updated react-big-calendar and fixed breaking changes</li>
        <li>Refactored routers and added separate folders</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v2.1.3</h5>
        <h5 className="subhead">05-July-2019</h5>
      </div>
      <ul>
        <li>Updated decor images</li>
        <li>Fixed bug with bars click event on dashboards</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v2.1.2</h5>
        <h5 className="subhead">18-June-2019</h5>
      </div>
      <ul>
        <li>Changed logo</li>
        <li>Minor bug fixes</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v2.1.1</h5>
        <h5 className="subhead">23-May-2019</h5>
      </div>
      <ul>
        <li>Added Todo Application</li>
        <li>Minor bug fixes</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v2.1.0</h5>
        <h5 className="subhead">13-May-2019</h5>
      </div>
      <ul>
        <li>Updated node-sass for supporting Node 12</li>
        <li>Redesigned landing</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v2.0.0</h5>
        <h5 className="subhead">12-March-2019</h5>
      </div>
      <ul>
        <li>Updated all packages with breaking changes</li>
        <li>Deleted prefix 'new-' in all folders names</li>
        <li>Fixed all bugs, caused breaking changes dependencies</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.6.1</h5>
        <h5 className="subhead">12-March-2019</h5>
      </div>
      <ul>
        <li>Updated all dependencies for non breaking changes versions at seed and seed-without-redux</li>
        <li>Bug fixes at Mail and Chat Application</li>
        <li>Bug fixed at Tooltips & Popovers, popover on right</li>
        <li>Minor bug fixes</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.6.0</h5>
        <h5 className="subhead">05-March-2019</h5>
      </div>
      <ul>
        <li>Updated packages without breaking changes</li>
        <li>Minor bug fixes</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.5.0</h5>
        <h5 className="subhead">26-February-2019</h5>
      </div>
      <ul>
        <li>Added new Dashboard Mobile App</li>
        <li>Fixed pagination in Data Table</li>
        <li>Minor bug fixes</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.4.1</h5>
        <h5 className="subhead">19-February-2019</h5>
      </div>
      <ul>
        <li>Update react-select to v.2</li>
        <li>Added new Dashboard Booking</li>
        <li>Minor bug fixes</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.4.0</h5>
        <h5 className="subhead">17-October-2018</h5>
      </div>
      <ul>
        <li>Added a seed without redux</li>
        <li>Renamed containers</li>
        <li>Redesign TopbarSearch</li>
        <li>Minor bug and styles fixes</li>
        <li>Update packages</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.3.7</h5>
        <h5 className="subhead">02-October-2018</h5>
      </div>
      <ul>
        <li>Updated project core to latest create-react-app</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.3.6</h5>
        <h5 className="subhead">25-September-2018</h5>
      </div>
      <ul>
        <li>Added filter button to <Link to="/tables/material_table">Material Table</Link></li>
        <li>Updated landing page</li>
        <li>Some file structure changes</li>
        <li>Minor bug fixes</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.3.5</h5>
        <h5 className="subhead">18-September-2018</h5>
      </div>
      <ul>
        <li>Added <Link to="/tables/material_table">Material Table</Link></li>
        <li>Updated packages</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.3.4</h5>
        <h5 className="subhead">07-September-2018</h5>
      </div>
      <ul>
        <li>Redesigned <Link to="/mail">Mail Application</Link></li>
        <li>Reworked and fixed layout: fixed sidebar highlighting and notification error in layout</li>
        <li>Minor bug fixes</li>
        <li>Minor styles changes</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.3.3</h5>
        <h5 className="subhead">23-August-2018</h5>
      </div>
      <ul>
        <li>Added multilanguage</li>
        <li>Added <a href="https://github.com/gaearon/react-hot-loader">react-hot-loader</a></li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.3.2</h5>
        <h5 className="subhead">03-August-2018</h5>
      </div>
      <ul>
        <li>Redesigned Chat</li>
        <li>Reworked notifications</li>
        <li>Added welcome notification</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.3.1</h5>
        <h5 className="subhead">20-July-2018</h5>
      </div>
      <ul>
        <li>Updated Material-UI to v1.4.0</li>
        <li>Updated versions of other packages</li>
        <li>Added new page: <Link to="/account/email_confirmation">Email Confirmation</Link></li>
        <li>Added lists of messages and notifications to topbar</li>
        <li>Changed next components: TopbarProfile, Modal</li>
        <li>Renamed folder 'pages' to 'containers'</li>
        <li>Minor bug and style fixes</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.3.0</h5>
        <h5 className="subhead">05-July-2018</h5>
      </div>
      <ul>
        <li>Added seed project</li>
        <li>Minor fixes</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.2.1</h5>
        <h5 className="subhead">25-June-2018</h5>
      </div>
      <ul>
        <li>Included landing page in main files</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.2.0</h5>
        <h5 className="subhead">20-June-2018</h5>
      </div>
      <ul>
        <li>Changed the Timepicker from react-times to rc-time-picker</li>
        <li>The warning related with src/app/Router.js was fixed</li>
        <li>Changed the structure of custom fields in src/components/form</li>
        <li>Made the theme customizer</li>
        <li>Excluded the topbar and sidebar to a separated folder  (/src/pages/_layout)</li>
        <li>Top-menu was added</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.1.1</h5>
        <h5 className="subhead">06-June-2018</h5>
      </div>
      <ul>
        <li>Separated the sidebar logic on mobile and desktop</li>
        <li>Minor bugs fixes</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.1.0</h5>
        <h5 className="subhead">02-June-2018</h5>
      </div>
      <ul>
        <li>Editable tables added</li>
        <li>Minor bugs fixes</li>
      </ul>
      <div className="card__title">
        <h5 className="bold-text">v1.0.0</h5>
        <h5 className="subhead">31-May-2018</h5>
      </div>
      <ul>
        <li>Initial Release</li>
      </ul>
    </CardBody>
  </Card>
);

export default ResourcesLinks;
