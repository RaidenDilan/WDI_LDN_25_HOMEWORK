angular
  .module('instagram')
  .config(Auth);

Auth.$inject = ['$authProvider', 'API_URL'];
function Auth($authProvider, API_URL) {
  $authProvider.signupUrl = `${API_URL}/register`;
  $authProvider.loginUrl = `${API_URL}/login`;

  $authProvider.github({
    clientId: '1f8ffbfc3e534e0afb14',
    url: `${API_URL}/oauth/github`
  });
  
  $authProvider.facebook({
    clientId: '1910222822591249',
    url: `${API_URL}/oauth/facebook`
  });
}
