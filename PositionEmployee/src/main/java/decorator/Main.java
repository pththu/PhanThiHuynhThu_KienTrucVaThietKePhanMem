package decorator;

public class Main {
	public static void main(String[] args) {
		Employee baseEmployee = new Accountant();
		Employee decoratedEmployee = new AccountantDutiesDecorator(baseEmployee);
		decoratedEmployee.getDuties();
	}
}
