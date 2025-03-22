package factory.method;

public class EmployeeFactory {
	
	public static EmployeeFactoryMethod createEmployee (String position) {
		switch (position) {
			case "Manager": return new ManagerMethod();
			case "Accountant": return new AccountantMethod();
			case "Employee": return new EmployeeMethod();
			default: throw new IllegalArgumentException("Không xác định");
		}
	}
	
}
