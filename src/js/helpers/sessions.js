
export const validateSession = () => {
  const session = localStorage.getItem('sessionValid');
  if (!session || session.length === 0 || session !== 'true') {
      return false;
  }
  return true;
};
