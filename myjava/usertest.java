
abstract class user{
    abstract void showMessage();

    public void displayUserType(){
        System.out.println("User type selected");
    }

}
class  AdminUser extends user{
    public void showMessage(){
        System.out.println("Welcome, Admin!");
    }
}

class GuestUser extends user{
    public void showMessage(){
        System.out.println("Welcome, Guest!");
    }
}

public class usertest{
    public static void main(String[] args){
        AdminUser ad=new AdminUser();
        GuestUser gs=new GuestUser();

        System.out.println("AdminUser");
        ad.displayUserType();
        ad.showMessage();

        System.out.println("GuestUser");
        gs.displayUserType();
        gs.showMessage();
    }
}