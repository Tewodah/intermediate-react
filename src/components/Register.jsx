
import  { useState } from "react"; 
import UsersList from "./userslist";


export default function Register() {

    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const [userslist, setUsersList] = useState([]);
    
    function handleSubmit (e) {   
        e.preventDefault();
        console.log(firstName, middleName , lastName, email, password);
        setUsersList([...userslist, {firstName,  middleName,  lastName, email, password}]);
    }   
    
    return (
      <>
        <form onSubmit={handleSubmit} className="space-y-6 w-2/3 mx-auto p-4 border border-1 m-6 border-yellow-500 rounded-lg">
        <h1 className="text-4xl text-white">Registration</h1>
          <div className="grid gap-6 mb-6 md:grid-cols-2"> </div>
          <div className="mb-6">
            <label
              htmlFor="firstname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="email"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="first name"
              onChange = {(e) => { setFirstName(e.target.value)}}
              
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="middlename"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="email"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="middlename"
              onChange = {(e) => { setMiddleName(e.target.value)}}
              
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="lastname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Last Name
            </label>
            <input
              type="text"
              id="email"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="lastname"
              onChange = {(e) => { setLastName(e.target.value)}}
              
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              onChange = {(e) => { setEmail(e.target.value)}}
             
            />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2"></div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              
           >
             Password
            </label>
            <input
              type="password"
              id="email"
              required minlength="7"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="fill your password here"
              onChange = {(e) => { setPassword(e.target.value)}}
              
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <UsersList userslist={userslist} />
      </>
    );
}