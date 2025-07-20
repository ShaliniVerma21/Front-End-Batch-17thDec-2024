import './App.css';
import DemoProps from './myComponents/DemoProps';
import Users from './myComponents/Users';

function App() {
  return (
   <>
    <DemoProps name="John" job="Developer" salary="100000"/>
    <DemoProps name="Jane" job="Designer" salary="100000"/>
    <DemoProps name="Jim" job="Manager" salary="100000"/>

    <Users/>
   </>
  );
}

export default App;
