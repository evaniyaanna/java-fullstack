package registration;

import java.util.Scanner;

public class WelcomeForm {

	public static void main(String[] args) {
		// Create Scanner object to get input from the user
	        Scanner input=new Scanner(System.in);
	        // Ask the user to enter their first name
	        System.out.println("enter your first name");
	        String name=input.nextLine();
	        // ask user to enter their age
	        System.out.println("enter your age");
	        int age=input.nextInt();
	        //display the welcome message with user input
	        System.out.println("welcome"+ " "+name+"\nyour age is"+" "+age+"\nthanku for registration");
	        //close scanner
	        input.close();
	}

}