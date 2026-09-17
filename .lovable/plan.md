## Correcciones al quiz

### 1. Imágenes nuevas a copiar a `src/assets/quiz/`
- `user-uploads://ChatGPT_Image_20_05_2026_21_39_12.png` → `gender-male-new.png` (hombre con etiqueta HOMBRE, reemplaza el actual masculino en la pregunta de género — quitando el fondo negro mostrándolo sobre el fondo blanco del quiz vía `mix-blend-mode: multiply` o recorte CSS, ya que la imagen viene con fondo negro)
- `user-uploads://imgi_1_*.webp` → `body-regular.webp` (cuerpo "Regular")
- `user-uploads://imgi_2_*.webp` → `body-barriga.webp` (cuerpo "Con barriguita")
- `user-uploads://imgi_3_*.webp` → `body-sobrepeso.webp` (cuerpo "Sobrepeso")
- `user-uploads://ChatGPT_Image_20_05_2026_21_56_23.png` → `como-funciona.png` (diagrama "Cómo funciona la Gelatina Mounjaro")
- `user-uploads://ChatGPT_Image_20_05_2026_22_01_49.png` → `antes-despues-maria.png` (testimonio Maria)
- `user-uploads://Screenshot_2026-05-20_214041.png` → `fat-areas-man.png` (hombre parado para "¿Dónde deseas eliminar grasa primero?")

### 2. Cambios por pantalla en `src/routes/index.tsx`

**Paso "¿Cuál es tu objetivo con tu cuerpo?"**  
Replicar exactamente el layout del screenshot adjunto: título centrado en negro bold, subtítulo subrayado "Elige tus mayores intereses abajo:", grid de **2 columnas** de tarjetas rosadas con checkbox a la derecha, botón "CONTINUAR" rosa fucsia full-width abajo. Sin barra de progreso visible en esta pantalla (igual al screenshot).

**Paso "¿Dónde deseas eliminar grasa primero?"**  
Usar `fat-areas-man.png` a la izquierda + columna de opciones a la derecha (Brazos, Pechos, Abdominales, Glúteos, Muslos), tal como en el screenshot enviado. Layout 2 columnas: imagen | opciones apiladas.

**Paso género (Hombre/Mujer)**  
Reemplazar imagen masculina con la nueva `gender-male-new.png`. Para neutralizar el fondo negro de la imagen sobre el card blanco/rosa del quiz, aplicar `mix-blend-mode: screen` o recortar el fondo via filtro CSS — el resultado debe verse limpio sobre el fondo blanco del quiz (no quedar el cuadro negro).

**Paso "¿Cuántos kilos deseas perder?"**  
Las 4 opciones (5-10kg, 10-15kg, 15-20kg, "No estoy seguro/a") deben usar **la MISMA balanza** (`scale-20kg.png`) para las 3 primeras, y `scale-unknown.png` (con interrogación) sólo en la última. Actualmente uso 2 imágenes distintas — corregir.

**Paso tipo de cuerpo (Regular / Barriguita / Sobrepeso)**  
Reemplazar el sprite combinado `body-types.png` por las 3 imágenes individuales nuevas (`body-regular.webp`, `body-barriga.webp`, `body-sobrepeso.webp`) — una por card.

**Paso "¡Nuestro protocolo lo resuelve por ti!"**  
Insertar `como-funciona.png` (diagrama de flujo Tú → Gelatina → quema → objetivo) como imagen principal de esta pantalla, debajo del texto "La Gelatina Mounjaro actúa mientras duermes…".

**Nuevo paso "Historias Reales de Transformación"** (insertar **después** de "¿qué beneficios te gustaría tener?", **antes** del paso de altura)  
Contenido:
- Título: `🔥 ¡Historias Reales de Transformación! 🔥`
- Imagen: `antes-despues-maria.png` centrada
- Subtítulo: `📍 Testimonio: María Concepción – Buenos Aires, Argentina`
- Párrafo: *"Ya había intentado de todo para adelgazar, pero nada funcionaba. Después de incluir la fórmula de la Gelatina Mounjaro en mi rutina, ¡perdí 16kg sin cambiar nada en mi alimentación! Lo más increíble es que mi hambre y ansiedad disminuyeron naturalmente."*
- Botón: `Continuar`

Eliminar/ajustar el paso genérico que actualmente ocupa esa posición.

**Nuevo paso "¿Cuál es tu peso deseado?"** (insertar **después** del paso de altura)  
Mismo componente slider que altura, pero:
- Título: `¿Cuál es tu peso deseado?`
- Subtítulo: `¡Estamos casi ahí! Vamos a ajustar tu plan según tu cuerpo.`
- Toggle: `kg | lb`
- Texto guía: `Arrastra para ajustar`
- Rango: 40–150 kg, default 60
- Pie: `Basado en esto, ajustaremos la dosis ideal para los mejores resultados!`
- Botón: `Continuar`

(El slider de peso *actual* ya existente se mantiene; este es un slider adicional de peso **deseado**.)

### 3. Otros ajustes globales
- Confirmar que **todas** las pantallas con grids de opciones usen `grid-cols-2` en móvil/desktop (no una sola columna), como el screenshot de "objetivo".
- Botón "CONTINUAR" en mayúsculas, full-width, fucsia sólido con sombra suave — igual al screenshot.
- Botón "atrás" en header se mantiene.

### Archivos a modificar
- `src/routes/index.tsx` (todas las pantallas afectadas + nuevo paso testimonio + nuevo paso peso deseado + recálculo del array `steps`/diagnóstico para incluir `pesoDeseado`).
- `src/styles.css` (utilidad para neutralizar fondo negro en imagen de hombre, ej. clase `.blend-on-white { mix-blend-mode: multiply; }` o equivalente).
- Copiar 7 imágenes nuevas a `src/assets/quiz/`.

### Pendiente del usuario
- Links reales de VSL 1, VSL 2 y URL de checkout (siguen como constantes en el tope del archivo).
