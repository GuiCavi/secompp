const cursos = [
  {
      _id: 1,
      title: 'React Native: Construindo uma aplicação mobile em JavaScript',
      authors: 'Guilherme Vincenzi Cavichioli, Haroldo Teruya e Pedro Cerdeirinha',
      tags: ['mobile', 'javascript', 'android', 'ios'],
      image: 'react-native-banner.png',
  },
  {
      _id: 2,
      title: 'React Native: Construindo uma aplicação mobile em JavaScript',
      authors: 'Guilherme Vincenzi Cavichioli, Haroldo Teruya e Pedro Cerdeirinha',
      tags: ['mobile', 'javascript', 'android', 'ios'],
      image: 'node-banner.png',
  },
  {
      _id: 3,
      title: 'React Native: Construindo uma aplicação mobile em JavaScript',
      authors: 'Guilherme Vincenzi Cavichioli, Haroldo Teruya e Pedro Cerdeirinha',
      tags: ['mobile', 'javascript', 'android', 'ios'],
      image: 'javascript-banner.png',
  },
];

const loadImageFromServer = (image) => {
  switch (image) {
    case 'react-native-banner.png': return require('../../assets/images/react-native-banner.png');
    case 'node-banner.png': return require('../../assets/images/node-banner.png');
    case 'javascript-banner.png': return require('../../assets/images/javascript-banner.png');
  }
}

export {
  cursos,
  loadImageFromServer
};
