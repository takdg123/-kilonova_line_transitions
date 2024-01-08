import React, { useState, useEffect } from 'react';
import NavBar from './navigate';
import PeriodicTable from './PeriodicTable'
import data from "./SpeciesInfoJSON.json"
import ImageComponent from './image'
import FilterBar from './filter'
import Footer from './footer'

function generateNames(selectedElements, neutralChecked, singlyIonizedChecked, doublyIonizedChecked) {
  const ionizationStates = [];
  if (neutralChecked) ionizationStates.push('I');
  if (singlyIonizedChecked) ionizationStates.push('II');
  if (doublyIonizedChecked) ionizationStates.push('III');

  const names = [];
  selectedElements.forEach((element) => {
    ionizationStates.forEach((state) => {
      names.push(`${element} ${state}`);
    });
  });

  return names;
}

function ResonancePage() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedElements, setSelectedElements] = useState(["Sr", "Y", "Ba", "Ce"]);
  const [neutralChecked, setNeutralChecked] = useState(false);
  const [singlyIonizedChecked, setSinglyIonizedChecked] = useState(true);
  const [doublyIonizedChecked, setDoublyIonizedChecked] = useState(false);
  const [generatedNames, setGeneratedNames] = useState([]); 

  const handleToggleClick = () => {
    setOpen(!open);
    if (!show){
      setShow(false);
    }
    const uniqueGeneratedNames = Array.from(new Set(generatedNames));
    setGeneratedNames(uniqueGeneratedNames);

    if (!open){
      const newSelectedElement = []

      uniqueGeneratedNames.forEach((element) => {
        const baseElement = element.split(' ')[0]; 
        if (!newSelectedElement.includes(element)){
          newSelectedElement.push(baseElement)
        }
      })
      setSelectedElements(newSelectedElement);
    }
  };
  
  const handleAccordionClick = () => {
    setShow(!show);
    const uniqueGeneratedNames = Array.from(new Set(generatedNames));
    setGeneratedNames(uniqueGeneratedNames);
  };

  const handleElementClick = (symbol) => {
    if (!selectedElements.includes(symbol)) {
      setSelectedElements([...selectedElements, symbol]);
    } else {
      setSelectedElements(selectedElements.filter((elem) => elem !== symbol));
    }
  };

  const handleElementButtonClick = (elementToRemove) => {
    const baseElement = elementToRemove.split(' ')[0]; 
    const updatedNames = generatedNames.filter((element) => element !== elementToRemove);
    const uniqueGeneratedNames = Array.from(new Set(updatedNames));
    setGeneratedNames(uniqueGeneratedNames); 
  };

  useEffect(() => {
    if (!open) {
      const newGeneratedNames = generateNames(selectedElements, neutralChecked, singlyIonizedChecked, doublyIonizedChecked);
      const uniqueGeneratedNames = Array.from(new Set(newGeneratedNames));
      setGeneratedNames(uniqueGeneratedNames); 

    } 
  }, [open, selectedElements, neutralChecked, singlyIonizedChecked, doublyIonizedChecked]);

  return (
    <div>
      <NavBar value="3" />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div key="body" style={{ marginBottom: '20px', width: '100%' }}>
          <FilterBar
            open={open}
            show={show}
            generatedNames={generatedNames}
            handleAccordionClick={handleAccordionClick}
            handleToggleClick={handleToggleClick}
            neutralChecked={neutralChecked}
            singlyIonizedChecked={singlyIonizedChecked}
            doublyIonizedChecked={doublyIonizedChecked}
            handleElementButtonClick={handleElementButtonClick}
            temp={false}
            setTemp={false}
          />
          {
          (open)? <PeriodicTable elements={selectedElements} onElementClick={handleElementClick} />:
          [
            <div key="image" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            {
              Object.keys(data).map((element, index) => {
              if (generatedNames.includes(element)){
                return (
                  <div key={`${element}-${index}`} style={{ marginTop: '20px' }}>
                    <ImageComponent location={data[element].filename} type="resonance" species={element}/>
                  </div>
                  )
              }})
            }
            </div>
          ]
          }
        </div>
      </div>
      {(open)?null:<Footer/>}
    </div>
  );
}

export default ResonancePage;