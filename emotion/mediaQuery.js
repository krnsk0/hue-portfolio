const mediaQuery = size => {
  const bp = {
    sm: 600,
    md: 800,
    lg: 1024,
    xl: 1440,
  };

  return `@media (min-width: ${bp[size]}px)`;
};

export default mediaQuery;
