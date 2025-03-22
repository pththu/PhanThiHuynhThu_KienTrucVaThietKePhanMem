package decorator;

public class Accountant implements Employee{

	@Override
	public void getDuties() {
		System.out.println("Tính tiền và nộp tiền vào tải khoản");
	}

}
