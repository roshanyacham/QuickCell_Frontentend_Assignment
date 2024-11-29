import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Grid from './components/grid';
import { GET_TICKETS_URL } from './constants';
import { loadGrid, mapUsersByUserId } from './util';
import Loader from './components/loader';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
    fetch(GET_TICKETS_URL)
      .then((resp) => resp.json())
      .then((res) => {
        const { tickets, users } = res;
        if (Array.isArray(tickets)) {
          setTickets(tickets);
        } else {
          console.error('Expected tickets to be an array, but got:', tickets);
        }
        setUserData(mapUsersByUserId(users));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (!tickets.length) return;
    const newGridData = loadGrid(tickets, grouping, ordering);
    console.log("Grid Data:", newGridData);
    setGridData(newGridData);
    setLoading(false);
  }, [grouping, ordering, tickets]);

  const onSetGrouping = useCallback((value) => {
    setLoading(true);
    setGrouping(value);
    saveSettings({ grouping: value });
  }, []);

  const onSetOrdering = useCallback((value) => {
    setLoading(true);
    setOrdering(value);
    saveSettings({ ordering: value });
  }, []);

  const saveSettings = useCallback((data) => {
    for (let key in data) {
      localStorage.setItem(key, data[key]);
    }
  }, []);

  const loadSettings = useCallback(() => {
    setGrouping(localStorage.getItem('grouping') || 'status');
    setOrdering(localStorage.getItem('ordering') || 'priority');
  }, []);

  return (
    <div className="App">
      <Header 
        grouping={grouping} 
        setGrouping={onSetGrouping} 
        ordering={ordering} 
        setOrdering={onSetOrdering} 
      />
      {loading ? (
        <Loader />
      ) : (
        <Grid gridData={gridData} grouping={grouping} userIdToData={userData} />
      )}
    </div>
  );
}

export default App;
