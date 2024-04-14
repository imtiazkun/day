import { Tab, Tabs, User } from "@nextui-org/react";
import moment from "moment";
import { useEffect, useState } from "react";
import DataView from "./components/DataView";

function App() {
  const [time, setTime] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-20 pt-10 min-h-screen">
      <div className="flex justify-between items-start bg-gray-900">
        <User
          name="Imtiaz Al Shariar"
          description="Developer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
        <p>{time}</p>
      </div>

      <div className="mt-10">
        <div className="mt-10">
          <DataView />
        </div>
      </div>
    </div>
  );
}

export default App;
