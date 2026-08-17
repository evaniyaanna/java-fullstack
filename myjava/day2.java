public class day2 {

	public static void main(String[] args) {
		int noOfBooks=3;
		int price=275;
		double total=price*noOfBooks;
		System.out.println("no of books="+noOfBooks+"\nprice per book="+price);
		System.out.println(" total price="+total);
		int discount=10;
		double dis=discount;
		double discounttotal=(dis/100)*total;
		double finalamt=total-discounttotal;
		System.out.println("final amount after discount="+finalamt);
		
	}

}
