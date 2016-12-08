var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(req, res, next) {
    let userMatches = users.filter(function(value) {
      return (value.name === req.body.name && value.password === req.body.password);
    });
    if (userMatches[0]) {
      req.session.currentUser = userMatches[0];
      res.send({ userFound: true });
    } else {
      res.send({ userFound: false });
    }
  }
}
