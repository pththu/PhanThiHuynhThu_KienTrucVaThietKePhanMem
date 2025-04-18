package normal;

public class Employee {

	private int id;
	private String name;
	private Position position;

	public Employee() {
		super();
	}

	public Employee(int id, String name, Position position) {
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

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", position=" + position + "]";
	}

}
