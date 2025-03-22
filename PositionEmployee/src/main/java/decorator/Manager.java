package decorator;

public class Manager implements Employee{

	@Override
	public void getDuties() {
		System.out.println("Quản lý công ty");
	}
}
