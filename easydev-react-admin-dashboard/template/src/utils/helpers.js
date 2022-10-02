export const getOidcStorageKey = () => {
  const authSettings = JSON.parse(localStorage.getItem('authSettings'));
  if (authSettings) {
    return `oidc.user:${authSettings.auth_server}:${authSettings.client_id}`;
  }
  return null;
};

export const getOidcInfo = () => {
  const key = getOidcStorageKey();
  if (key) {
    const oidc = JSON.parse(localStorage.getItem(key));
    return oidc;
  }
  return null;
};

export const getToken = () => {
  const oidc = getOidcInfo();
  if (oidc) {
    return oidc.id_token;
  }
  return null;
};
