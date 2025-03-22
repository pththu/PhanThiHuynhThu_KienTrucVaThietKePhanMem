package decorator;

public class AccountantDutiesDecorator extends EmployeeDecorator{

	public AccountantDutiesDecorator(Employee employee) {
		super(employee);
	}
	
	public void getDuties () {
		super.getDuties();
		System.out.println("Thu tiền");
	}
}
