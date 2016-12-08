var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  getFriends: (req, res, next) => {
    let friendsList = [];
    req.session.currentUser.friends.forEach(function(friend) {
      friendsList.push(profiles.filter(function(profile) {
        return (friend === profile.name);
      })[0]);
    });
    let responseObj = {
      currentUser: profiles.filter(function(value) {
        return (value.name === req.session.currentUser.name);
      })[0],
      friends: friendsList
    }
    res.status(200).send(responseObj);
  }
};
