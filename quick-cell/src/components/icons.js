import backlogIcon from '../assets/Backlog.svg';
import cancelledIcon from '../assets/Cancelled.svg';
import doneIcon from '../assets/Done.svg';
import inProgressIcon from '../assets/in-progress.svg';
import todoIcon from '../assets/To-do.svg';

import displayIcon from '../assets/Display.svg';
import downIcon from '../assets/down.svg';

import lowPriorityIcon from '../assets/Img - Low Priority.svg';
import mediumPriorityIcon from '../assets/Img - Medium Priority.svg';
import highPriorityIcon from '../assets/Img - High Priority.svg';
import urgentPriorityColorIcon from '../assets/SVG - Urgent Priority colour.svg';
import noPriorityIcon from '../assets/No-priority.svg';

export const getStatusIcon = (status) => {
  switch (status) {
    case 'Backlog':
      return <img src={backlogIcon} alt="Backlog" className="status-icon" />;
    case 'Todo':
      return <img src={todoIcon} alt="To-Do" className="status-icon" />;
    case 'In progress':
      return <img src={inProgressIcon} alt="In Progress" className="status-icon" />;
    case 'Done':
      return <img src={doneIcon} alt="Done" className="status-icon" />;
    case 'Canceled':
      return <img src={cancelledIcon} alt="Cancelled" className="status-icon" />;
    default:
      return null;
  }
};

export const getGenericIcon = (type) => {
  switch (type) {
    case 'display':
      return <img src={displayIcon} alt="Display" className="generic-icon" />;
    case 'down':
      return <img src={downIcon} alt="Dropdown Arrow" className="generic-icon" />;
    default:
      return null;
  }
};

export const getPriorityIcon = (priority) => {
  switch (priority) {
      case "Low":
          return <img src={lowPriorityIcon} alt="Low Priority" className="priority-icon" />;
      case "Medium":
          return <img src={mediumPriorityIcon} alt="Medium Priority" className="priority-icon" />;
      case "High":
          return <img src={highPriorityIcon} alt="High Priority" className="priority-icon" />;
      case "Urgent":
          return <img src={urgentPriorityColorIcon} alt="Urgent Priority" className="priority-icon" />;
      default:
          return <img src={noPriorityIcon} alt="No Priority" className="priority-icon" />;
  }
};