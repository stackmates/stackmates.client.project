---
template: page.hbs
metaMindset: engineer
metaPalette: engineer
heading: Seneca User
subheading: A user management plugin for the Seneca toolkit
returnLink: seneca
referenceUrl: https://github.com/rjrodger/seneca-user
---


This module is a plugin for the Seneca framework. It provides business logic for user management, such as:

   * login
   * logout
   * registration
   * password handling, incl. resets

There are two core concepts: user and login. A _user_, storing the user account details and encrypted passwords,
and a _login_, representing an instance of a user that has been authenticated. A user can have multiple logins.

This module does not make any assumptions about the context it runs in.
Use the [seneca-auth](http://github.com/rjrodger/seneca-auth) plugin to handle web and social media authentication.

For a working example, see the <a href="https://github.com/rjrodger/seneca-examples/tree/master/user-accounts">Seneca user accounts example</a>.

