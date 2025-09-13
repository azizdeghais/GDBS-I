import styled from 'styled-components'

function App() {
  const Title = styled.h3`
  display: block;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 24px;
  `;
  const RequestButton = styled.button`
  flex:1 0 20%;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 3px;
  width: 150px;
  height: 50px;
  border:none;
  letter-spacing: 2px;
  font-family: sans-serif;
  `;
  const SQLAnfragen = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-items: center;
  `;

  const View = styled.div`
  display:flex;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  `;
  return (
    <div>
    <Title>Grundlagen von Datenbanksystem Projekt - 2025</Title>
    <Title>Dashboard</Title>
    <SQLAnfragen>
      <RequestButton>Fetch 10 Courses</RequestButton>
      <RequestButton>Fetch Member with role "Student"</RequestButton>
      <RequestButton>Fetch Member with role "Teacher"</RequestButton>
      <RequestButton>Fetch Nearest Upcoming Course</RequestButton>
      <RequestButton>Fetch User with Role "Admin"</RequestButton>
      <RequestButton>Fetch Random Student with property "Unpaid"</RequestButton>
      <RequestButton>Fetch Hybrid Courses</RequestButton>
      <RequestButton>Fetch Staff member that is enrolled in course</RequestButton>
      <RequestButton>Fetch How many language courses in total</RequestButton>
      <RequestButton>Fetch X</RequestButton>
    </SQLAnfragen>
    <View>View</View>
    </div>
  )
}

export default App
