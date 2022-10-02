import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '@/shared/components/CodeHighlither';

const googleAuthBtn = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Google, Facebook or Microsoft authorization</h5>
      </div>
      <p>For authorization through Google/Facebook/Microsoft you need:</p>
      <ol>
        <li>
          Register the application
          <a href="https://developers.google.com/identity/sign-in/web/sign-in"> Google</a>
          /
          <a href="https://developers.facebook.com/">Facebook</a>
          /
          <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-app-registration">
            Microsoft
          </a>
        </li>
        <li>
          Save application settings to <b>template/src/config</b>.
          <span> Required fields for facebook
            <span className="red-text"> appId, secretApp</span>.
            For google: <span className="red-text">client_id, client_secret</span>. 
            For microsoft: <span className="red-text">auth.client_id, auth.authority, redirectUri</span>
          </span>
        </li>
        <CodeHighlither>
          {`// Example settings google app
{
  "client_id": "YOUR_CLIENT_ID",
  "project_id": "YOUR_PROJECT_ID",
  "auth_uri": "YOUR_AUTH_URI",
  "token_uri": "YOUR_TOKEN_URI",
  "auth_provider_x509_cert_url": "YOUR_AUTH_PROVIDER",
  "client_secret": "YOUR_CLIENT_SECRET",
  "redirect_uris": [
    "YOUR_REDIRECT_URIS"
  ],
  "javascript_origins": [
    "YOUR_JAVASCRIPT_ORIGINS
  ]
}`}
        </CodeHighlither>
        <li>Then, if you did everything right, just plug the component
          <b> googleAuthBtn </b> or <b>fbAuthBtn </b>
          into your application
          <CodeHighlither>
            {`import React from 'react';
import GoogleAuthBtn from '../../../containers/Account/AuthBtn/googleAuthBtn';
import FacebookAuthBtn from '../../../containers/Account/AuthBtn/fbAuthBtn';
import MicrosoftAuthBtn from '../../../containers/Account/AuthBtn/microsoftAuthBtn';

export default class Example {
  render() {
    return (
      <FacebookAuthBtn />
      <GoogleAuthBtn />
      <MicrosoftAuthBtn />
    )
  }
}`}
          </CodeHighlither>
        </li>
      </ol>

    </CardBody>
  </Card>
);

export default googleAuthBtn;
