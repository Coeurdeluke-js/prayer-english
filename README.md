# Learn to Pray in English

Una aplicación web interactiva diseñada para ayudar a los miembros de La Iglesia de Jesucristo de los Santos de los Últimos Días a aprender a orar en inglés.

## 🎯 Propósito

Este proyecto nació de la necesidad de mejorar el nivel de inglés mientras se mantiene la conexión espiritual. La aplicación proporciona una estructura clara y guiada para aprender a orar en inglés, siguiendo el patrón tradicional de oración.

## 🏗️ Estructura de Oración

La aplicación enseña la estructura de oración en 4 pasos:

1. **Heavenly Father** - Dirigirse al Padre Celestial
2. **I thank thee for...** - Expresar gratitud
3. **I ask thee...** - Pedir bendiciones
4. **In the name of Jesus Christ, Amen.** - Cerrar en el nombre de Jesucristo

## ✨ Características

### 🎨 Diseño Visual
- **Colores oficiales**: #007da5, #0091b5, #01aac7
- **Navbar replicada** del sitio web oficial de la Iglesia
- **Tipografía moderna** usando Inter font
- **Diseño responsivo** para todos los dispositivos

### 🔧 Funcionalidades Interactivas
- **Constructor de oraciones paso a paso**
- **Vista previa en tiempo real** de la oración
- **Síntesis de voz** para escuchar la pronunciación
- **Navegación por teclado** (flechas izquierda/derecha)
- **Auto-guardado** del progreso
- **Efectos visuales** y animaciones suaves

### 📱 Experiencia de Usuario
- **Interfaz intuitiva** y fácil de usar
- **Navegación fluida** entre secciones
- **Feedback visual** para cada acción
- **Accesibilidad** mejorada

## 🚀 Cómo Usar

1. **Abre el archivo `index.html`** en tu navegador web
2. **Navega por las secciones** usando el menú superior
3. **Practica tu oración** en la sección interactiva
4. **Escucha la pronunciación** usando el botón de audio
5. **Guarda tu progreso** automáticamente

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos y responsivos (modular)
- **JavaScript ES6+** - Funcionalidad interactiva
- **Web Speech API** - Síntesis de voz
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografía Inter

## 🎨 Arquitectura CSS

El proyecto utiliza una arquitectura CSS modular y escalable:

### **Estructura de Archivos CSS:**
- **`main.css`** - Archivo principal que importa todos los módulos
- **`base.css`** - Variables CSS, reset, tipografía base y utilidades
- **`navigation.css`** - Estilos específicos de la barra de navegación
- **`hero.css`** - Estilos de la sección hero con animaciones
- **`components.css`** - Componentes reutilizables (botones, cards, modales, etc.)
- **`sections.css`** - Estilos específicos de cada sección de la página
- **`responsive.css`** - Media queries y adaptaciones para diferentes dispositivos

### **Beneficios de la Segmentación:**
- ✅ **Mantenibilidad** - Cada archivo tiene una responsabilidad específica
- ✅ **Escalabilidad** - Fácil agregar nuevos componentes o secciones
- ✅ **Reutilización** - Componentes modulares que se pueden reutilizar
- ✅ **Organización** - Código bien estructurado y fácil de navegar
- ✅ **Colaboración** - Múltiples desarrolladores pueden trabajar en diferentes archivos

## 📁 Estructura del Proyecto

```
prayer/
├── index.html          # Página principal
├── css/                # Estilos CSS segmentados
│   ├── main.css        # Archivo principal que importa todos los módulos
│   ├── base.css        # Estilos base, variables CSS y utilidades
│   ├── navigation.css  # Estilos de la barra de navegación
│   ├── hero.css        # Estilos de la sección hero
│   ├── components.css  # Componentes reutilizables (botones, cards, modales)
│   ├── sections.css    # Estilos específicos de secciones
│   └── responsive.css  # Media queries y diseño responsivo
├── script.js           # Funcionalidad JavaScript
├── README.md           # Documentación
└── church_jesus_christ_lowfidelity_symbol.webp  # Logo
```

## 🎨 Paleta de Colores

- **Azul Principal**: #007da5
- **Azul Medio**: #0091b5  
- **Azul Claro**: #01aac7
- **Texto**: #333333
- **Fondo**: #FFFFFF

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-blue: #007da5;
    --secondary-blue: #0091b5;
    --accent-blue: #01aac7;
}
```

### Agregar Nuevas Funcionalidades
- Modifica `script.js` para agregar nuevas interacciones
- Actualiza `index.html` para nuevos elementos
- Ajusta `styles.css` para nuevos estilos

## 🌐 Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Móviles (iOS/Android)

## 📝 Notas de Desarrollo

### Características Técnicas
- **Progressive Web App** ready
- **SEO optimizado**
- **Performance optimizado**
- **Accesibilidad WCAG 2.1**

### Próximas Mejoras
- [ ] Modo oscuro
- [ ] Más ejemplos de oraciones
- [ ] Sistema de progreso
- [ ] Exportar oraciones
- [ ] Compartir en redes sociales

## 🤝 Contribuciones

Este proyecto está abierto a contribuciones. Si tienes ideas para mejorar la aplicación, no dudes en compartirlas.

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y espirituales.

---

**Desarrollado con ❤️ para la comunidad de La Iglesia de Jesucristo de los Santos de los Últimos Días**
