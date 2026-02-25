# YEARLY VACATION

Tu empresa necesita determinar los días de vacaciones anuales de cada uno de sus empleados para un año dado.

La aplicación recibe una fecha (eg: 01-06-2025) y muestra el nombre de cada empleado junto con el número respectivo de días de vacaciones para ese año.

## Requisitos

1. Cada empleado tiene por defecto **24 días de vacaciones** por año
2. Un **contrato especial puede sobrescribir** la cantidad mínima de días de vacaciones
3. Los contratos que **comienzan durante el año** obtienen 1/12 de los días de vacaciones anuales por cada mes completo
4. Cada año en la empresa otorgará **un día adicional de vacaciones**, con un máximo de **seis días extra**
5. Los empleados que tienen **40 años o más** reciben un día adicional de vacaciones por cada 5 años de antigüedad en la empresa

### Lista de empleados:

| Nombre         | Fecha de nacimiento | Inicio de contrato | Contrato especial       | Razón      |
|----------------|---------------------|--------------------|-------------------------|------------|
| Marco Gil      | 26.01.2001          | 01.01.2024         | No                      | Caso 1     |
| Marco Sanchez  | 12.07.1999          | 01.01.2024         | Si (26 días vacaciones) | Caso 2     |
| Juan Perez     | 30.12.1997          | 01.01.2025         | No                      | Caso 3     |
| Laura Martinez | 09.06.1989          | 01.01.2018         | No                      | Caso 4     |
| Ana Gonzalez   | 26.01.1966          | 01.01.2014         | No                      | Caso 4 y 5 |

Usando el año **2025** como entrada (suponiendo `01-06-2025`) deberíamos obtener:

| Nombre         | Dias totales |
|----------------|--------------|
| Marco Gil      | 24           |
| Marco Sanchez  | 26           |
| Juan Perez     | 12           |
| Laura Martinez | 30           |
| Ana Gonzalez   | 32           |
