# Tarea 1 – Proyecto de Software Fallido (Caso: Knight Capital)

##  Proyecto de software fallido investigado
Knight Capital fue una empresa financiera de Estados Unidos dedicada al trading electrónico en la bolsa de valores. En el año 2012, la empresa sufrió uno de los fallos de software más costosos en la historia financiera.

El problema ocurrió cuando la compañía implementó una actualización en su sistema automatizado de trading. Debido a errores en el despliegue del software, el sistema comenzó a ejecutar miles de órdenes incorrectas en el mercado en cuestión de minutos. Esto generó un caos en las operaciones y causó pérdidas aproximadas de **440 millones de dólares** en menos de una hora.

Este fallo tuvo un impacto devastador para la empresa, provocando una pérdida de confianza en el sistema y finalmente contribuyendo a que la compañía fuera adquirida por otra organización.

---

## ¿En qué fase del SDLC ocurrió el fallo principal?
El fallo principal ocurrió en la fase de **Pruebas (Testing)** y también en la fase de **Implementación/Despliegue (Deployment)**.

### Razones
- No se realizaron pruebas suficientes después de la actualización del software.
- Existía código antiguo que fue activado por error.
- Hubo mala gestión de versiones en el despliegue del sistema.
- El sistema fue puesto en producción sin una validación completa de comportamiento.


---
## 4. ¿Qué herramienta de IA podría haber detectado o prevenido este fallo?
Claude (Anthropic): Gracias a su capacidad para el razonamiento complejo y la revisión de arquitecturas, Claude podría haber detectado la vulnerabilidad lógica al analizar cómo el código manejaba las interrupciones del usuario.


## Diagrama simple del SDLC marcando el punto de fallo
```text
[Planificación]
      ↓
[Análisis de Requisitos]
      ↓
[Diseño del Sistema]
      ↓
[Desarrollo / Codificación]
      ↓
[Pruebas / Testing]  ←  FALLA PRINCIPAL
      ↓
[Implementación / Despliegue]  ←  FALLO RELACIONADO
      ↓
[Mantenimiento]