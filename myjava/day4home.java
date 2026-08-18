import java.util.Scanner;
public class day4home {
    public static void main(String[]args){
        Scanner s=new Scanner(System.in);
        System.out.println("enter the usercode A-admin,S-student,G-guest");
        char usercode=s.next().charAt(0);
        System.out.println("enter the password");
        int password=s.nextInt();
        System.out.println("enter the role ID 1-admin,2-student,3-guest");
        int id=s.nextInt();
        if((usercode=='A')&& (password==1234) &&(id==1)){
            System.out.println("Welcome Admin. Full access granted");
        }
        else if(usercode == 'S' && password == 1111 && id == 2){
            System.out.println("Welcome Student. Limited access granted.");
        }
        else if(id==3){
            System.out.println("Welcome Guest. View-only access.");
        }
        else
            System.out.println("nvalid credentials or role");
    }
}
