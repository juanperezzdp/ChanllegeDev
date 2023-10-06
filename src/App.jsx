import "./index.css";
import img from "./img/programadores-que-cooperan-desarrollo-programacion-que-trabajan-oficina-empresa-desarrollo-software_28283-1725.jpg";

const App = () => {
  return (
    <>
      <main className="container h-[100vh] ">
        <div className="absolute -z-10 w-[100%] h-[100vh] overflow-hidden">
          <img className="w-[100%]" src={img} alt="img" />
        </div>
        <div className=" w-[100%] h-[100vh]">
          <div className="flex items-center w-[100%] h-[100vh] absolute">
            <h1 className="text-9xl text-white">ChallengeDev</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
