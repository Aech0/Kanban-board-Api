// components/KanbanBoard.js
import React, { useState, useEffect } from 'react';
import Ticket from './Ticket';
import DisplayDropdown from './DisplayDropdown'; // Import the new component
import './KanbanBoard.css';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  const fetchData = async () => {
    try {
      const response = await fetch('https://apimocha.com/quicksell/data');
      const data = await response.json();
      setTickets(data.tickets);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleGroupChange = (group) => {
    setGrouping(group);
  };

  const handleSortChange = (sort) => {
    setSorting(sort);
  };

  // Group and sort the tickets based on the user's choice
  const groupedTickets = groupTickets(tickets, grouping);
  const sortedTickets = sortTickets(groupedTickets, sorting);

  return (
    <div>
      <DisplayDropdown
      onGroupChange={handleGroupChange}
      onSortChange={handleSortChange}
    />
      <div className="kanban-board">
        {sortedTickets.map((group, index) => (
          <div key={index} className="ticket-group">
            {/* <img src={group.logo} alt="Group Logo" /> */}
            <h1 className=" margin " >{group.groupName}</h1>
            {group.tickets.map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;

// Helper function to group tickets

const groupTickets = (tickets, grouping) => {
  switch (grouping) {
    case 'status':
      return groupByStatus(tickets);
    case 'user':
      
      return groupByUser(tickets);
    case 'priority':
      return groupByPriority(tickets);
    default:
      return [];
  }
};
const groupByStatus = (tickets) => {
  const grouped = {};

  tickets.forEach((ticket) => {
    if (!grouped[ticket.status]) {
      grouped[ticket.status] = [];
    }
    grouped[ticket.status].push(ticket);
  });

  return Object.keys(grouped).map((status) => ({
    groupName: status,
    tickets: grouped[status],
    logo: getStatusLogo(status), // Use status-specific logo
  }));
};
const groupByUser = (tickets) => {
  const grouped = {};

  tickets.forEach((ticket) => {
    const userId = ticket.userId; 
    if (!grouped[userId]) {
      grouped[userId] = {
        groupName: `${userId}`,
        logo: getUserLogo(userId),
        tickets: [],
      };
    }
    // console.log(grouped);
    grouped[userId].tickets.push(ticket);
  });

  return Object.values(grouped);
};


const groupByPriority = (tickets) => {
  const grouped = {
    4: [], // Urgent
    3: [], // High
    2: [], // Medium
    1: [], // Low
    0: [], // No priority
  };

  tickets.forEach((ticket) => {
    grouped[ticket.priority].push(ticket);
  });

  return Object.keys(grouped).map((priority) => ({
    groupName: `Priority ${priority}`,
    tickets: grouped[priority],
    logo: getPriorityLogo(priority), // Use priority-specific logo
  }));
};

// Helper function to sort tickets

const sortTickets = (groupedTickets, sorting) => {
  return groupedTickets.map((group) => ({
    ...group,
    tickets: sortGroupTickets(group.tickets, sorting),
  }));
};

const sortGroupTickets = (tickets, sorting) => {
  switch (sorting) {
    case 'priority':
      return tickets.slice().sort((a, b) => b.priority - a.priority);
    case 'title':
      return tickets.slice().sort((a, b) => a.title.localeCompare(b.title));
    default:
      return tickets;
  }
};


// Function to get user logo based on userId
const getUserLogo = (userId) => {
  let res = `./imgs/${userId}_logo.png`;
  return res ;
};

// Function to get logo based on priority level
const getPriorityLogo = (priority) => {
  return `./imgs/${priority}_logo.png`;
};

// Function to get logo based on status
const getStatusLogo = (status) => {
  switch (status) {
    case 'Todo':
      return './imgs/todo_logo.png';
    case 'In progress':
      return './imgs/inprogress_logo.png';
    case 'Done':
      return './imgs/done_logo.png';
    default:
      return './imgs/Backlog_logo.png'; 
  }
};