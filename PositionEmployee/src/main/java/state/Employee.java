package state;

public class Employee {
	private int id;
	private String name;
	private StatePosition position;

	public Employee() {
		super();
	}

	public Employee(int id, String name, StatePosition position) {
		super();
		this.id = id;
		this.name = name;
		this.position = position;
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

	public StatePosition getPosition() {
		return position;
	}

	public void setPosition(StatePosition position) {
		this.position = position;
	}

	public void getDuties() {
		position.getDuties();
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", position=" + position + "]";
	}

}
