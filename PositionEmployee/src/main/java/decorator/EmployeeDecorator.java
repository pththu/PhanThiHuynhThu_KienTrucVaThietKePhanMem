package decorator;

public abstract class EmployeeDecorator implements Employee{
	protected Employee decoratedEmployee;
	
	public EmployeeDecorator(Employee employee) {
		this.decoratedEmployee = employee;
	}
	
	public void getDuties () {
		decoratedEmployee.getDuties();
	}
}
