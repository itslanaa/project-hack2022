import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CloseIcon from 'mdi-react/CloseIcon';
import {
  CustomizerProps,
  SidebarProps,
  ThemeProps,
  RTLProps,
  RoundBordersProps,
  BlocksShadowsProps,
} from '@/shared/prop-types/ReducerProps';
import ToggleTheme from './ToggleTheme';
import ToggleCollapsedMenu from './ToggleCollapsedMenu';
import ToggleRoundBorders from './ToggleRoundBorders';
import ToggleShadow from './ToggleShadow';
import ToggleTopMenu from './ToggleTopMenu';
import ToggleRTL from './ToggleRTL';

const settings = `${process.env.PUBLIC_URL}/img/settings.svg`;

const Customizer = ({
  changeSidebarVisibility,
  sidebar,
  customizer,
  theme,
  rtl,
  roundBorders,
  blocksShadows,
  toggleTopNavigation,
  changeToDark,
  changeToLight,
  changeToRTL,
  changeToLTR,
  changeRoundBordersOn,
  changeRoundBordersOff,
  changeBlocksShadowsOn,
  changeBlocksShadowsOff,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const customizerClass = classNames({
    customizer__wrap: true,
    'customizer__wrap--open': isOpen,
  });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="customizer">
      <button className="customizer__btn" type="button" onClick={handleOpen}>
        <img className="customizer__btn-icon" src={settings} alt="icon" />
      </button>
      <div className={customizerClass} hidden={!isOpen}>
        <div className="customizer__title-wrap">
          <h5>Theme Customizer</h5>
          <button className="customizer__close-btn" type="button" onClick={handleOpen}>
            <CloseIcon />
          </button>
        </div>
        <p className="customizer__caption">This customizer allows you to see the different variations of the EasyDev.
          Create your own visual style for every project you do!
        </p>
        <ToggleCollapsedMenu changeSidebarVisibility={changeSidebarVisibility} sidebar={sidebar} />
        <ToggleTopMenu toggleTopNavigation={toggleTopNavigation} customizer={customizer} />
        <ToggleTheme changeToDark={changeToDark} changeToLight={changeToLight} theme={theme} />
        <ToggleRoundBorders
          changeRoundBordersOn={changeRoundBordersOn}
          changeRoundBordersOff={changeRoundBordersOff}
          roundBorders={roundBorders}
        />
        <ToggleShadow
          changeBlocksShadowsOn={changeBlocksShadowsOn}
          changeBlocksShadowsOff={changeBlocksShadowsOff}
          blocksShadows={blocksShadows}
        />
        <ToggleRTL changeToRTL={changeToRTL} changeToLTR={changeToLTR} rtl={rtl} />
      </div>
    </div>
  );
};

Customizer.propTypes = {
  sidebar: SidebarProps.isRequired,
  customizer: CustomizerProps.isRequired,
  theme: ThemeProps.isRequired,
  rtl: RTLProps.isRequired,
  roundBorders: RoundBordersProps.isRequired,
  blocksShadows: BlocksShadowsProps.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
  toggleTopNavigation: PropTypes.func.isRequired,
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  changeToRTL: PropTypes.func.isRequired,
  changeToLTR: PropTypes.func.isRequired,
  changeRoundBordersOn: PropTypes.func.isRequired,
  changeRoundBordersOff: PropTypes.func.isRequired,
  changeBlocksShadowsOn: PropTypes.func.isRequired,
  changeBlocksShadowsOff: PropTypes.func.isRequired,
};

export default Customizer;
