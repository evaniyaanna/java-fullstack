interface vehicle{
    public void start();
    public void stop();
}

interface fuelBased{
    public void refuel();
}

class car implements vehicle,fuelBased{
    public void start(){
        System.out.println("Car engine started.");
    }
    public void stop(){
        System.out.println("Car engine stopped.");
    }
    public void refuel(){
        System.out.println("Car is refueling at the station.");
    }
}

class ElectricScooter implements vehicle {
        public void start(){
            System.out.println("Electric scooter powered on");
        }
        public void stop(){
            System.out.println("Electric scooter powered off.");
        }

}

public class RentalSystem{
    public static void main(String[] args){
        car c=new car();
        ElectricScooter es=new ElectricScooter();
        System.out.println("car:");
        c.start();
        c.stop();
        c.refuel();
        System.out.println("electric scooter:");
        es.start();
        es.stop();

    }
}

