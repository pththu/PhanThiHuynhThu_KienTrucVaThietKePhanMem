package factory.method;

public class AccountantMethod implements EmployeeFactoryMethod{

	@Override
	public void getDuites() {
		System.out.println("Tính tiền và nộp tiền vào tài khoản");
	}

}
