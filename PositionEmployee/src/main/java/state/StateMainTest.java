package state;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import normal.Employee;
import normal.Position;

public class StateMainTest {
	public static void main(String[] args) {
		List<NhanVien> list = new ArrayList<NhanVien>();
		list.add(new NhanVien(1, "Phan Thi Huynh Thu", new StateNhanVien()));
		list.add(new NhanVien(2, "Huynh Thi Bao Tram", new StateKeToan()));
		list.add(new NhanVien(3, "Pham Xuan Canh", new StateGiamDoc()));
		list.add(new NhanVien(4, "Le Thanh Hai", new StatePhoGiamDoc()));
		
		for (NhanVien nhanVien : list) {
			System.out.print(nhanVien.getName()+": ");
			nhanVien.showDuty();
		}
	}
}
