const ligthTheme = {
  backgroundColor: 'white',
  color: '#646777',
};

const darkTheme = {
  backgroundColor: '#2e2c34',
  color: '#dddddd',
};

export const themes = {
  ligthTheme,
  darkTheme,
};

export const emailPatter = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
export const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/;

export const toPercent = (decimal, fixed = 0) => `${decimal.toFixed(fixed)}%`;

const getTooltipStyles = (themeName, type) => {
  switch (themeName) {
    case 'theme-dark': {
      const { backgroundColor, color } = darkTheme;
      return {
        contentStyle: { backgroundColor },
        itemStyle: type === 'defaultItems' ? null : { color },
      };
    }
    case 'theme-light': {
      return ligthTheme;
    }
    default: return ligthTheme;
  }
};

export default getTooltipStyles;
