export interface Profile {
  id: 'daniell' | 'luisfer';
  name: string;
  username: string;
  image: number;
  followers: number;
  following: number;
}

export const profiles: Profile[] = [
  {
    id: 'daniell',
    name: 'Daniell Cuello',
    username: '@daniellcuello',
    image: require('../../assets/perfil-denilson.jpg'),
    followers: 24,
    following: 18,
  },
  {
    id: 'luisfer',
    name: 'LuisFer Cuello',
    username: '@luisfercuello',
    image: require('../../assets/perfil-luis.jpg'),
    followers: 16,
    following: 31,
  },
];