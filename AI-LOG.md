# 🤖 Bitácora de Auditoría de IA (AI-LOG) - Semana 1
**Estudiante:** Denilson Cuello Palmezano y Luis Nuñez Cuello
**Fecha:** 02/09/2026

---

## 1. Prompt de Configuración Utilizado

> Actúa como un experto en desarrollo móvil con React Native y Expo SDK 57. Antes de escribir cualquier código, revisa la documentación oficial versada (https://docs.expo.dev/versions/v57.0.0/) y respeta las convenciones actuales del framework. Prefiere los componentes modernos como `Pressable`, `SafeAreaView` y `ScrollView`, y utiliza estilos con NativeWind en lugar de `StyleSheet.create()`. Cuando sugieras código, asegúrate de que sea compatible con la versión instalada y evita APIs o componentes en desuso. Da explicaciones breves y código funcional.

---

## 2. Peticiones Realizadas (Prompts)
* **Prompt 1 (Interfaz):** "Se crearon las pantallas necesarias para simular el ambiente que ofrece Spotify: una pantalla de inicio con buscador funcional, una franja de nuevo lanzamiento, un carrusel de tendencias, una biblioteca y una pantalla de perfil de usuario con foto circular, nombre, seguidores, seguidos y playlists. Utiliza imágenes locales para los perfiles, imágenes remotas para las portadas y banners, y componentes `Pressable` con estados de opacidad para la interacción."
* **Prompt 2 (TypeScript):** "Crea las interfaces de TypeScript necesarias para modelar los datos de la aplicación: una interfaz `Song` con campos como título, artista y portada; una interfaz `Playlist` que contenga un arreglo de canciones; y una interfaz `Profile` que incluya nombre de usuario, foto, contador de seguidores, contador de seguidos y playlists. Escríbelas de forma tipada y reutilizable para que el resto del proyecto las consuma sin errores."

---

## 3. Análisis Crítico y Correcciones (Auditoría)
* **¿La IA cometió algún error o usó código en desuso?**
  Sí. En una primera versión de la pantalla de perfil, la IA intentó importar `TouchableOpacity` de `react-native` para los botones de interacción, un componente que actualmente se considera menos recomendado que `Pressable`. Detecté esto al recordar los requisitos de la actividad y le pedí que ajustara el componente para seguir las mejores prácticas, sustituyéndolo por `Pressable` con estados de opacidad. Además, revisé que los estilos se aplicaran mediante NativeWind y no con `StyleSheet.create()`, corrigiendo algunas clases que la IA había propuesto de forma repetida e innecesaria.

* **¿Qué aprendiste de la sugerencia que te dio la IA?**
  Aprendí que es importante validar siempre las sugerencias de la IA contra la versión exacta del framework (en este caso Expo SDK 57), ya que la IA puede proponer componentes o APIs funcionales pero obsoletos. También entendí la ventaja de separar los datos en interfaces de TypeScript bien tipadas, lo que hace el código más seguro, mantenible y fácil de expandir. Finalmente, reforcé el uso de componentes accesibles y modernos como `Pressable` frente a alternativas antiguas.
