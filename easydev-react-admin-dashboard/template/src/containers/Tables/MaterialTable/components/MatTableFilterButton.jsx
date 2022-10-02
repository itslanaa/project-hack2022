import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FilterListIcon from 'mdi-react/FilterListIcon';

const MatTableFilterButton = ({ onRequestSort }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSort = property => (event) => {
    onRequestSort(event, property);
    handleClose();
  };

  return (
    <div>
      <IconButton
        className="material-table__toolbar-button"
        aria-owns={anchorEl ? 'simple-menu' : null}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FilterListIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="material-table__filter-menu"
      >
        <MenuItem onClick={handleSort('name')} className="material-table__filter-menu-item">Name</MenuItem>
        <MenuItem onClick={handleSort('calories')} className="material-table__filter-menu-item">
          Calories
        </MenuItem>
        <MenuItem onClick={handleSort('fat')} className="material-table__filter-menu-item">Fat</MenuItem>
        <MenuItem onClick={handleSort('carbs')} className="material-table__filter-menu-item">Carbs</MenuItem>
        <MenuItem onClick={handleSort('protein')} className="material-table__filter-menu-item">Protein</MenuItem>
      </Menu>
    </div>
  );
};

MatTableFilterButton.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
};

export default MatTableFilterButton;
