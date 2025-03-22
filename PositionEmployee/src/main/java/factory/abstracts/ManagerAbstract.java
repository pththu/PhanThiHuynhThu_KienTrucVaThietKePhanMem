package factory.abstracts;

import factory.method.EmployeeFactoryMethod;
import factory.method.ManagerMethod;

public class ManagerAbstract implements EmployeeFactoryAbstract{

	@Override
	public EmployeeFactoryMethod createEmployee() {
		return new ManagerMethod();
	}

}
