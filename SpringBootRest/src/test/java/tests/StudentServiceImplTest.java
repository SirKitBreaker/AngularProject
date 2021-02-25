package tests;
import javax.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import com.cg.student.entities.Student;
import com.cg.student.service.IStudentService;
import com.cg.student.service.StudentServiceImpl;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
@ExtendWith({SpringExtension.class})
@DataJpaTest
@Import(StudentServiceImpl.class)
@AutoConfigureTestDatabase(replace=AutoConfigureTestDatabase.Replace.NONE)
public class StudentServiceImplTest {
	@Autowired
	private IStudentService service;
	@Autowired
	private EntityManager entityManager;	
	@Test
	public void testFindById() {
		Student stud = new Student("Ashok","Mahajan",23);
		entityManager.persist(stud);
		Integer id = stud.getId();
		Student studFound = service.findById(id);
		Assertions.assertEquals(studFound.getFirstName(), "Ashok");
	}
	@Test
	public void testRegister() {
		Student stud = new Student("Prachi","Ranjan",21);
		Student studSaved = service.register(stud);
		System.out.println("saved: "+ studSaved);
		Assertions.assertEquals(stud.getFirstName(), studSaved.getFirstName());
	}
}
