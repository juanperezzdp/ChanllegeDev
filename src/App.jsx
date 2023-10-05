import "./index.css";
import video from "./img/7btrrd.mp4";

const App = () => {
  return (
    <section className="container h-[110vh] ">
      <div className=" bg-black bg-opacity-50 w-[100%] h-[110vh]">
        <video className="absolute -z-10" autoPlay loop controls>
          <source src={video} type="video/mp4" />
        </video>
        <div className="flex items-center justify-center w-[100%] h-[100vh] absolute">
          <h1 className="text-9xl text-white">Dev</h1>
        </div>
      </div>
    </section>
  );
};

export default App;
