package com.generation;
import java.util.Scanner; //Importar

public class Codigo4 {

      public static void main(String[] args) {

    Scanner s = new Scanner(System.in) //Agregar System.in
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    String j1 = s.nextLine();
    
    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): "); //Cambiar a jugador 2
    Scanner s2 = new Scanner();
    String j2 = s.nextLine();
    
    if (j1 == j2) {  //Quitar parentesis de más
      System.out.println("Empate");
    } else {
      int g = 2;
      switch(j1) {
        case "piedra":
          if (j2 == "tijeras") {
            g = 1;
          }

        case "papel":
          if (j2 == "piedra") {
            g = 1;
          }//Cerrar corchete

        case "tijera":
          if (j2.equals("papel")) {
            g = 1;
          }
          break;
        default:
      }
      System.out.println("Gana el jugador " + g);
    }
  
  
}} //Hacen falta dos corchetes

//Ya funciona pero una lógica por ahí anda mal