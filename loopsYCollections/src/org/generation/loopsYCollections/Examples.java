package org.generation.loopsYCollections;

import java.util.Scanner;

public class Examples {

	public static void main(String[] args) {
		int contador = 1;
		while(contador <= 5) {
			System.out.println("Iteracion" + contador);
			contador++;
		}
		
		System.out.println("-----------------------------------------");
		//*doWhile*/
		int contadorDoWhile = 1;
		
		do {
			
			System.out.println("IteracionDoWhile" + contadorDoWhile);
			
			contadorDoWhile++;
			
		}while(contadorDoWhile <=5);
		
		System.out.println("-----------------------------------------");	
		/*For
		 * Las condiciones de los for se basan en 3 partes:
		 *1. Inicialización - > se inicializa el contador 
		 *2. Condición -> se utiliza la comparación de dos variables en el inicializador 
		 *   y la cantidad o la condicion que delimiten n de iteraciones, de preferencia se iguala =
		 *3. El incremento o actualización del contador
		 * */
		for(int i = 1; i<=5; i++) {
			System.out.println("Contador For:" + i );
			
		}
		
		/*ForEach Java
		 * utiliza la palabra reservada for, similar a coo se usa un for puro
		 * en lugar de recibir una condicional en tres partes:
		 * (inicializador; condicion; incremento),
		 * va a utilizar una estructura de parametros
		 * (TipoElemento elemento(identificadorElemento) : collection(array, ArrayList,set,map)*/
		String[] names = {"arez ", " maggy ", " alex "};
		
		String misCompañeros = "";
		
		for(String name : names) {
			
			misCompañeros += name;
		}
		
		System.out.println(misCompañeros);
		
		System.out.println("Ejercicio For---------------------------");
		
		Scanner ejercicioFor = new Scanner(System.in);
		
		System.out.println("Hola, ingresa tu nombre");
		
		String nombre = ejercicioFor.next();
		
		for(int i = 0; i<= nombre.length(); i++) {
			
			char nombreLetras = nombre.charAt(i);
			System.out.println(nombreLetras);
			
		}
		
		
	
		
	
		
		
	}

	private static String chartAt(int i) {
		// TODO Auto-generated method stub
		return null;
	}

}
