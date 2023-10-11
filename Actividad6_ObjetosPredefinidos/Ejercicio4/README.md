Ya que estamos con los euromillones vamos a hacer una función que retorne la probabilidad de acertar los diferentes premios del sorteo.

Para ello vamos a ver los casos posibles. Para el primer premio sería la combinación de 50 posibles valores cogidos de 5 en 5 multiplicado por la combinación de 12 posibles valores cogidos de 2 en 2

Definir un método comb(m,n) que retorne las posibles combinaciones según la fórmula:

comb(50,5) à 2.118.760

comb(12,2) à 66

por lo que el número de posibles combinaciones sería 2.118.760 \* 66 à 139.838.160

Una vez que tenemos los casos posibles ahora debemos obtener los casos favorables:

5 + 2 à comb(5,5) \* comb(2,2)

5 + 1 à comb(5,5) _ comb(2,1) _ comb(10,1)

5 + 0 à comb(5,5) \* comb(10,2)

4 + 2 à comb(5,4) _ comb(45,1) _ comb(2,2)

4 + 1 à comb(5,4) _ comb(45,1) _ comb(2,1) \* comb(10,1)

4 + 0 à comb(5,4) _ comb(45,1) _ comb(10,2)

2 + 2 à comb(5,2) _ comb(45,3) _ comb(2,2)

3 + 1 à comb(5,3) _ comb(45,2) _ comb(2,1) \*comb(10,1)

3 + 0 à comb(5,3) _ comb(45,2) _ comb(10,2)

1 + 2 à comb(5,1) _ comb(45,4) _ comb(2,2)

2 + 1 à comb(5,2) _ comb(45,3) _ comb(2,1) \* comb(10,1)

2 + 0 à comb(5,2) _ comb(45,3) _ comb(10,2)

En general (podemos crear una función auxiliar):

v + e à comb(5,v) _ comb(45,(5-v)) _ comb(2,e) \* comb(10,(2-e))

Si dividimos los casos posibles entre los favorables obtendremos cuántas combinaciones posibles hay

5 + 1 à comb(5,5) _ comb(2,1) _ comb(10,1) à 20

139.838.160 / 20 à 6.991.908

Es decir, la probabilidad de acertar 5+1 es de 1 entre 6.991.908.

La salida:

La combinación 0+2 no tiene premio ¿qué probabilidad tendría? ¿tiene sentido?
