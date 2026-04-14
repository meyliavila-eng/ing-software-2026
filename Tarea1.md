# Proyecto de Software Fallido (Caso: Therac-25)

El **Therac-25** fue una máquina de radioterapia controlada por computadora producida por **Atomic Energy of Canada Limited (AECL)** en la década de 1980. Entre **1985 y 1987**, la máquina provocó varios incidentes donde los pacientes recibieron **sobredosis masivas de radiación** (hasta **100 veces** la dosis prescrita), lo que resultó en **muertes** y **lesiones graves**.

El problema principal fue una **condición de carrera (race condition)** en el software. Si el operador realizaba una secuencia específica de comandos en el teclado muy rápidamente (menos de **8 segundos**), el software activaba el **haz de electrones de alta potencia** sin colocar el **escudo protector** en su lugar.

---

## ¿En qué fase del SDLC ocurrió el fallo principal?

El fallo ocurrió principalmente en las fases de **Diseño** e **Implementación**, pero falló críticamente en la fase de **Pruebas (Testing)**.

**Causa:**  
El software se basó en código de modelos anteriores (**Therac-6** y **Therac-20**) que tenían hardware de seguridad físico. Los ingenieros eliminaron los bloqueos físicos y confiaron totalmente en el software sin realizar pruebas de estrés sobre la velocidad de entrada del usuario.

---

## ¿Qué herramienta de IA podría haber detectado o prevenido este fallo?

Una herramienta como **Claude** o **GPT-4**  podría haber detectado este tipo de fallo.

Al proporcionarle la arquitectura del sistema, estas IAs son buenas identificando **condiciones de carrera** y fallos de lógica concurrente que pueden ser difíciles de notar para un humano. También podría haber recomendado que confiar únicamente en el software para la seguridad representaba un **riesgo crítico**.

---

## Diagrama simple del SDLC marcando el punto de fallo
```text
[Planificación]
      ↓
[Análisis de Requisitos]
      ↓
[Diseño del Sistema]  ←  FALLO TÉCNICO (seguridad mal diseñada)
      ↓
[Desarrollo / Codificación]  ←  FALLO TÉCNICO (condicion de carrera)
      ↓
[Pruebas / Testing]  ←  FALLA PRINCIPAL (no detectaron el error)
      ↓
[Implementación / Despliegue]
      ↓
[Mantenimiento]