import type { FeaturedItem, HomeSection, SectionItem, Song } from '@/types/music';

const titoDoublePImage = require('../../assets/Tito-Double.jpg');
const leninRamirezImage = require('../../assets/Lenin-Ramirez.jpg');
const netonVegaImage = require('../../assets/Neton-Vega.jpg');
const dareyesImage = require('../../assets/Los-Dareyes-De-La-Sierra.jpg');
const natanaelCanoImage = require('../../assets/Natanael-Cano.jpg');
const juniorHImage = require('../../assets/Junior-H.jpg');
const fuerzaRegidaImage = require('../../assets/Fuerza-Regida.jpg');
const luisRConriquezImage = require('../../assets/Luis-R-Conriquez.jpg');
const pesoPlumaImage = require('../../assets/Peso-Pluma.jpg');
const eslabonArmadoImage = require('../../assets/Eslabon-Armado.jpg');
const grupoFronteraImage = require('../../assets/Grupo-Frontera.jpg');
const gabitoBallesterosImage = require('../../assets/Gabito-Ballesteros.jpg');

export const newRelease: FeaturedItem = {
  id: 'new-release',
  title: 'Natanael Cano, Vol.1',
  subtitle: 'El nuevo álbum de Natanael Cano',
  image:
    'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b9/4f/81/b94f81a4-00f3-4cc1-3257-0fdc763cdb9e/196874661499.jpg/800x800bb.jpg',
};

export const featuredItems: FeaturedItem[] = [
  {
    id: 'featured-1',
    title: 'Natanael Cano: nueva era',
    subtitle: 'Escucha lo más reciente del creador de los Corridos Tumbados',
    image:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800',
  },
  {
    id: 'featured-2',
    title: 'Esencia tumbada',
    subtitle: 'Los himnos de Natanael Cano y la nueva generación',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800',
  },
  {
    id: 'featured-3',
    title: 'Corridos para el camino',
    subtitle: 'Una selección de historias, guitarras y actitud',
    image:
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800',
  },
  {
    id: 'featured-4',
    title: 'La nueva generación',
    subtitle: 'Peso Pluma, Junior H, Fuerza Regida y más',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
  },
  {
    id: 'featured-5',
    title: 'Clásicos de Natanael',
    subtitle: 'Vuelve a los corridos que lo empezaron todo',
    image:
      'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800',
  },
  {
    id: 'featured-6',
    title: 'Tumbados románticos',
    subtitle: 'Para cantar a todo pulmón',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
  },
];

export const trendingItems: FeaturedItem[] = [
  {
    id: 'trending-1',
    title: 'A Mis 20',
    subtitle: 'El álbum de Natanael Cano que marcó una generación',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/05/24/4c/05244c75-15f5-3a22-5c3b-835fb254ad04/190296646058.jpg/800x800bb.jpg',
  },
  {
    id: 'trending-2',
    title: 'GÉNESIS',
    subtitle: 'Peso Pluma lidera las tendencias de la música mexicana',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/92/c3/76/92c376a9-5571-132b-2d3d-f18cf7cb367b/5054197559709.jpg/800x800bb.jpg',
  },
  {
    id: 'trending-3',
    title: 'Mi Vida En Un Cigarro 2',
    subtitle: 'Junior H y el lado más melódico de los corridos tumbados',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/11/33/97/1133978a-d03c-2c62-c712-8e2567bbd666/190296227486.jpg/800x800bb.jpg',
  },
  {
    id: 'trending-4',
    title: 'Pa Las Baby’s Y Belikeada',
    subtitle: 'Fuerza Regida mantiene el pulso de las listas',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/21/e3/b7/21e3b74f-571b-07ce-567b-a2aa8274c7b2/196871548922.jpg/800x800bb.jpg',
  },
  {
    id: 'trending-5',
    title: 'Corridos Tumbados',
    subtitle: 'La playlist esencial para entrar en el mood tumbado',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
  },
  {
    id: 'trending-6',
    title: 'Mexicano en la cima',
    subtitle: 'Los sonidos mexicanos que están dando la vuelta al mundo',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
  },
  {
    id: 'trending-7',
    title: 'Nuevos tumbados',
    subtitle: 'Descubre voces nuevas y colaboraciones inesperadas',
    image:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800',
  },
  {
    id: 'trending-8',
    title: 'Para cantar despechado',
    subtitle: 'Historias de amor, desamor y mucho requinto',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
  },
];

export const recentSongs: Song[] = [
  {
    id: '1',
    title: 'Madonna',
    artist: 'Natanael Cano & Oscar Maydon',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/05/24/4c/05244c75-15f5-3a22-5c3b-835fb254ad04/190296646058.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/1 - Natanael Cano  - Madonna.mp3'),
  },
  {
    id: '2',
    title: 'Diamantes',
    artist: 'Natanael Cano',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/05/24/4c/05244c75-15f5-3a22-5c3b-835fb254ad04/190296646058.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/2 - Diamantes - Natanael Cano.mp3'),
  },
  {
    id: '3',
    title: 'Ella (feat. Junior H)',
    artist: 'Natanael Cano',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f9/75/58/f97558cf-9cce-0923-42df-196cc93c901a/050742369545_cover.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/3 - Junior H - Ella.mp3'),
  },
  {
    id: '4',
    title: 'El F',
    artist: 'Natanael Cano & Junior H',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/05/24/4c/05244c75-15f5-3a22-5c3b-835fb254ad04/190296646058.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/4 - El F - Natanael Cano, Junior H.mp3'),
  },
  {
    id: '5',
    title: 'Ella Baila Sola',
    artist: 'Eslabón Armado & Peso Pluma',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b1/9b/95/b19b9506-5696-ad86-1c85-d198503adfbf/816144021906_Cover.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/5 - Ella Baila Sola  - Eslabon Armado y Peso Pluma.mp3'),
  },
  {
    id: '6',
    title: 'Y Lloro',
    artist: 'Junior H',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/83/86/2a/83862a9a-aac3-8337-2135-6796108202f1/190296802195.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/6 - Junior H - Y LLORO.mp3'),
  },
  {
    id: '7',
    title: 'Bebe Dame',
    artist: 'Fuerza Regida y Grupo Frontera',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/27/4a/eb/274aeb8c-3981-690b-1cbd-f00569d45bb3/196589769763.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/7 - Fuerza Regida, Grupo Frontera - Bebe Dame.mp3'),
  },
  {
    id: '8',
    title: 'O Me Voy O Te Vas',
    artist: 'Natanael Cano',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7f/88/34/7f8834f4-76eb-1d84-8fb1-deb946cdbb2d/5054197877322.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/8 - Natanael Cano - O Me Voy O Te Vas.mp3'),
  },
  {
    id: '9',
    title: 'Mar Azul',
    artist: 'Natanael Cano',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b9/4f/81/b94f81a4-00f3-4cc1-3257-0fdc763cdb9e/196874661499.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/9 - Mar Azul - Natanael Cano.mp3'),
  },
  {
    id: '10',
    title: 'Por Amarte Así',
    artist: 'Natanael Cano',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b9/4f/81/b94f81a4-00f3-4cc1-3257-0fdc763cdb9e/196874661499.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/10 - Natanael Cano - Por Amarte Asi.mp3'),
  },
  {
    id: '11',
    title: 'La Cherokee',
    artist: 'Natanael Cano & Gabito Ballesteros',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/61/97/20/619720bc-8c5c-6d67-076b-8fdc737adb41/196874661857.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/11 - Natanael Cano, Gabito Ballesteros - La Cherokee.mp3'),
  },
  {
    id: '12',
    title: 'CR7',
    artist: 'Natanael Cano',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b9/4f/81/b94f81a4-00f3-4cc1-3257-0fdc763cdb9e/196874661499.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/12 - Natanael Cano - CR7.mp3'),
  },
  {
    id: '13',
    title: 'Pase Y Pase',
    artist: 'Tito Double P',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/12/7f/f3/127ff377-13e7-ef61-af15-1549dfc50efd/820233186261.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/13 - Pase Y Pase - Tito Double P.mp3'),
  },
  {
    id: '14',
    title: 'AY MUJER',
    artist: 'Tito Double P',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/12/7f/f3/127ff377-13e7-ef61-af15-1549dfc50efd/820233186261.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/14 - AY MUJER - Tito Double P.mp3'),
  },
  {
    id: '15',
    title: 'Da\u00f1o',
    artist: 'Peso Pluma & Tito Double P',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e3/47/a9/e347a9c6-1cf0-6154-3976-b9dd615e2a83/199806514993.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/15 - da\u00f1o - Peso Pluma & Tito Double P.mp3'),
  },
  {
    id: '16',
    title: 'POR SUS BESOS',
    artist: 'Tito Double P',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/12/7f/f3/127ff377-13e7-ef61-af15-1549dfc50efd/820233186261.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/16 - POR SUS BESOS - Tito Double P.mp3'),
  },
  {
    id: '17',
    title: 'Dos d\u00edas',
    artist: 'Tito Double P, Peso Pluma',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d6/b1/c5/d6b1c5e2-104d-c427-465e-fea8dfe663d4/198588874653.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/17 - Dos d\u00edas - Tito Double P, Peso Pluma.mp3'),
  },
  {
    id: '18',
    title: 'Polvo Rosita',
    artist: 'Lenin Ramirez',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/16/35/cc/1635ccaf-710a-d41e-3bbb-7cb6406ad297/224.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/18 - Lenin Ramirez - Polvo Rosita.mp3'),
  },
  {
    id: '19',
    title: 'Todo Lo Fue',
    artist: 'Lenin Ram\u00edrez',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/16/35/cc/1635ccaf-710a-d41e-3bbb-7cb6406ad297/224.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/19 - Todo Lo Fue - Lenin Ram\u00edrez.mp3'),
  },
  {
    id: '20',
    title: 'LA PATRULLA',
    artist: 'Peso Pluma, Neton Vega',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3d/e9/65/3de9651e-fe11-0525-7eee-762861af1152/198391808319.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/20 - LA PATRULLA - Peso Pluma, Neton Vega.mp3'),
  },
  {
    id: '21',
    title: 'Aguas',
    artist: 'Luis R Conriquez, Neton Vega, Rey Quinto',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a2/01/2e/a2012e37-c170-588d-b720-6f3e9b6424c8/196874018682.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/21 - Luis R Conriquez, Neton Vega, Rey Quinto - Aguas.mp3'),
  },
  {
    id: '22',
    title: 'MATCHA',
    artist: 'Dareyes de la Sierra',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c1/04/7c/c1047c60-2534-12cc-4f4e-b3f290b81317/820200587084.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/22 - MATCHA - Dareyes de la Sierra.mp3'),
  },
  {
    id: '23',
    title: 'Frecuencia',
    artist: 'Dareyes de la Sierra',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d8/c0/e9/d8c0e92f-0976-18e1-066d-dc1446234136/199350238130.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/23 - Frecuencia - Dareyes de la Sierra.mp3'),
  },
  {
    id: '24',
    title: 'Vita Fer',
    artist: 'Dareyes de la Sierra, Tito Double P',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ac/fc/03/acfc03c4-9376-037e-dfc8-4d8356dcbf82/199350128523.jpg/300x300bb.jpg',
    audio: require('../../assets/Music/24 - Vita Fer - Dareyes de la Sierra, Tito Double P.mp3'),
  },
];

export const homeSections: HomeSection[] = [
  {
    title: 'Artistas Recomendados',
    items: [
      {
        id: 'sim-1',
        title: 'Natanael Cano',
        subtitle: 'Artista',
        image: natanaelCanoImage,
        isArtist: true,
      },
      {
        id: 'sim-2',
        title: 'Tito Double P',
        subtitle: 'Artista',
        image: titoDoublePImage,
        isArtist: true,
      },
      {
        id: 'sim-3',
        title: 'Peso Pluma',
        subtitle: 'Artista',
        image: pesoPlumaImage,
        isArtist: true,
      },
      {
        id: 'sim-4',
        title: 'Junior H',
        subtitle: 'Artista',
        image: juniorHImage,
        isArtist: true,
      },
      {
        id: 'sim-5',
        title: 'Lenin Ram\u00edrez',
        subtitle: 'Artista',
        image: leninRamirezImage,
        isArtist: true,
      },
      {
        id: 'sim-6',
        title: 'Neton Vega',
        subtitle: 'Artista',
        image: netonVegaImage,
        isArtist: true,
      },
      {
        id: 'sim-7',
        title: 'Los Dareyes De La Sierra',
        subtitle: 'Artista',
        image: dareyesImage,
        isArtist: true,
      },
      {
        id: 'sim-8',
        title: 'Fuerza Regida',
        subtitle: 'Artista',
        image: fuerzaRegidaImage,
        isArtist: true,
      },
      {
        id: 'sim-9',
        title: 'Luis R Conriquez',
        subtitle: 'Artista',
        image: luisRConriquezImage,
        isArtist: true,
      },
      {
        id: 'sim-10',
        title: 'Eslab\u00f3n Armado',
        subtitle: 'Artista',
        image: eslabonArmadoImage,
        isArtist: true,
      },
      {
        id: 'sim-11',
        title: 'Grupo Frontera',
        subtitle: 'Artista',
        image: grupoFronteraImage,
        isArtist: true,
      },
      {
        id: 'sim-12',
        title: 'Gabito Ballesteros',
        subtitle: 'Artista',
        image: gabitoBallesterosImage,
        isArtist: true,
      },
    ],
  },
  {
    title: 'Para los fanáticos de Junior H',
    items: [
      {
        id: 'jh-1',
        title: 'Y Lloro',
        subtitle: 'Junior H',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/83/86/2a/83862a9a-aac3-8337-2135-6796108202f1/190296802195.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'jh-2',
        title: 'Ella',
        subtitle: 'Natanael Cano ft. Junior H',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f9/75/58/f97558cf-9cce-0923-42df-196cc93c901a/050742369545_cover.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'jh-3',
        title: 'El F',
        subtitle: 'Natanael Cano & Junior H',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/05/24/4c/05244c75-15f5-3a22-5c3b-835fb254ad04/190296646058.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'jh-4',
        title: 'Mi Vida En Un Cigarro 2',
        subtitle: 'Junior H',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/11/33/97/1133978a-d03c-2c62-c712-8e2567bbd666/190296227486.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'jh-5',
        title: 'A Mis 20',
        subtitle: 'Natanael Cano',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/05/24/4c/05244c75-15f5-3a22-5c3b-835fb254ad04/190296646058.jpg/300x300bb.jpg',
        isArtist: false,
      },
    ],
  },
  {
    title: 'Escucha algo nuevo',
    items: [
      {
        id: 'new-1',
        title: 'Mar Azul',
        subtitle: 'Natanael Cano',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b9/4f/81/b94f81a4-00f3-4cc1-3257-0fdc763cdb9e/196874661499.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'new-2',
        title: 'Por Amarte Así',
        subtitle: 'Natanael Cano',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b9/4f/81/b94f81a4-00f3-4cc1-3257-0fdc763cdb9e/196874661499.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'new-3',
        title: 'La Cherokee',
        subtitle: 'Natanael Cano & Gabito Ballesteros',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/61/97/20/619720bc-8c5c-6d67-076b-8fdc737adb41/196874661857.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'new-4',
        title: 'CR7',
        subtitle: 'Natanael Cano',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b9/4f/81/b94f81a4-00f3-4cc1-3257-0fdc763cdb9e/196874661499.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'new-5',
        title: 'Madonna',
        subtitle: 'Natanael Cano & Oscar Maydon',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/05/24/4c/05244c75-15f5-3a22-5c3b-835fb254ad04/190296646058.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'new-6',
        title: 'Diamantes',
        subtitle: 'Natanael Cano',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/05/24/4c/05244c75-15f5-3a22-5c3b-835fb254ad04/190296646058.jpg/300x300bb.jpg',
        isArtist: false,
      },
    ],
  },
  {
    title: 'Corridos tumbados esenciales',
    items: [
      {
        id: 'ct-1',
        title: 'Ella Baila Sola',
        subtitle: 'Eslabón Armado & Peso Pluma',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b1/9b/95/b19b9506-5696-ad86-1c85-d198503adfbf/816144021906_Cover.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'ct-2',
        title: 'Bebe Dame',
        subtitle: 'Fuerza Regida y Grupo Frontera',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/27/4a/eb/274aeb8c-3981-690b-1cbd-f00569d45bb3/196589769763.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'ct-3',
        title: 'GÉNESIS',
        subtitle: 'Peso Pluma',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/92/c3/76/92c376a9-5571-132b-2d3d-f18cf7cb367b/5054197559709.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'ct-4',
        title: 'Pa Las Baby\'s Y Belikeada',
        subtitle: 'Fuerza Regida',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/21/e3/b7/21e3b74f-571b-07ce-567b-a2aa8274c7b2/196871548922.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'ct-5',
        title: 'O Me Voy O Te Vas',
        subtitle: 'Natanael Cano',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7f/88/34/7f8834f4-76eb-1d84-8fb1-deb946cdbb2d/5054197877322.jpg/300x300bb.jpg',
        isArtist: false,
      },
    ],
  },
  {
    title: 'Tito Double P',
    items: [
      {
        id: 'tdp-1',
        title: 'Pase Y Pase',
        subtitle: 'Tito Double P',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/12/7f/f3/127ff377-13e7-ef61-af15-1549dfc50efd/820233186261.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'tdp-2',
        title: 'AY MUJER',
        subtitle: 'Tito Double P',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/12/7f/f3/127ff377-13e7-ef61-af15-1549dfc50efd/820233186261.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'tdp-3',
        title: 'Da\u00f1o',
        subtitle: 'Peso Pluma & Tito Double P',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e3/47/a9/e347a9c6-1cf0-6154-3976-b9dd615e2a83/199806514993.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'tdp-4',
        title: 'POR SUS BESOS',
        subtitle: 'Tito Double P',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/12/7f/f3/127ff377-13e7-ef61-af15-1549dfc50efd/820233186261.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'tdp-5',
        title: 'Dos d\u00edas',
        subtitle: 'Tito Double P, Peso Pluma',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d6/b1/c5/d6b1c5e2-104d-c427-465e-fea8dfe663d4/198588874653.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'tdp-0',
        title: 'Tito Double P',
        subtitle: 'Artista',
        image: titoDoublePImage,
        isArtist: true,
      },
    ],
  },
  {
    title: 'Lenin Ram\u00edrez',
    items: [
      {
        id: 'lr-1',
        title: 'Polvo Rosita',
        subtitle: 'Lenin Ramirez',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/16/35/cc/1635ccaf-710a-d41e-3bbb-7cb6406ad297/224.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'lr-2',
        title: 'Todo Lo Fue',
        subtitle: 'Lenin Ram\u00edrez',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/16/35/cc/1635ccaf-710a-d41e-3bbb-7cb6406ad297/224.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'lr-0',
        title: 'Lenin Ram\u00edrez',
        subtitle: 'Artista',
        image: leninRamirezImage,
        isArtist: true,
      },
    ],
  },
  {
    title: 'Neton Vega',
    items: [
      {
        id: 'nv-1',
        title: 'LA PATRULLA',
        subtitle: 'Peso Pluma, Neton Vega',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3d/e9/65/3de9651e-fe11-0525-7eee-762861af1152/198391808319.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'nv-2',
        title: 'Aguas',
        subtitle: 'Luis R Conriquez, Neton Vega, Rey Quinto',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a2/01/2e/a2012e37-c170-588d-b720-6f3e9b6424c8/196874018682.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'nv-0',
        title: 'Neton Vega',
        subtitle: 'Artista',
        image: netonVegaImage,
        isArtist: true,
      },
    ],
  },
  {
    title: 'Los Dareyes De La Sierra',
    items: [
      {
        id: 'dd-1',
        title: 'MATCHA',
        subtitle: 'Dareyes de la Sierra',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c1/04/7c/c1047c60-2534-12cc-4f4e-b3f290b81317/820200587084.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'dd-2',
        title: 'Frecuencia',
        subtitle: 'Dareyes de la Sierra',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d8/c0/e9/d8c0e92f-0976-18e1-066d-dc1446234136/199350238130.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'dd-3',
        title: 'Vita Fer',
        subtitle: 'Dareyes de la Sierra, Tito Double P',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ac/fc/03/acfc03c4-9376-037e-dfc8-4d8356dcbf82/199350128523.jpg/300x300bb.jpg',
        isArtist: false,
      },
      {
        id: 'dd-0',
        title: 'Los Dareyes De La Sierra',
        subtitle: 'Artista',
        image: dareyesImage,
        isArtist: true,
      },
    ],
  },
  {
    title: 'Artistas mexicanos',
    items: [
      {
        id: 'art-1',
        title: 'Natanael Cano',
        subtitle: 'Artista',
        image: natanaelCanoImage,
        isArtist: true,
      },
      {
        id: 'art-2',
        title: 'Tito Double P',
        subtitle: 'Artista',
        image: titoDoublePImage,
        isArtist: true,
      },
      {
        id: 'art-3',
        title: 'Junior H',
        subtitle: 'Artista',
        image: juniorHImage,
        isArtist: true,
      },
      {
        id: 'art-4',
        title: 'Fuerza Regida',
        subtitle: 'Artista',
        image: fuerzaRegidaImage,
        isArtist: true,
      },
      {
        id: 'art-5',
        title: 'Lenin Ram\u00edrez',
        subtitle: 'Artista',
        image: leninRamirezImage,
        isArtist: true,
      },
      {
        id: 'art-6',
        title: 'Neton Vega',
        subtitle: 'Artista',
        image: netonVegaImage,
        isArtist: true,
      },
      {
        id: 'art-7',
        title: 'Los Dareyes De La Sierra',
        subtitle: 'Artista',
        image: dareyesImage,
        isArtist: true,
      },
      {
        id: 'art-8',
        title: 'Luis R Conriquez',
        subtitle: 'Artista',
        image: luisRConriquezImage,
        isArtist: true,
      },
    ],
  },
];
