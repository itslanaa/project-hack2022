import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BasicTables from '../../../Tables/BasicTables/index';
import DataTable from '../../../Tables/DataTable/index';
import DragAndDropTable from '../../../Tables/DnDTable/index';
import EditableTable from '../../../Tables/EditableTable/index';
import ResizableTable from '../../../Tables/ResizableTable';
import MaterialTable from '../../../Tables/MaterialTable/index';
import ApiTable from '../../../Tables/ApiTable';

export default () => (
  <Switch>
    <Route path="/tables/basic_tables" component={BasicTables} />
    <Route path="/tables/data_table" component={DataTable} />
    <Route path="/tables/dnd_table" component={DragAndDropTable} />
    <Route path="/tables/editable_table" component={EditableTable} />
    <Route path="/tables/resizable_table" component={ResizableTable} />
    <Route path="/tables/material_table" component={MaterialTable} />
    <Route path="/tables/api_table" component={ApiTable} />
  </Switch>
);
