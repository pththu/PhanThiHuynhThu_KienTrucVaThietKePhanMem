package singleton;

public class Company {
	
	private static Company instance = null;
	private Company () {}
	
	public static Company getInstance () {
		if (instance == null) {
			instance = new Company();
		}
		return instance;
	}
	
	public void showMessage() {
		System.out.println("Chào mừng đến công ty!");
	}
}
