package strategy;

public class EmployeeWithStrategy {
	private DutyStrategy strategy;
	
	public void setStrategy (DutyStrategy strategy) {
		this.strategy = strategy;
	}
	
	public void executeDuties () {
		if (strategy != null) 
			strategy.execute();
	}
}
