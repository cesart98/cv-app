import '../styles/CVForm.css'

export default function CVForm() {
  return (
    <form>
      <h1>CV Form</h1>
      <p>Required fields are followed by *.</p>


      <label for='name'>
        Name: <input type='text' id='name' name='name'></input>
      </label>
      <label for='email'>
        Email: <input type='email' id='email' name='email'></input>
      </label>
      <label for='phone'>
        Phone: <input type='tel' id='phone' name='phone'></input>
      </label>

      <label for='school'>
        School: <input type='text' id='school' name='school'></input>
      </label>
      <label for='degree'>
        Degree: <input type='text' id='degree' name='degree'></input>
      </label>
      <label for='degree-date'>
        Date: <input type='month' id='degree-date' name='degree-date'></input>
      </label>

      <label for='company'>
        Company: <input type='text' id='company' name='company'></input>
      </label>
      <label for='position'>
        Position: <input type='text' id='position' name='position'></input>
      </label>
      <label for='task'>
        Task: <input type='text' id='task' name='task'></input>
      </label>
      <label for='start-date'>
        Start Date: <input type='month' id='start-date' name='start-date'></input>
      </label>
      <label for='end-date'>
        End Date: <input type='month' id='end-date' name='end-date'></input>
      </label>
    </form>
  );
}