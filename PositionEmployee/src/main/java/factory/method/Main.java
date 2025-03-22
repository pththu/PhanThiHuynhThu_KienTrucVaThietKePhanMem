package factory.method;

public class Main {
	public static void main(String[] args) {
		EmployeeFactoryMethod manager01 = EmployeeFactory.createEmployee("Manager");
		EmployeeFactoryMethod manager02 = EmployeeFactory.createEmployee("Accountant");
		EmployeeFactoryMethod manager03 = EmployeeFactory.createEmployee("Employee");
		
		manager01.getDuites();
		manager02.getDuites();
		manager03.getDuites();
	}
}
