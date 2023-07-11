export const isActive = (path: string) => {
  return window.location.pathname === path;
};

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};
