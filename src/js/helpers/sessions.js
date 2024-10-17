
export const validateSession = () => {
  const session = localStorage.getItem('sessionValid');
  if (!session || session.length === 0 || session !== 'true') {
    return false;
  }
  return true;
};

export const validateSessionAdmin = () => {
  const session = localStorage.getItem('sessionValid');
  if (session === 'admin') {
    if (localStorage.getItem('emailSession') === 'admin@admin.com') return true;
  }
  return false;
};
