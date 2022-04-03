import React from 'react';
import MainPage from './MainContent/MainPage';
import TypesOfCleaning from './MainContent/TypesOfCleaning';
import CalendarListPage from './MainContent/CalendarListPage';

function Main() {
  return (
      <>
    <div><MainPage/></div>
    <div><TypesOfCleaning/></div>
    <div><CalendarListPage/></div>
    </>
  )
}

export default Main