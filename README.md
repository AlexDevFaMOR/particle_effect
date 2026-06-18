# Particle Effect

Sistema de animación de partículas tipo burbuja desarrollado con HTML, CSS y JavaScript puro.

El proyecto genera partículas dinámicamente y las anima a través del viewport utilizando técnicas de manipulación del DOM y animaciones CSS. Su propósito es demostrar conceptos fundamentales de desarrollo frontend, generación procedural de elementos y optimización básica de recursos en el navegador.

---

## Vista Previa

```markdown
![Preview](./src/assets/particle-effect-preview.gif)
```

---

## Características

* Generación dinámica de partículas.
* Posicionamiento aleatorio en pantalla.
* Tamaños variables para cada partícula.
* Velocidades de desplazamiento aleatorias.
* Animación continua y fluida.
* Eliminación automática de elementos al finalizar la animación.
* Implementación sin librerías externas.

---

## Tecnologías Utilizadas

| Tecnología | Uso                                |
| ---------- | ---------------------------------- |
| HTML5      | Estructura de la aplicación        |
| CSS3       | Diseño visual y animaciones        |
| JavaScript | Generación y control de partículas |

---

## Estructura del Proyecto

```text
particle-effect/
│
├── src/
│   ├── assets/particle-effect-preview.gif
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── index.html
│
├── .gitignore
└── README.md
```

---

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/AlexDevFaMOR/particle-effect.git
```

Accede al directorio:

```bash
cd particle-effect
```

Abre el archivo:

```text
src/index.html
```

en cualquier navegador moderno.

---

# Arquitectura del Proyecto

El sistema sigue una arquitectura simple basada en la separación de responsabilidades:

```text
HTML
 │
 ├── Define la estructura
 │
CSS
 │
 ├── Define apariencia y animaciones
 │
JavaScript
 │
 ├── Genera partículas
 ├── Configura propiedades aleatorias
 └── Controla el ciclo de vida
```

---

# ¿Cómo Funciona?

## Flujo General

```text
Carga de la página
        │
        ▼
Obtención del contenedor
        │
        ▼
Inicio del temporizador
(setInterval)
        │
        ▼
Creación de una burbuja
        │
        ▼
Asignación de propiedades aleatorias
        │
        ▼
Inicio de la animación CSS
        │
        ▼
La burbuja asciende
        │
        ▼
Finaliza la animación
        │
        ▼
El elemento es eliminado
```

---

## 1. Estructura HTML

La aplicación utiliza un único contenedor para almacenar todas las partículas:

```html
<div id="bubbles-container"></div>
```

Este elemento funciona como una capa dedicada exclusivamente a la animación.

Posteriormente se carga el archivo JavaScript:

```html
<script src="./js/script.js"></script>
```

---

## 2. Configuración del Contenedor

El contenedor ocupa toda la ventana del navegador:

```css
#bubbles-container {
    position: fixed;
    inset: 0;
    overflow: hidden;
}
```

### ¿Por qué usar `position: fixed`?

Permite que el sistema de partículas permanezca visible independientemente del desplazamiento de la página.

### ¿Por qué usar `overflow: hidden`?

Evita que las partículas visibles fuera del viewport generen barras de desplazamiento.

---

## 3. Creación Dinámica de Partículas

JavaScript obtiene la referencia al contenedor:

```javascript
const container =
document.getElementById("bubbles-container");
```

Cada vez que se ejecuta la función:

```javascript
createBubble();
```

se genera un nuevo elemento HTML:

```javascript
const div = document.createElement("div");
```

Posteriormente se le asigna la clase:

```javascript
div.classList.add("bubble");
```

---

## 4. Posición Aleatoria

La posición horizontal se calcula mediante:

```javascript
div.style.left =
`${Math.random() * 100}%`;
```

### Explicación

`Math.random()` genera un número entre:

```text
0.0 y 1.0
```

Multiplicarlo por 100 produce:

```text
0% a 100%
```

Esto distribuye las burbujas a lo largo de toda la pantalla.

---

## 5. Tamaño Variable

Cada burbuja recibe un tamaño diferente:

```javascript
const size =
Math.random() * 15 + 10;
```

Rango generado:

```text
10px → 25px
```

### ¿Por qué?

La variación de tamaño aporta sensación de profundidad y evita patrones repetitivos.

---

## 6. Velocidad Aleatoria

La duración de la animación se calcula mediante:

```javascript
div.style.animationDuration =
`${Math.random() * 3 + 2}s`;
```

Rango generado:

```text
2s → 5s
```

### Resultado

* Algunas partículas ascienden rápidamente.
* Otras lo hacen más lentamente.

Esto crea una animación más natural y orgánica.

---

## 7. Animación CSS

La animación principal es:

```css
@keyframes moveUp
```

### Estado Inicial

```css
0% {
    transform: translateY(0);
    opacity: 0;
}
```

La burbuja aparece desde la parte inferior.

---

### Aparición Gradual

```css
25% {
    opacity: 1;
}
```

La burbuja se vuelve visible progresivamente.

---

### Movimiento Vertical

```css
100% {
    transform: translateY(-100vh);
}
```

La partícula recorre toda la altura visible del navegador.

---

### Desaparición

```css
100% {
    opacity: 0;
}
```

La burbuja se desvanece antes de finalizar.

---

## 8. Generación Continua

El sistema inicia cuando el DOM termina de cargarse:

```javascript
window.addEventListener(
    "DOMContentLoaded",
    () => {
        setInterval(
            createBubble,
            300
        );
    }
);
```

### ¿Por qué usar DOMContentLoaded?

Garantiza que todos los elementos HTML existan antes de manipularlos.

### ¿Por qué usar setInterval?

Permite crear partículas de forma automática y constante.

Frecuencia:

```text
1 burbuja cada 300 ms
≈ 3.3 burbujas por segundo
```

---

## 9. Gestión de Memoria

Cuando una animación termina:

```javascript
div.addEventListener(
    "animationend",
    () => {
        div.remove();
    }
);
```

### ¿Por qué es importante?

Si las partículas permanecieran en el DOM:

```text
Burbuja 1
Burbuja 2
Burbuja 3
...
Burbuja 5000
```

El navegador consumiría memoria innecesariamente.

Eliminar cada partícula al finalizar evita:

* Fugas de memoria.
* Acumulación de nodos.
* Disminución del rendimiento.

---

# Conceptos de Programación Aplicados

## Frontend

* HTML semántico
* CSS Animations
* Responsive Design

## JavaScript

* Manipulación del DOM
* Eventos
* Temporizadores
* Generación procedural
* Gestión de memoria

## Arquitectura

* Separación de responsabilidades
* Modularidad de archivos
* Ciclo de vida de componentes

---

# Posibles Mejoras Futuras

* Movimiento lateral aleatorio.
* Diferentes colores de partículas.
* Efecto de interacción con el cursor.
* Configuración dinámica de parámetros.
* Uso de Canvas API.
* Optimización para grandes volúmenes de partículas.
* Sistema de partículas reutilizable como componente.

---

# Aprendizajes Obtenidos

Durante el desarrollo de este proyecto se reforzaron conocimientos relacionados con:

* Creación dinámica de elementos HTML.
* Uso de animaciones CSS.
* Eventos del navegador.
* Manipulación del DOM.
* Optimización básica de recursos.
* Organización de proyectos frontend.

---

## Autor

**Geovani Alejandro Padilla Morales**

Ingeniero en Diseño de Software y Redes

Desarrollador enfocado en tecnologías web, automatización, robótica y desarrollo de software.
