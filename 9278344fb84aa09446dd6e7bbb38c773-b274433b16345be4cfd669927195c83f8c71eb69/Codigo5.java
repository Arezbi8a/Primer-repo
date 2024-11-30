public class Codigo5 {

	public static void main(String[] arg) {   //Agregamos el static

	    Scanner s = new Scanner(System.in);//Agregamos System.in
	    System.out.print("Introduzca un número: "); //Faltan comillas
	    String ni = s.nextLine();
	    int c = Integer.parseInt(ni); //Debemos cambiar "ni" con parseInt para que c sea un int
	    
	    int afo = 0;
	    int noAfo = 0;
	    
	    while (c > 0) { //Cambiar a c todo lo que este con ni
		  int digito = (int)(c % 10);
	      if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
			afo++;
	      } else {
			noAfo++;
		  } //Necesitamos esta llave para que no sea un loop infinito
		  c /= 10;
	    }

	    if (afo > noAfo) {
	      System.out.prinln("El " + c + " es un número afortunado.");
	    } else {
	      System.out.println("El " + c + " no es un número afortunado.");
	    }
	    
	  }
	  
	}