import { useState } from 'react';
import Card from './Card';

export default function Monitoring() {
  const [ temperature, setTemperature ] = useState(25);
  const [ humidity, setHumidity ] = useState(30);
  const [ co2, setCO2 ] = useState(500);
  return (
    <div className="w-screen h-screen flex flex-col">
      <nav className="w-full h-1/6 bg-blue-600 flex justify-center items-center">
        <h1 className="text-3xl text-white font-bold">Monitoreo y Control de Sensores</h1>
      </nav>
      <main className="w-full flex-1 p-10 grid grid-cols-3 gap-5 items-center">
        <Card
          title="Sensor de Temperatura"
          subTitle={`Temperatura Actual: ${temperature}°C`}
          secondSubTitle="Rango Óptimo 20°C - 30°C"
          actions={[
            { title: "Aumentar Temperatura", onClick: () => { setTemperature(value => value + 5) } },
            { title: "Disminuir Temperatura", onClick: () => { setTemperature(value => value - 5) } },
            { title: "Ajustar Temperatura", onClick: () => { setTemperature(25) } },
          ]}
        />
        <Card
          title="Sensor de Humedad del Suelo"
          subTitle={`Humedad Actual: ${humidity}%`}
          secondSubTitle="Rango Óptimo 40% - 60%"
          actions={[
            { title: "Aumentar Humedad", onClick: () => { setHumidity(value => value + 10) } },
            { title: "Disminuir Humedad", onClick: () => { setHumidity(value => value - 10) } },
            { title: "Ajustar Humedad", onClick: () => { setHumidity(50) } },
          ]}
        />
        <Card
          title="Sensor de CO2"
          subTitle={`Nivel Actual ${co2} ppm`}
          secondSubTitle="Rango Óptimo 400ppm - 500ppm"
          actions={[
            { title: "Aumentar CO2", onClick: () => { setCO2(value => value + 100) } },
            { title: "Disminuir CO2", onClick: () => { setCO2(value => value - 100) } },
            { title: "Ajustar CO2", onClick: () => { setCO2(500) } },
          ]}
        />
      </main>
    </div>
  )
}