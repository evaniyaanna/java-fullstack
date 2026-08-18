public class day6 {

    public static void main(String[] args) {

        int[] a = {20, 15, 30, 10, 23};

        int total = 0;
        boolean outOfStock=false;

        for (int i = 0; i < a.length; i++) {

            if (a[i] == 0) {
                System.out.println("Out of stock");
                outOfStock = true;
                break;
            }

            total = total + a[i];
        }

        if (outOfStock==false) {

            System.out.println("Total: " + total);

            if (total < 50) {
                System.out.println("Low Stock");
            }
            else if (total <= 100) {
                System.out.println("Moderate Stock");
            }
            else {
                System.out.println("Good Stock");
            }
        }
    }
}