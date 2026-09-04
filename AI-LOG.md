# Bitácora de Auditoría de IA (AI-LOG) - Semana 2
**Estudiante:** Denilson Cuello Palmezano y Luis Nuñez Cuello
**Fecha:** 02/09/2026

---

## 1. Prompt de Configuración Utilizado

> Actúa como un experto en desarrollo móvil con React Native y Expo SDK 57. Antes de escribir cualquier código, revisa la documentación oficial versionada (https://docs.expo.dev/versions/v57.0.0/) y respeta las convenciones actuales del framework. Prefiere los componentes modernos como `Pressable`, `SafeAreaView` y `ScrollView`, y utiliza estilos con NativeWind en lugar de `StyleSheet.create()`. Cuando sugieras código, asegúrate de que sea compatible con la versión instalada y evita APIs o componentes en desuso. Da explicaciones breves y código funcional.

---

## 2. Peticiones Realizadas (Prompts)
* **Prompt 1 (Audio real):** "Quiero que el reproductor reproduzca el audio real de cada canción. Tengo 12 archivos MP3 en assets/Music/ que corresponden a las canciones de la app. Usa expo-audio para crear un reproductor funcional con play, pausa, siguiente, anterior y avance automático cuando termine la canción."
* **Prompt 2 (Canciones nuevas):** "Agrega 4 canciones nuevas a la biblioteca: Mar Azul, Por Amarte Así, La Cherokee y CR7, todas de Natanael Cano. Cada una con su portada de álbum y su archivo de audio MP3 correspondiente."
* **Prompt 3 (Corrección de imágenes):** "Las 4 canciones nuevas tienen la misma imagen de portada. Corrige las imágenes para que cada canción tenga la portada de su álbum o single real."

---

## 3. Análisis Crítico y Correcciones (Auditoría)
* **¿La IA cometió algún error o usó código en desuso?**
  Sí. Inicialmente la IA implementó el reproductor con `useAudioPlaylist` de expo-audio, que resultó no funcionar correctamente con archivos MP3 locales via `require()`. Al seleccionar una canción no se reproducía nada. Además, el componente `SongItem` creaba objetos `Song` sin el campo `audio`, por lo que la función `playSong` descartaba la reproducción al no encontrar el archivo de audio. La IA también intentó usar `useAudioPlaylist` con `skipTo()` y `play()` secuenciales, lo que generaba un `AbortError` en el navegador porque `replace()` interrumpía el `play()` anterior. Se corrigió cambiando a `useAudioPlayer` con `replace()` y un `setTimeout` para dar tiempo al reproductor.

* **¿Qué aprendiste de la sugerencia que te dio la IA?**
  Aprendí que los hooks de audio como `useAudioPlaylist` pueden tener limitaciones sutiles en web y que es importante verificar que los objetos que se pasan entre componentes contengan todos los campos necesarios (como `audio`). También entendí que el manejo de estados asíncronos en reproductores de audio requiere refs para evitar carreras de condiciones, y que los errores `AbortError` en HTMLMediaElement son cosméticos y se pueden atrapar sin afectar la funcionalidad.
