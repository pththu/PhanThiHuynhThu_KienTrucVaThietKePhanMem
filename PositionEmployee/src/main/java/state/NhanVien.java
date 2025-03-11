package state;

public class NhanVien {
	private int id;
	private String name;
	private StateChucVu stateChucVu;
	public NhanVien() {
		super();
	}
	public NhanVien(int id, String name, StateChucVu stateChucVu) {
		super();
		this.id = id;
		this.name = name;
		this.stateChucVu = stateChucVu;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public StateChucVu getStateChucVu() {
		return stateChucVu;
	}
	public void setStateChucVu(StateChucVu stateChucVu) {
		this.stateChucVu = stateChucVu;
	}
	
	public void showDuty() {
		stateChucVu.inNhiemVu();
	}
	
	@Override
	public String toString() {
		return "NhanVien [id=" + id + ", name=" + name + ", stateChucVu=" + stateChucVu + "]";
	}
	
	
}
