
   interface animal{
    public void makeSound();
    public void move();
   }
    class bird implements animal{
    public void makeSound(){
        System.out.println("chirp");
    }
    public void move(){
        System.out.println("fly");
    }
   }

    class dog implements animal{
    public void makeSound(){
        System.out.println("bark");
    }
    public void move(){
        System.out.println("run");
    }
   }

   public class zoo{
    public static void main(String[] args){
        bird b=new bird();
        dog d=new dog();
        System.out.println("bird:");
        b.makeSound();
        b.move();
        System.out.println("dog:");
        d.makeSound();
        d.move();
    }
   }
    

