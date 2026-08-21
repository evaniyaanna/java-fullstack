import java.util.Scanner;
import java.time.LocalDateTime;

public class day7home {

    
    public static double calculateTotal(int[] prices, int[] quantities) {
        double total = 0;

        for (int i = 0; i < prices.length; i++) {
            total += prices[i] * quantities[i];
        }

        
        if (total > 500) {
            total = total - (total * 0.10);
        }

        return total;
    }

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        String[] items = {"Rice", "Sugar", "Oil", "Soap", "Milk"};
        int[] prices = {50, 40, 100, 25, 30};
        int[] quantities = new int[5];

        try {
            System.out.println("Available Items:");

            for (int i = 0; i < items.length; i++) {
                System.out.println((i + 1) + ". " + items[i]
                        + " - Rs." + prices[i] + " per unit");
            }

            
            for (int i = 0; i < items.length; i++) {
                System.out.print("Enter quantity of " + items[i] + ": ");
                quantities[i] = input.nextInt();
            }

         
            double finalAmount = calculateTotal(prices, quantities);

            System.out.println("\n----- Purchase Summary -----");

           
            double originalTotal = 0;

            for (int i = 0; i < items.length; i++) {
                double itemCost = prices[i] * quantities[i];
                originalTotal += itemCost;

                System.out.println(items[i] + " x " + quantities[i]
                        + " = Rs." + itemCost);
            }

            System.out.println("Original Total: Rs." + originalTotal);

            if (originalTotal > 500) {
                System.out.println("Discount: 10%");
                System.out.println("Final Amount: Rs." + finalAmount);
            } else {
                System.out.println("No discount applied.");
                System.out.println("Final Amount: Rs." + finalAmount);
            }

           
            System.out.println("Purchase Date & Time: "
                    + LocalDateTime.now());

        } catch (Exception e) {
            System.out.println("Invalid input! Please enter numbers only.");
        }

        input.close();
    }
}