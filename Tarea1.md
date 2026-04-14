# Proyecto de Software Fallido (Caso: Therac-25)

El **Therac-25** fue una máquina de radioterapia controlada por computadora producida por **Atomic Energy of Canada Limited (AECL)** en la década de 1980. Entre **1985 y 1987**, la máquina provocó varios incidentes donde los pacientes recibieron **sobredosis masivas de radiación** (hasta **100 veces** la dosis prescrita), lo que resultó en **muertes** y **lesiones graves**.

El problema principal fue una **condición de carrera (race condition)** en el software. Si el operador realizaba una secuencia específica de comandos en el teclado muy rápidamente (menos de **8 segundos**), el software activaba el **haz de electrones de alta potencia** sin colocar el **escudo protector** en su lugar.


## ¿Cuál fue la causa raíz?

Las causas principales fueron:

- **Reutilización de código** de modelos anteriores (**Therac-6** y **Therac-20**) sin considerar que estos dependían de **bloqueos físicos de seguridad**.
- Eliminación de mecanismos de seguridad de hardware, confiando completamente en el software.
- Falta de validación de entradas rápidas del operador.
- Manejo incorrecto de errores: el sistema mostraba mensajes confusos, haciendo que el operador creyera que era un fallo menor.

---

## ¿En qué fase del SDLC ocurrió el fallo principal?

El fallo se originó en varias fases:

### *1. Diseño del Sistema (Fallo técnico)*
El diseño permitió que el software asumiera el rol completo de seguridad, sin redundancia física.  
En sistemas médicos críticos, el diseño debe incluir mecanismos de protección independientes (*hardware + software*).

### *2. Desarrollo (Fallo técnico)*
Durante la codificación se introdujo una *condición de carrera* debido a mala sincronización en el control de eventos del sistema.

### *3. Pruebas (Falla principal)*
La falla más grave ocurrió en la fase de *pruebas*, ya que:

- No se realizaron pruebas de estrés con entradas rápidas.
- No se simularon escenarios reales de operación.
- No se detectaron errores críticos antes de ponerlo en uso clínico.

---

## ¿Qué herramienta de IA podría haber detectado o prevenido este fallo?

Modelos avanzados como **Claude** o **GPT-4** son capaces de prever este tipo de vulnerabilidades. Al analizar la arquitectura del sistema, estas herramientas destacan por identificar **condiciones de carrera** y fallos de lógica concurrente que suelen pasar desapercibidos en revisiones manuales. 

Asimismo, habrían señalado un **riesgo crítico** de diseño: la vulnerabilidad de confiar exclusivamente en el software para la seguridad, omitiendo salvaguardas físicas o redundancias.

---

## Diagrama simple del SDLC marcando el punto de fallo
```text
[Planificación]
      ↓
[Análisis de Requisitos]
      ↓
[Diseño del Sistema]  ←  FALLO TÉCNICO (seguridad mal diseñada)
      ↓
[Desarrollo ]  ←  FALLO TÉCNICO (condicion de carrera)
      ↓
[Pruebas]  ←  FALLA PRINCIPAL (no detectaron el error)
      ↓
[Implementación / Despliegue]
      ↓
[Mantenimiento]