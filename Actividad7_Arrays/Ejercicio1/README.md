Definir un constructor para objetos Carta que reciba como parámetro la posición de la carta en la baraja
como un valor entre 0 y 39 donde 0 representará el As de Oros, 1 el Dos de Oros hasta el 39 que será el
Rey de Bastos

Definir en dicha clase los siguientes métodos:

valor : Debe retornar el valor de la carta ( 2 (Dos), 3 (Tres)... 10 (Rey) y 11 (As))
valorTexto : Similar pero retornando el nombre de la carta (de As a Rey)
palo : Debe retornar el palo de la carta (Oros...)

NOTA: Emplear una matriz (dentro del constructor) para los nombres de las cartas ("As", "Dos", "Tres"...) y
otra para los palos ("Oros", "Copas",...)

Además, si un objeto de la clase se emplea como un string deberá retornar el nombre completo de la carta
(As de Oros, Siete de Copas...) y si se emplea como un número el valor de la misma

Definir otro constructor llamado Baraja que defina una matriz para almacenar las 40 cartas de la baraja.

Tendrá los siguientes métodos:

inicializar : Creará una nueva baraja con las 40 cartas (se llamará en el propio constructor para que
al crear un objeto Baraja tengamos ya la baraja inicializada)
ordenar : Ordenará la baraja en base a su posición (primero oros, luego copas, ...)
mezclar : Mezclará las cartas de la baraja. Para ello emplearemos el método sort pero con un valor aleatorio que más o menos en la mitad de las comparaciones retorne un 1 y la otra mitad un -1
mano(num) : Extraerá el número de cartas indicadas del principio de la baraja
Si se usa la baraja como un string deberá retornar sus elementos unidos por un carácter de salto
de línea (\n)

Con estos objetos realizar las siguientes funciones:

Crear una baraja y mostrarla por pantalla
Mezclar las cartas y volverla a mostrar
Coger una mano de 5 cartas y mostrar su valor total (suma de sus valores)
Coger otra mano de 5 cartas e indicar cuál de las dos tiene más valor
Juntar las dos manos y mostrar por pantalla todos los oros
Convertir una matriz de enteros en una matriz de Cartas (los enteros son las posiciones de las
cartas en la baraja)

NOTA: Emplear los métodos de las matrices (map, sort, filter...) siempre que sea posible.
