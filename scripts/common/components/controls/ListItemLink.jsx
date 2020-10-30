import React, { useMemo, forwardRef } from 'react';
import * as PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

const ListItemLink = ({ icon, primary, to }) => {
  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default ListItemLink;
