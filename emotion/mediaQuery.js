const mediaQuery = size => {
  const bp = {
    sm: 600,
    md: 840,
    lg: 1024,
    xl: 1220,
  };

  return `@media (min-width: ${bp[size]}px)`;
};

export default mediaQuery;
