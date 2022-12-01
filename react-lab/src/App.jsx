import './App.css'

const data = [
  { firstName: "John", lastName: "Silver", occupation: "PirateCaptain" },

]
  
function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Occupation</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.occupation}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default App
