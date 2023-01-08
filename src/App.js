import logo from './logo.svg';
import './App.css';
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";


function App() {
    return (
        <>
            <header>
                <h1>테스트</h1>
            </header>
            <NewUser/>
            <UserList/>
        </>
    );
}

export default App;
