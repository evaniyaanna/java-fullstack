import java.util.Scanner;

abstract class ride{
    abstract int calculateFare(int distance);

    public void rideType(){
        System.out.println("Generic Ride");
    }
}

class autoride extends ride{
    public int calculateFare(int distance){
        return distance*10;
    }

    public void rideType(){
        System.out.println("Auto Ride");
    }
}

class carride extends ride{
    public int calculateFare(int distance){
        return distance*20;
    }

    public void rideType(){
        System.out.println("Car Ride");
    }
}

public class BookingApp {
    public static void main(String[] args){
        Scanner s=new Scanner(System.in);

        System.out.println("enter the ride type(car/auto");
        String type=s.nextLine();

        System.out.println("enter the distance");
        int dis=s.nextInt();
        ride r=null;
        if(type.equalsIgnoreCase("auto")){
            r = new autoride();
        }
        else if(type.equalsIgnoreCase("car")){
            r=new carride();
        }
        else{
            System.out.println("invalid type");
        }

        r.rideType();

        int fare=r.calculateFare(dis);
        System.out.println("total fare="+fare);
    }

}