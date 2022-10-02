import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BasicForm from '../../../Form/ReactFinalForm/BasicForm/index';
import CheckFormControls from '../../../Form/ReactFinalForm/CheckFormControls/index';
import FileUpload from '../../../Form/ReactFinalForm/FileUpload/index';
import FloatingLabelsForm from '../../../Form/ReactFinalForm/FloatingLabelsForm/index';
import FormDropzone from '../../../Form/ReactFinalForm/FormDropzone/index';
import FormLayouts from '../../../Form/ReactFinalForm/FormLayouts/index';
import FormPicker from '../../../Form/ReactFinalForm/FormPicker/index';
import FormValidation from '../../../Form/ReactFinalForm/FormValidation/index';
import MaskForm from '../../../Form/ReactFinalForm/MaskForm/index';
import MaterialForm from '../../../Form/ReactFinalForm/MaterialForm/index';
import WizardForm from '../../../Form/ReactFinalForm/WizardForm/index';
import BasicHookForm from '../../../Form/ReactHookForm/BasikHookForm';
import FormHookValidation from '../../../Form/ReactHookForm/FormHookValidation';
import FormHookWizard from '../../../Form/ReactHookForm/WizardForm';

export default () => (
  <Switch>
    <Route path="/forms/react_final_form/basic_form" component={BasicForm} />
    <Route path="/forms/react_final_form/check_form_controls" component={CheckFormControls} />
    <Route path="/forms/react_final_form/file_upload" component={FileUpload} />
    <Route path="/forms/react_final_form/floating_labels_form" component={FloatingLabelsForm} />
    <Route path="/forms/react_final_form/form_dropzone" component={FormDropzone} />
    <Route path="/forms/react_final_form/form_layouts" component={FormLayouts} />
    <Route path="/forms/react_final_form/form_picker" component={FormPicker} />
    <Route path="/forms/react_final_form/form_validation" component={FormValidation} />
    <Route path="/forms/react_final_form/mask_form" component={MaskForm} />
    <Route path="/forms/react_final_form/material_form" component={MaterialForm} />
    <Route path="/forms/react_final_form/wizard_form" component={WizardForm} />
    <Route path="/forms/react_hook_form/basic_form" component={BasicHookForm} />
    <Route path="/forms/react_hook_form/form_validation" component={FormHookValidation} />
    <Route path="/forms/react_hook_form/wizard_form" component={FormHookWizard} />
  </Switch>
);
