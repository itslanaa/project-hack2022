import React from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

const SidebarContent = ({
  onClick, changeToLight, changeToDark, sidebarCollapse,
}) => (
  <div className="sidebar__content">
    <ul className="sidebar__block">
      <SidebarLink
        title="Online Marketing Dashboard"
        icon="home"
        route="/online_marketing_dashboard"
        onClick={onClick}
      />
      <SidebarLink
        title="E-commerce Dashboard"
        icon="store"
        route="/e_commerce_dashboard"
        onClick={onClick}
      />
      <SidebarLink
        title="App Dashboard"
        icon="smartphone"
        route="/app_dashboard"
        onClick={onClick}
      />
      <SidebarLink
        title="Booking Dashboard"
        icon="apartment"
        route="/booking_dashboard"
        onClick={onClick}
      />
      <SidebarLink
        title="Finance Dashboard"
        icon="rocket"
        route="/finance_dashboard"
        onClick={onClick}
      />
      <SidebarLink
        title="Fitness Dashboard"
        icon="heart-pulse"
        route="/fitness_dashboard"
        onClick={onClick}
      />
      <SidebarCategory title="Layout" icon="layers" sidebarCollapse={sidebarCollapse}>
        <button className="sidebar__link" type="button" onClick={changeToLight}>
          <p className="sidebar__link-title">Light Theme</p>
        </button>
        <button className="sidebar__link" type="button" onClick={changeToDark}>
          <p className="sidebar__link-title">Dark Theme</p>
        </button>
      </SidebarCategory>
      <SidebarLink
        title="Log In"
        route="/log_in"
        icon="user"
        onClick={onClick}
      />
    </ul>
    <ul className="sidebar__block">
      <SidebarCategory title="UI Elements" icon="diamond" sidebarCollapse={sidebarCollapse}>
        <SidebarLink title="Alerts" route="/ui/alerts" onClick={onClick} />
        <SidebarLink title="Buttons" route="/ui/buttons" onClick={onClick} />
        <SidebarLink title="Carousel" route="/ui/carousel" onClick={onClick} />
        <SidebarLink title="Collapse" route="/ui/collapse" onClick={onClick} />
        <SidebarLink title="Datepicker" route="/ui/datepicker" onClick={onClick} />
        <SidebarLink title="Grids" route="/ui/grids" onClick={onClick} />
        <SidebarLink title="Modals" route="/ui/modals" onClick={onClick} />
        <SidebarLink title="Notifications" route="/ui/notifications" onClick={onClick} />
        <SidebarLink title="Panels" route="/ui/panels" onClick={onClick} />
        <SidebarLink title="Progress Bars" route="/ui/progress_bars" onClick={onClick} />
        <SidebarLink title="Range Sliders" route="/ui/range_sliders" onClick={onClick} />
        <SidebarLink title="Tabs" route="/ui/tabs" onClick={onClick} />
        <SidebarLink title="Timeline" route="/ui/timeline" onClick={onClick} />
        <SidebarLink title="Tooltips & Popovers" route="/ui/tooltips" onClick={onClick} />
        <SidebarLink title="Typography" route="/ui/typography" onClick={onClick} />
      </SidebarCategory>
      <SidebarLink title="Mail Application" icon="envelope" route="/mail" onClick={onClick} />
      <SidebarLink title="Chat Application" icon="bubble" route="/chat" onClick={onClick} />
      <SidebarLink title="Todo Application" newLink icon="book" route="/todo" onClick={onClick} />
      <SidebarCategory title="Forms" icon="file-add" sidebarCollapse={sidebarCollapse}>
        <SidebarCategory title="React final form" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Basic Form" route="/forms/react_final_form/basic_form" onClick={onClick} />
          <SidebarLink
            title="Check Form Controls"
            route="/forms/react_final_form/check_form_controls"
            onClick={onClick}
          />
          <SidebarLink title="File Upload" route="/forms/react_final_form/file_upload" onClick={onClick} />
          <SidebarLink
            title="Floating Labels Form"
            route="/forms/react_final_form/floating_labels_form"
            onClick={onClick}
          />
          <SidebarLink title="Form Dropzone" route="/forms/react_final_form/form_dropzone" onClick={onClick} />
          <SidebarLink title="Form Layouts" route="/forms/react_final_form/form_layouts" onClick={onClick} />
          <SidebarLink title="Form Picker" route="/forms/react_final_form/form_picker" onClick={onClick} />
          <SidebarLink
            title="Form Validation"
            route="/forms/react_final_form/form_validation"
            onClick={onClick}
          />
          <SidebarLink title="Mask Form" route="/forms/react_final_form/mask_form" onClick={onClick} />
          <SidebarLink title="Material Form" route="/forms/react_final_form/material_form" onClick={onClick} />
          <SidebarLink title="Wizard Form" route="/forms/react_final_form/wizard_form" onClick={onClick} />
        </SidebarCategory>
        <SidebarCategory title="React hook form" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Basic Form" route="/forms/react_hook_form/basic_form" onClick={onClick} />
          <SidebarLink title="Form Validation" route="/forms/react_hook_form/form_validation" onClick={onClick} />
          <SidebarLink title="Wizard form" route="/forms/react_hook_form/wizard_form" onClick={onClick} />
        </SidebarCategory>
      </SidebarCategory>
      <SidebarCategory title="Tables" icon="list" isNew sidebarCollapse={sidebarCollapse}>
        <SidebarLink title="Api table" route="/tables/api_table" onClick={onClick} />
        <SidebarLink title="Basic tables" route="/tables/basic_tables" onClick={onClick} />
        <SidebarLink title="Data table" newLink route="/tables/data_table" onClick={onClick} />
        <SidebarLink title="Drag & Drop table" newLink route="/tables/dnd_table" onClick={onClick} />
        <SidebarLink title="Editable table" route="/tables/editable_table" onClick={onClick} />
        <SidebarLink title="Material table" route="/tables/material_table" onClick={onClick} />
        <SidebarLink
          title="Width resizable table"
          newLink
          route="/tables/resizable_table"
          onClick={onClick}
        />
      </SidebarCategory>
      <SidebarCategory title="Charts" icon="chart-bars" sidebarCollapse={sidebarCollapse}>
        <SidebarLink title="ChartsJS" route="/charts/charts_js" onClick={onClick} />
        <SidebarLink title="React-vis" route="/charts/react_vis" onClick={onClick} />
        <SidebarLink title="Recharts" route="/charts/recharts" onClick={onClick} />
      </SidebarCategory>
      <SidebarCategory title="Maps" icon="map" isNew sidebarCollapse={sidebarCollapse}>
        <SidebarLink title="Google map" route="/maps/google_map" onClick={onClick} />
        <SidebarLink title="Vector map" route="/maps/vector_map" onClick={onClick} />
        <SidebarLink
          title="Map with api request"
          route="/maps/map_with_request"
          newLink
          onClick={onClick}
        />
      </SidebarCategory>
    </ul>
    <ul className="sidebar__block">
      <SidebarCategory title="Account" icon="user" isNew sidebarCollapse={sidebarCollapse}>
        <SidebarLink title="Email Confirmation" route="/account/email_confirmation" />
        <SidebarLink title="Lock Screen" route="/lock_screen" />
        <SidebarLink title="Log In Photo" route="/log_in_photo" />
        <SidebarLink title="Profile" route="/account/profile" onClick={onClick} />
        <SidebarLink title="Register" route="/register" />
        <SidebarLink title="Register Photo" route="/register_photo" />
        <SidebarLink title="Reset Password" route="/reset_password" newLink />
        <SidebarLink title="Reset Password Photo" route="/reset_password_photo" newLink />
      </SidebarCategory>
      <SidebarCategory title="E-commerce" icon="cart" sidebarCollapse={sidebarCollapse}>
        <SidebarLink title="Cart" route="/e-commerce/cart" onClick={onClick} />
        <SidebarLink title="Catalog" route="/e-commerce/catalog" onClick={onClick} />
        <SidebarLink title="Orders List" route="/e-commerce/orders_list" onClick={onClick} />
        <SidebarLink title="Payment" route="/e-commerce/payment" onClick={onClick} />
        <SidebarLink title="Product Edit" route="/e-commerce/product_edit" onClick={onClick} />
        <SidebarLink title="Product Page" route="/e-commerce/product_page" onClick={onClick} />
        <SidebarLink title="Products List" route="/e-commerce/products_list" onClick={onClick} />
      </SidebarCategory>
      <SidebarCategory title="Default Pages" icon="file-empty" sidebarCollapse={sidebarCollapse}>
        <SidebarLink title="404" route="/404" />
        <SidebarLink title="Calendar" route="/default_pages/calendar" onClick={onClick} />
        <SidebarLink title="FAQs" route="/default_pages/faq" onClick={onClick} />
        <SidebarLink title="Gallery" route="/default_pages/gallery" onClick={onClick} />
        <SidebarLink title="Invoice template" route="/default_pages/invoice_template" onClick={onClick} />
        <SidebarLink title="Pricing Cards" route="/default_pages/pricing_cards" onClick={onClick} />
        <SidebarLink title="Project Summary" route="/default_pages/project_summary" onClick={onClick} />
        <SidebarLink title="Search Results" route="/default_pages/search_results" onClick={onClick} />
        <SidebarLink title="Text Editor" route="/default_pages/text_editor" onClick={onClick} />
      </SidebarCategory>
      <SidebarCategory title="Multilevel Menu " icon="menu" sidebarCollapse={sidebarCollapse}>
        <SidebarLink title="Second Level Item" />
        <SidebarCategory title="Second Level Item" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Third Level Item" />
          <SidebarLink title="Third Level Item" />
        </SidebarCategory>
      </SidebarCategory>
    </ul>
    <ul className="sidebar__block">
      <SidebarLink title="Log Out" icon="exit" route="/log_in" />
    </ul>
    <ul className="sidebar__block">
      <SidebarLink
        title="Documentation"
        icon="text-align-justify"
        route="/documentation/introduction"
        onClick={onClick}
      />
    </ul>
  </div>
);

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  sidebarCollapse: PropTypes.bool,
};

SidebarContent.defaultProps = {
  sidebarCollapse: false,
  onClick: () => {},
};

export default SidebarContent;
