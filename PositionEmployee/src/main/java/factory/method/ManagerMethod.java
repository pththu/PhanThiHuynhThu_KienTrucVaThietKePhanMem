package factory.method;

public class ManagerMethod implements EmployeeFactoryMethod{

	@Override
	public void getDuites() {
		System.out.println("Quản lý công ty");
	}

}
