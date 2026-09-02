import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class day13hw {
    public static void main(String[]args){
        Scanner s=new Scanner(System.in);
        System.out.println("enter the name");
        String name=s.nextLine();
        System.out.println("enter the email");
        String email=s.nextLine();
        System.out.println("enter the phn no");
        String phnno=s.nextLine();

        Pattern namep=Pattern.compile("[A-Z][a-zA-Z ]*");
        Matcher namem=namep.matcher(name);

        if(namem.matches()){
            System.out.println("valid name");
        }
        else{
            System.out.println("invalid name");
        }

        Pattern emailp=Pattern.compile("^[^@.][^@]*@[^@.]+\\.[^@.]+$");
        Matcher emailm=emailp.matcher(email);

        if(namem.matches()){
            System.out.println("valid email");
        }
        else{
            System.out.println("invalid email");
        }

        Pattern phnp=Pattern.compile("\\d{10}");
        Matcher phnm=phnp.matcher(phnno);

        if(namem.matches()){
            System.out.println("valid phn no");
        }
        else{
            System.out.println("invalid phn no");
        }

        s.close();
    }
    
}
