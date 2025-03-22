package strategy;

public class Main {
	public static void main(String[] args) {
		EmployeeWithStrategy strategyEmployee = new EmployeeWithStrategy();
        strategyEmployee.setStrategy(new DirectorStrategy());
        strategyEmployee.executeDuties();
	}
}
