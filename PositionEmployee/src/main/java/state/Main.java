package state;

import java.util.ArrayList;
import java.util.List;


public class Main {
	public static void main(String[] args) {
		List<Employee> list = new ArrayList<Employee>();
		list.add(new Employee(1, "Phan Thi Huynh Thu", new StateEmployee()));
		list.add(new Employee(2, "Huynh Thi Bao Tram", new StateAccountant()));
		list.add(new Employee(3, "Pham Xuan Canh", new StateManager()));
		list.add(new Employee(4, "Le Thanh Hai", new StateVice()));
		
		for (Employee employee : list) {
			System.out.print(employee.getName()+": ");
			employee.getDuties();
		}
	}
}
