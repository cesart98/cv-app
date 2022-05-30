import '../styles/CVForm.css'

export default function CVForm(props) {
  return (
    <form>
      <h1>CV Form</h1>
      <p>Required fields are followed by *.</p>

      <section onChange={(e) => props.handleChange('personal', e)}>
        <h2>Personal Information</h2>
        <label htmlFor='name'>
          Name: <input type='text' id='name' name='name'></input>
        </label>
        <label htmlFor='email'>
          Email: <input type='email' id='email' name='email'></input>
        </label>
        <label htmlFor='phone'>
          Phone: <input type='tel' id='phone' name='phone'></input>
        </label>
      </section>

      <section onChange={(e) => props.handleChange('education', e)}>
        <h2>Education Information</h2>
        <label htmlFor='school'>
          School: <input type='text' id='school' name='school'></input>
        </label>
        <label htmlFor='degree'>
          Degree: <input type='text' id='degree' name='degree'></input>
        </label>
        <label htmlFor='degree-date'>
          Date: <input type='month' id='degree-date' name='degree-date'></input>
        </label>
      </section>

      <section onChange={(e) => props.handleChange('work', e)}>
        <h2>Work Information</h2>
        <label htmlFor='company'>
          Company: <input type='text' id='company' name='company'></input>
        </label>
        <label htmlFor='position'>
          Position: <input type='text' id='position' name='position'></input>
        </label>
        <label htmlFor='task'>
          Task: <input type='text' id='task' name='task'></input>
        </label>
        <label htmlFor='start-date'>
          Start Date: <input type='month' id='start-date' name='start-date'></input>
        </label>
        <label htmlFor='end-date'>
          End Date: <input type='month' id='end-date' name='end-date'></input>
        </label>

      </section>

      <button type='submit'>Submit</button>

    </form>
  );
}