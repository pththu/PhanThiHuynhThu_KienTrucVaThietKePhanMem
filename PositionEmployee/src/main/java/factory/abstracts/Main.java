package factory.abstracts;

import factory.method.EmployeeFactoryMethod;

public class Main {
	
	public static void main(String[] args) {
		EmployeeFactoryAbstract managerFactory = new AccountantAbstract();
		EmployeeFactoryMethod manager = managerFactory.createEmployee();
		manager.getDuites();
	} 
	
}
