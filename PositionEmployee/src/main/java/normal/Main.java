package normal;

import java.util.ArrayList;
import java.util.List;

public class Main {
	public static void main(String[] args) {
		
		List<Employee> list = new ArrayList<Employee>();
		list.add(new Employee(1, "Phan Thi Huynh Thu", Position.NHANVIEN));
		list.add(new Employee(2, "Huynh Thi Bao Tram", Position.KETOAN));
		list.add(new Employee(3, "Pham Xuan Canh", Position.GIAMDOC));
		list.add(new Employee(4, "Le Thanh Hai", Position.PHOGIAMDOC));
		
		for (Employee employee : list) {
			System.out.print(employee.getName() +":");
			DisplayDuty(employee.getPosition());
		}
	}
	
	public static void DisplayDuty (Position position) {
		if (position == Position.GIAMDOC) {
			System.out.println("Lam giam doc");
		} else if (position == Position.KETOAN) {
			System.out.println("Tinh toan tien va nop tien vao tai khoan");
		} else if (position == Position.NHANVIEN) {
			System.out.println("Pha tra, giu xe");
		} else if (position == Position.PHOGIAMDOC) {
			System.out.println("Phu trach khi giam doc di vang");
		}
	}
	
}
