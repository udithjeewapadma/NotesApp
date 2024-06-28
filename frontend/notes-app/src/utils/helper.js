export const validateEmail = (email) => {
    // Check for a valid email format and ensure it contains '@gmail.com'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.endsWith('@gmail.com');
  };

export const getInitials = (name) =>{
  if(!name) return "";

  const words = name.split(" ");
  let initials ="";

  for(let i =0; i< Math.min(words.length,2); i++){
    initials += words[i][0];
  }

  return initials.toUpperCase();

};
  