package factory.abstracts;

import factory.method.AccountantMethod;
import factory.method.EmployeeFactoryMethod;

public class AccountantAbstract implements EmployeeFactoryAbstract{

	@Override
	public EmployeeFactoryMethod createEmployee() {
		return new AccountantMethod();
	}

}
