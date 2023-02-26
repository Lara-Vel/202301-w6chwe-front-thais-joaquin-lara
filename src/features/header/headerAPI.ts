const getRobot = async () => {
  const response = await fetch(
    'https://two02301-w6chwe-thais-joaquin-lara.onrender.com/'
  );
  const robots = await response.json();
  return robots;
};

export default getRobot;
